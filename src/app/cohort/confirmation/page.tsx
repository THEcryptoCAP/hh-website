import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Welcome to the Summit | Hanshills & Co.',
    description: 'Confirmation of your enrollment in the Mountain Cohort.',
};

export default function ConfirmationPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Image - Mountain Summit, starts from top */}
            <div className="fixed inset-0 z-0">
                <div 
                    className="w-full h-full bg-cover bg-top bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/images/cohort/cohort-confirmation.png')`,
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 px-4">
                {/* Success Message */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-medium text-white tracking-[-0.01em] leading-tight mb-6 italic">
                        Submitted Successfully.
                    </h1>
                    
                    <div className="space-y-2">
                        <p className="text-lg md:text-xl text-white/90">
                            You Are Now a Summit Holder.
                        </p>
                        <p className="text-lg md:text-xl text-white/90">
                            Welcome to The Hanshills & Co. Mountain Cohort.
                        </p>
                    </div>
                </div>

                {/* Info Text */}
                <p className="text-center text-white/70 text-base md:text-lg max-w-2xl mb-8 px-4">
                    A welcome email has been sent with your onboarding details, schedule, and preparation checklist.
                </p>

                {/* Back to Homepage Button */}
                <Link href="/">
                    <button className="px-10 md:px-14 py-4 bg-white text-black font-semibold text-lg rounded-[3px] hover:bg-white/90 transition-all tracking-[-0.03em]">
                        ← Back to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}
