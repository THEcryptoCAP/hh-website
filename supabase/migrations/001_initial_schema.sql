-- Hanshills & Co. Database Schema
-- Create all necessary tables for the application

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- Insights/Articles Table
-- =====================================================
CREATE TABLE IF NOT EXISTS insights (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  author TEXT,
  published_date TIMESTAMP WITH TIME ZONE,
  category TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_insights_slug ON insights(slug);
CREATE INDEX idx_insights_category ON insights(category);
CREATE INDEX idx_insights_published_date ON insights(published_date DESC);
CREATE INDEX idx_insights_tags ON insights USING GIN(tags);

-- =====================================================
-- Cohort Applications Table
-- =====================================================
CREATE TABLE IF NOT EXISTS cohort_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  
  -- Section 1: Basic Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  
  -- Section 2: Professional Background
  current_role TEXT,
  company TEXT,
  years_experience INTEGER,
  industry TEXT,
  
  -- Section 3: Project/Business Details
  project_name TEXT,
  project_description TEXT,
  stage TEXT, -- ideation, mvp, growth, scaling, etc.
  
  -- Section 4: Proof of Life
  website_url TEXT,
  pitch_deck_url TEXT, -- Supabase Storage URL
  inspiration TEXT,
  
  -- Section 5: Commitment & Summit
  understands_fee BOOLEAN DEFAULT FALSE,
  signature_name TEXT,
  signature_date DATE,
  payment_preference TEXT, -- pay_now, reserve, invoice
  
  -- GST Details (conditional)
  requires_gst BOOLEAN DEFAULT FALSE,
  company_legal_name TEXT,
  gstin TEXT,
  billing_address TEXT,
  
  -- Application Status
  status TEXT DEFAULT 'submitted', -- submitted, under_review, accepted, rejected
  payment_status TEXT DEFAULT 'pending', -- pending, paid, failed, refunded
  payment_id TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_cohort_email ON cohort_applications(email);
CREATE INDEX idx_cohort_status ON cohort_applications(status);
CREATE INDEX idx_cohort_payment_status ON cohort_applications(payment_status);
CREATE INDEX idx_cohort_created_at ON cohort_applications(created_at DESC);

-- =====================================================
-- Contact Messages Table
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, read, replied
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_contact_email ON contact_messages(email);
CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_contact_created_at ON contact_messages(created_at DESC);

-- =====================================================
-- Row Level Security (RLS) Policies
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE cohort_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Insights: Public read access
CREATE POLICY "Public can read published insights"
  ON insights FOR SELECT
  USING (published_date IS NOT NULL AND published_date <= NOW());

-- Insights: Authenticated users can insert/update (for future admin panel)
CREATE POLICY "Authenticated users can manage insights"
  ON insights FOR ALL
  USING (auth.role() = 'authenticated');

-- Cohort Applications: Anyone can insert (for form submission)
CREATE POLICY "Anyone can submit cohort applications"
  ON cohort_applications FOR INSERT
  WITH CHECK (true);

-- Cohort Applications: Users can only read their own applications
CREATE POLICY "Users can read their own applications"
  ON cohort_applications FOR SELECT
  USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Contact Messages: Anyone can insert (for form submission)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- =====================================================
-- Storage Buckets
-- =====================================================

-- Create storage bucket for pitch decks
INSERT INTO storage.buckets (id, name, public)
VALUES ('pitch-decks', 'pitch-decks', false)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for insight images
INSERT INTO storage.buckets (id, name, public)
VALUES ('insight-images', 'insight-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for pitch decks
CREATE POLICY "Anyone can upload pitch decks"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'pitch-decks');

CREATE POLICY "Users can read their own pitch decks"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'pitch-decks');

-- Storage policies for insight images
CREATE POLICY "Public can read insight images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'insight-images');

CREATE POLICY "Authenticated users can upload insight images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'insight-images' AND auth.role() = 'authenticated');

-- =====================================================
-- Functions
-- =====================================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_insights_updated_at
  BEFORE UPDATE ON insights
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cohort_applications_updated_at
  BEFORE UPDATE ON cohort_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Sample Data (Optional - for development)
-- =====================================================

-- Insert sample insights
INSERT INTO insights (title, slug, excerpt, content, author, published_date, category, tags)
VALUES 
  (
    'The Future of Venture Capital in India',
    'future-of-vc-india',
    'Exploring regulatory changes and market dynamics shaping India''s VC landscape',
    'Full article content here...',
    'Hanshills Research Team',
    NOW(),
    'Venture Capital',
    ARRAY['VC', 'India', 'Investment']
  ),
  (
    'Strategic Advisory: Navigating Growth Challenges',
    'strategic-advisory-growth',
    'How strategic advisory can help businesses overcome scaling challenges',
    'Full article content here...',
    'Hanshills Advisory',
    NOW(),
    'Advisory',
    ARRAY['Strategy', 'Growth', 'Business']
  )
ON CONFLICT (slug) DO NOTHING;
