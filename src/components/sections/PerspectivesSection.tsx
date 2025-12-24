'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/ScrollAnimations';

/**
 * Perspectives Section
 * 
 * - "Perspectives That Move Markets" title with italic styling
 * - Body text (centered)
 * - "Read Our Insights" CTA button - center aligned
 * - Black background
 */
export function PerspectivesSection() {
    return (
        <section className="bg-transparent py-16">
            <div className="content-wrapper">
                <FadeIn className="w-full flex flex-col items-center text-center gap-6">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white text-center font-medium">
                        Perspectives That Move Markets
                    </h2>

                    {/* Decorative Line */}
                    <div
                                className="w-[80%] h-[1px]"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 20%, #ffffff9c 50%, rgba(255, 255, 255, 0.6) 80%, transparent 100%)'
                                }}
                            />

                    {/* Body Text */}
                    <p className="p-white text-lg md:text-2xl leading-[29px] font-normal max-w-2xl text-center">
                        Our team shares actionable insights on market trends, investment
                        strategies, and growth playbooks so you stay ahead in an evolving world.
                    </p>

                    {/* CTA Button - Center Aligned */}
                    <Link href="/insights">
                        <Button variant="primary" size="lg">
                            Read Our Insights
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
