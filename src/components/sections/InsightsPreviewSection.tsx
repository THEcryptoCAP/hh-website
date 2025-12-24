import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';

// Mock data - in production, fetch from Supabase
const mockInsights = [
    {
        title: 'The Future of Venture Capital in India',
        excerpt: 'Exploring regulatory changes and market dynamics shaping India\'s VC landscape in 2025.',
        slug: 'future-of-vc-india',
        category: 'Venture Capital',
        image: '/assets/images/insights/vc-india.jpg', // Placeholder
        published_date: '2025-01-15',
    },
    {
        title: 'Strategic Advisory: Navigating Growth Challenges',
        excerpt: 'How strategic advisory can help businesses overcome scaling challenges and achieve sustainable growth.',
        slug: 'strategic-advisory-growth',
        category: 'Advisory',
        image: '/assets/images/insights/advisory.jpg', // Placeholder
        published_date: '2025-01-10',
    },
    {
        title: 'Building Ventures from Ground Up',
        excerpt: 'Our approach to studio venture creation, from ideation to market leadership.',
        slug: 'studio-venture-approach',
        category: 'Studio Venture',
        image: '/assets/images/insights/studio.jpg', // Placeholder
        published_date: '2025-01-05',
    },
];

export function InsightsPreviewSection() {
    return (
        <section className="section-padding bg-background">
            <div className="content-wrapper">
                <FadeIn className="text-center mb-12">
                    <div className="inline-block px-5 py-2 bg-secondary/10 rounded-full">
                        <span className="text-sm font-semibold text-secondary tracking-wide">
                            LATEST INSIGHTS
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                        Expert Perspectives on<br />
                        <span className="text-secondary">Innovation & Growth</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Thought leadership on venture capital, strategic advisory, and
                        building successful ventures.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockInsights.map((insight) => (
                        <StaggerItem key={insight.slug}>
                            <Card
                                title={insight.title}
                                description={insight.excerpt}
                                href={`/insights/${insight.slug}`}
                                image={insight.image}
                                variant="insight"
                                className="h-full"
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
