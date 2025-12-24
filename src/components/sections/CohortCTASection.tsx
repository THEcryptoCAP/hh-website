'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { NeuralNetworkBackground } from '../animations/NeuralNetworkBackground';

/**
 * Cohort CTA Section
 * 
 * Design specs:
 * - Full-width banner with web.png background image
 * - Ghost outline border
 * - "Register For Our Upcoming Cohort Now!" title (40px, medium weight, white)
 * - "REGISTER NOW" CTA button (brown #8B7355) - center aligned
 * - Rounded corners (5px)
 */
export function CohortCTASection() {
    return (
        <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="content-wrapper">
                <FadeIn>
                    {/* Banner Container with ghost outline */}
                    <div
                        className="relative rounded-[5px] overflow-hidden border border-white/20"
                        style={{ minHeight: '200px' }}
                    >
                        {/* Vertical Gradient Background - light at top, black at bottom */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 40%, #000000 100%)'
                            }}
                        />

                        {/* Neural Network Animation */}
                        <NeuralNetworkBackground opacity={0.7} />

                        {/* Web.png Overlay - more visible */}
                        <div className="absolute inset-0 z-[1] pointer-events-none">
                            <img
                                src="/assets/resources/cohort-register-web.png"
                                alt=""
                                className="w-full h-full object-cover opacity-40"
                            />
                        </div>

                        {/* Content - Center Aligned */}
                        <div className="relative z-20 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 p-6 sm:p-8 md:p-12 lg:p-16 h-full min-h-[200px] sm:min-h-[240px] md:min-h-[283px]">
                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight sm:leading-snug md:leading-[48px] font-medium text-white text-center italic px-4">
                                Register For Our Upcoming Cohort Now!
                            </h2>

                            {/* Aesthetic Decorative Line */}
                            <div
                                className="w-[80px] sm:w-[100px] md:w-[120px] h-[1px]"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 115, 85, 0.8) 20%, #8B7355 50%, rgba(139, 115, 85, 0.8) 80%, transparent 100%)'
                                }}
                            />

                            {/* CTA Button - Center Aligned */}
                            <Link href="/cohort" className="w-full sm:w-auto">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                    REGISTER NOW
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
