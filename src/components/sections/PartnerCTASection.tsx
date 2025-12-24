'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/ScrollAnimations';

/**
 * Partner CTA Section
 * - Decorative border/frame around the section
 * - "Ready to Create Value Together?" title with mixed font weights and italic
 * - Body text (centered)
 * - "Partner with us" CTA button - center aligned
 * - Transparent background to show hill behind
 */
export function PartnerCTASection() {
    return (
        <section className="bg-transparent py-16">
            <div className="content-wrapper flex justify-center">
                <FadeIn className="w-full max-w-6xl">
                    {/* Decorative Border Frame with fading border like footer */}
                    <div className="relative rounded-[10px] py-16">
                        {/* Fading border overlay - similar to footer */}
                        <div
                            className="absolute inset-0 rounded-[10px] pointer-events-none"
                            style={{
                                boxShadow: `
                                    inset 0 2px 0 0 rgba(255, 255, 255, 0.8),
                                    inset 2px 2px 0 0 rgba(255, 255, 255, 0.7),
                                    inset -2px 2px 0 0 rgba(255, 255, 255, 0.7),
                                    inset 2px 0 0 0 rgba(255, 255, 255, 0.4),
                                    inset -2px 0 0 0 rgba(255, 255, 255, 0.4),
                                    inset 0 -2px 0 0 rgba(255, 255, 255, 0.2)
                                `,
                                maskImage: 'linear-gradient(180deg, white 0%, white 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(180deg, white 0%, white 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                            }}
                        />
                        <div className="flex flex-col items-center justify-center text-center w-full gap-6">
                            {/* Section Title with mixed weights */}
                            <h2 className="text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white">
                                <span className="font-medium">Ready to </span>
                                <span className="font-light italic">Create Value </span>
                                <span className="font-medium">Together?</span>
                            </h2>

                            {/* Decorative Line */}
                            <div
                                className="w-[80%] h-[1px]"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 20%, #ffffff9c 50%, rgba(255, 255, 255, 0.6) 80%, transparent 100%)'
                                }}
                            />

                            {/* Body Text */}
                            <p className="p-white text-lg md:text-2xl leading-[29px] font-normal max-w-2xl">
                                Whether you&apos;re a founder, investor, or business leader — we&apos;re here to
                                help you achieve what&apos;s next.
                            </p>

                            {/* CTA Button - Center Aligned */}
                            <Link href="/get-in-touch">
                                <Button variant="primary" size="lg">
                                    Partner with us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
