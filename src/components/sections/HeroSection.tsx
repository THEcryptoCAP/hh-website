'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/ScrollAnimations';

/**
 * Hero Section
 * 
 * Design specs:
 * - Full-screen mountain image background
 * - Mountain peak icon above the headline
 * - "Where Capital Meets Strategy." headline (script/italic font, 30% opacity)
 * - "Building enduring value across every stage." tagline (40px, mixed weights)
 * - Body text (24px, normal weight, white, centered)
 * - Three CTA buttons: "Pitch us", "Partner with us", "Work with us"
 */
export function HeroSection() {
    const [showAlternate, setShowAlternate] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Trigger transition on initial load
        const timer = setTimeout(() => {
            setShowAlternate(true);
        }, 500);

        // Setup intersection observer for scroll detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowAlternate(true);
                    } else {
                        setShowAlternate(false);
                    }
                });
            },
            { threshold: 0.7 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            clearTimeout(timer);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
            {/* Starfield Background - positioned at top */}
            <div
                className="absolute inset-0 z-0 bg-black"
            >
                <img
                    src="/assets/images/extras/stars.png"
                    alt="Stars"
                    className="w-full h-full object-contain opacity-80"
                />
            </div>

            {/* Background Mountain Image - positioned lower with transition */}
            <div className="absolute inset-0 z-[1]" style={{ top: '280px' }}>
                {/* Default image - Desktop */}
                <img
                    src="/assets/resources/hero-hills.png"
                    alt="Mountain landscape"
                    className="hidden md:block absolute w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    style={{ 
                        objectPosition: 'center 0%',
                        opacity: showAlternate ? 0 : 1
                    }}
                />
                {/* Default image - Mobile */}
                <img
                    src="/assets/resources/hero-hills-m.png"
                    alt="Mountain landscape"
                    className="md:hidden absolute w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    style={{ 
                        objectPosition: 'center 0%',
                        opacity: showAlternate ? 0 : 1
                    }}
                />
                {/* Alternate image - Desktop */}
                <img
                    src="/assets/resources/hero-hills-glow.png"
                    alt="Mountain landscape"
                    className="hidden md:block absolute w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    style={{ 
                        objectPosition: 'center 0%',
                        opacity: showAlternate ? 1 : 0
                    }}
                />
                {/* Alternate image - Mobile */}
                <img
                    src="/assets/resources/hero-hills-glow-m.png"
                    alt="Mountain landscape"
                    className="md:hidden absolute w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                    style={{ 
                        objectPosition: 'center 0%',
                        opacity: showAlternate ? 1 : 0
                    }}
                />
                {/* Gradient Overlay - Fade to black at bottom */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 75%, #000 100%)'
                    }}
                />
            </div>

            {/* Grey Logo Icon - positioned high, clearly above the mountain background */}
            <div className="absolute z-30 left-1/2 transform -translate-x-1/2" style={{ top: '80px' }}>
                
                    <img
                        src="/assets/resources/logo.svg"
                        alt="Hanshills Logo"
                        className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] w-auto"
                        style={{ filter: 'brightness(0.7)' }}
                    />
                
            </div>

            {/* Content - positioned lower, below the hills */}
            <div className="w-full relative z-40 pb-10 sm:pb-16 md:pb-20 flex flex-col items-center content-wrapper" style={{ marginTop: '400px' }}>
                <div className="md:hidden" style={{ marginTop: '150px' }} />
                <div className="hidden md:block" style={{ marginTop: '150px' }} />
                <FadeIn direction="up" className="w-full max-w-4xl flex flex-col items-center text-center space-y-4 sm:space-y-6 mx-auto px-4">

                    {/* Main Tagline with mixed weights */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight sm:leading-snug md:leading-[48px] text-white text-center drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                        <span className="font-medium">Building </span>
                        <span className="font-light italic text-[#C4A77D]">enduring value </span>
                        <span className="font-medium">across every stage.</span>
                    </h2>

                    {/* Body Text */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-white text-center max-w-4xl px-2 drop-shadow-md" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
                        From visionary founders to established enterprises, we invest, advise,
                        and accelerate growth through our three integrated verticals: Private
                        Equity, Venture Capital, and Advisory.
                    </p>

                    {/* CTA Buttons - Responsive layout */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center items-center w-full pt-2 sm:pt-4">
                        <Link href="/cohort" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                Pitch us
                            </Button>
                        </Link>
                        <Link href="/get-in-touch" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Partner with us
                            </Button>
                        </Link>
                        <Link href="/get-in-touch" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                Work with us
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
