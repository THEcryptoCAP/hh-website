import { createClient } from './server';

/**
 * Query functions for Supabase database operations
 */

// ===============================
// Insights/Articles Queries
// ===============================

export interface Insight {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    cover_image: string | null;
    author: string | null;
    published_date: string | null;
    category: string | null;
    tags: string[] | null;
    created_at: string;
    updated_at: string;
}

/**
 * Get all published insights
 */
export async function getAllInsights(): Promise<Insight[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('insights')
        .select('*')
        .order('published_date', { ascending: false });

    if (error) {
        console.error('Error fetching insights:', error);
        return [];
    }

    return data || [];
}

/**
 * Get insight by slug
 */
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('insights')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error(`Error fetching insight with slug ${slug}:`, error);
        return null;
    }

    return data;
}

/**
 * Get insights by category
 */
export async function getInsightsByCategory(category: string): Promise<Insight[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('insights')
        .select('*')
        .eq('category', category)
        .order('published_date', { ascending: false });

    if (error) {
        console.error(`Error fetching insights for category ${category}:`, error);
        return [];
    }

    return data || [];
}

/**
 * Search insights by query
 */
export async function searchInsights(query: string): Promise<Insight[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('insights')
        .select('*')
        .or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`)
        .order('published_date', { ascending: false });

    if (error) {
        console.error('Error searching insights:', error);
        return [];
    }

    return data || [];
}

// ===============================
// Cohort Application Queries
// ===============================

export interface CohortApplication {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    linkedin_url: string | null;
    current_role: string | null;
    company: string | null;
    years_experience: number | null;
    industry: string | null;
    project_name: string | null;
    project_description: string | null;
    stage: string | null;
    website_url: string | null;
    pitch_deck_url: string | null;
    inspiration: string | null;
    understands_fee: boolean;
    signature_name: string | null;
    signature_date: string | null;
    payment_preference: string | null;
    requires_gst: boolean;
    company_legal_name: string | null;
    gstin: string | null;
    billing_address: string | null;
    status: string;
    payment_status: string;
    payment_id: string | null;
    created_at: string;
    updated_at: string;
}

/**
 * Create a new cohort application
 */
export async function createCohortApplication(
    applicationData: Partial<CohortApplication>
): Promise<{ success: boolean; data?: CohortApplication; error?: string }> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('cohort_applications')
        .insert(applicationData)
        .select()
        .single();

    if (error) {
        console.error('Error creating cohort application:', error);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

/**
 * Update cohort application payment status
 */
export async function updateApplicationPaymentStatus(
    applicationId: string,
    paymentStatus: string,
    paymentId?: string
): Promise<{ success: boolean; error?: string }> {
    const supabase = await createClient();

    const updateData: any = {
        payment_status: paymentStatus,
        updated_at: new Date().toISOString(),
    };

    if (paymentId) {
        updateData.payment_id = paymentId;
    }

    const { error } = await supabase
        .from('cohort_applications')
        .update(updateData)
        .eq('id', applicationId);

    if (error) {
        console.error('Error updating payment status:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}

// ===============================
// Contact Messages Queries
// ===============================

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    status: string;
    created_at: string;
}

/**
 * Create a new contact message
 */
export async function createContactMessage(
    messageData: Omit<ContactMessage, 'id' | 'status' | 'created_at'>
): Promise<{ success: boolean; data?: ContactMessage; error?: string }> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('contact_messages')
        .insert(messageData)
        .select()
        .single();

    if (error) {
        console.error('Error creating contact message:', error);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}
