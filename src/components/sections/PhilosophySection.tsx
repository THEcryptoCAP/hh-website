'use client';

import { FadeIn } from '@/components/animations/ScrollAnimations';

/**
 * Philosophy Section 
 * 
 * - "Our Philosophy" title (40px, medium weight, white, italic for "Philosophy")
 * - Horizontal divider line below title
 * - Body text (24px, normal weight, white, centered)
 * - Black background
 * 
 * Note: Images are NOT shown here - they only appear in the Services Section
 */
export function PhilosophySection() {
    return (
        <section className="bg-black py-8 sm:py-12 md:py-16">
            <div className="content-wrapper">
                <FadeIn className="w-full flex flex-col items-center text-center px-4">
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[48px] tracking-[-0.01em] text-white mb-4 sm:mb-6 text-center font-medium">
                        Our Philosophy
                    </h2>

                    {/* Horizontal Divider */}
                    <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-px bg-white/20 mb-6 sm:mb-8" />

                    {/* Philosophy Statement */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-white max-w-3xl text-center">
                        We believe value creation isn&apos;t one-dimensional. That&apos;s why we bring
                        together capital, advisory, and operational expertise under one roof — to
                        help companies scale, transform, and lead markets with intention.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
