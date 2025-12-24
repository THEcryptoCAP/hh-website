import { section } from 'framer-motion/client';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Mountain Cohort | Hanshills & Co.',
    description:
        'An exclusive program for high-potential founders and business leaders ready to scale their ventures to new heights.',
};

// Step progress indicator component
function StepIndicator({ currentStep = 0 }: { currentStep?: number }) {
    return (
        <div className="flex items-center gap-0 justify-center mx-auto">
            {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs md:text-sm font-medium transition-all
                        ${step <= currentStep ? 'border-white bg-white/10 text-white' : 'border-white/30 text-white/30'}`}>
                        {step}
                    </div>
                    {index < 4 && (
                        <div className={`w-12 md:w-20 lg:w-24 h-[2px] transition-all ${step < currentStep ? 'bg-white/60' : 'bg-white/20'}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function CohortPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section - Welcome to Cohort */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background Image - Full screen, starts from top */}
                <div className="fixed inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-top bg-no-repeat"
                        style={{
                            backgroundImage: `url('/assets/images/cohort/cohort-main.png')`,
                        }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center pt-24 pb-32" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    {/* Logo - Mountain Icon */}
                    <div className="relative z-10 mb-12">
                        <img
                            src="/assets/images/logos/logo.svg"
                            alt="Hanshills Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-medium text-white tracking-[-0.01em] leading-[1.1] mb-4 md:mb-6 italic">
                        Welcome to Cohort.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mb-12 md:mb-16 font-light">
                        You&apos;ve stepped onto the mountain. Each question is a climb. Only the resilient rise.
                    </p>

                    {/* Progress Indicator */}
                    <div className="mb-12 md:mb-16" style={{marginTop:'172px'}}>
                        <StepIndicator currentStep={1} />
                    </div>

                    {/* CTA Button */}
                    <Link href="/cohort/apply">
                        <button className="px-10 md:px-14 py-4 md:py-5 bg-white text-black font-semibold text-lg md:text-xl rounded-[3px] hover:bg-white/90 transition-all tracking-[-0.03em] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]" style={{marginTop:'48px', marginBottom: '64px' }}>
                            Begin The Ascend
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
