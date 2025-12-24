import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Private Equity | Hanshills & Co.',
    description:
        'Private Equity with Purpose - We are builders, advisors, and long-term partners enabling businesses to unlock their full potential.',
};

const whatWeLookFor = [
    {
        title: 'Established Businesses',
        description: 'Companies with strong fundamentals and proven track records.',
    },
    {
        title: 'Growth Potential',
        description: 'Companies with strong fundamentals and proven track records.',
    },
    {
        title: 'Strategic Value',
        description: 'Companies with strong fundamentals and proven track records.',
    },
];

export default function PEVCPage() {
    return (
        <div className="bg-black min-h-screen w-full flex flex-col items-center">
            {/* Hero Section with "Why trust us?" integrated */}
            <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        poster="/assets/images/hero/pe-hero.png"
                        className="w-full h-full object-cover"
                    >
                        <source src="https://bvhzecx8vysgg1hq.public.blob.vercel-storage.com/pe-vc.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 70%, #000 100%)'
                        }}
                    />
                </div>

                {/* Logo - Mountain Icon - Fixed at top like homepage */}
                <div className="absolute z-30 left-1/2 transform -translate-x-1/2" style={{ top: '120px' }}>
                    <img
                        src="/assets/images/logos/logo.svg"
                        alt="Hanshills Logo"
                        className="h-[80px] w-auto"
                    />
                </div>

                {/* Content - Positioned at bottom */}
                <div className="relative z-10 w-full pb-20" style={{ paddingLeft: '72px', paddingRight: '72px', marginTop: 'auto' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
                        {/* Headline */}
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight xl:leading-[115px] tracking-[0.02em] text-white font-medium text-center">
                            Private Equity with Purpose
                        </h1>

                        {/* Sub-headline */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white max-w-[900px] mt-8 text-center mb-16" style={{ marginBottom: '64px' }}>
                            We are not just investors. We are builders, advisors, and long-term partners. Our firm was created with a simple mission: to bring together the disciplines of Private Equity, Venture Capital, and Advisory under one roof enabling businesses at every stage to unlock their full potential.
                        </p>

                        {/* Vertical Line and "Why trust us?"*/}
                        <div className="flex flex-col items-center">
                            <div className="w-px h-12 md:h-16 bg-white/60" />
                            <h5 className="font-body text-lg md:text-xl leading-6 text-white font-medium text-center mt-4">
                                Why trust us?
                            </h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* Graph Section - with increased top spacing from "Why trust us?" */}
            <section className="relative pt-12 md:pt-16 pb-12 md:pb-16 w-full flex flex-col items-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 h-3/5">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://bvhzecx8vysgg1hq.public.blob.vercel-storage.com/stars.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 70%, #000 100%)'
                        }}
                    />
                </div>

                <div className="relative z-10 w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Graph Image */}
                        <div className="w-full max-w-[900px]">
                            <img
                                src="/assets/images/graphs/pe-approach.svg"
                                alt="Our Approach to VC - Strategic Capital, Operational Expertise, Partnership Driven, Global Perspective"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Look For Section - Full Width Background */}
            <section className="w-full" style={{ marginTop: '64px' }}>
                {/* Title section on black background */}
                <div className="bg-black pt-16 md:pt-24 pb-8 md:pb-12 w-full flex flex-col items-center">
                    <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                            {/* Section Title */}
                            <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] text-white font-medium text-center mb-4">
                                What We Look For
                            </h2>

                            {/* Horizontal Divider */}
                            <div className="w-full max-w-[500px] h-px bg-white/20 mb-6" />

                            {/* Subtitle */}
                            <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white text-center max-w-[700px]">
                                We seek established businesses with strong fundamentals and growth potential across various sectors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three columns section with full-width dark background */}
                <div className="bg-[#1a1a1a] w-full flex items-center justify-center" style={{ paddingTop: '3rem', paddingBottom: '3rem', paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="w-full max-w-[1400px] mx-auto">
                        <div className="grid md:grid-cols-3 gap-12 w-full justify-center items-center">
                            {whatWeLookFor.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center justify-center mx-auto h-full">
                                    {/* SVG Icons */}
                                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                                        <img
                                            src={`/assets/images/icons/pe${index + 1}.svg`}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="font-body text-xl md:text-2xl lg:text-[28px] leading-tight font-medium text-[#C4A574] mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed font-normal text-[#a7a7a7]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Creation Philosophy Section */}
            <section className="bg-black pt-12 md:pt-16 pb-12 md:pb-16 w-full flex flex-col items-center">
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Section Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white font-medium text-center mb-6">
                            Value Creation Philosophy
                        </h2>

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] text-center max-w-[800px]">
                            We believe private equity is about more than capital. It is about identifying opportunities, nurturing strengths, and creating pathways to sustainable growth. Every investment is guided by discipline, precision, and a relentless pursuit of long-term impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote / Partner Section - Matching Reference Design */}
            <section className="bg-black pt-12 md:pt-16 pb-20 md:pb-24 w-full flex flex-col items-center">
                <div className="w-full flex justify-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="w-full max-w-[1000px] flex flex-col items-center">

                        {/* Quote Box with Border */}
                        <div className="w-full border border-white/20 rounded-sm p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
                            {/* Quote with decorative quotation marks */}
                            <div className="relative w-full max-w-[850px]">
                                {/* Opening Quote Mark */}
                                <span className="absolute -left-2 md:-left-6 -top-4 md:-top-6 font-serif text-5xl md:text-6xl lg:text-7xl text-[#8b7355] leading-none select-none">
                                    "
                                </span>

                                <h3 className="font-display text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-[-0.01em] text-white italic px-4 md:px-8">
                                    If you are a business leader seeking a partner who brings both <span className="text-[#C4A574] italic">capital and strategy</span> to the table, we're here to help create enduring value.
                                </h3>

                                {/* Closing Quote Mark */}
                                <span className="absolute -right-2 md:-right-6 -bottom-8 md:-bottom-10 font-serif text-5xl md:text-6xl lg:text-7xl text-[#8b7355] leading-none select-none">
                                    "
                                </span>
                            </div>
                        </div>

                        {/* CTA Button - Below the box */}
                        <div className="mt-10 md:mt-12" style={{ marginTop: '2rem' }}>
                            <Link href="/get-in-touch">
                                <button className="group relative rounded-[3px] overflow-hidden bg-[#8b7355] transition-all duration-300 hover:bg-[#7a6548] flex items-center justify-center" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}>
                                    <span className="relative z-10 leading-none tracking-wide text-white font-medium" style={{ fontSize: '1rem' }}>
                                        Partner with us
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
