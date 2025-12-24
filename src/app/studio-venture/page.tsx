import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Venture Studio | Hanshills & Co.',
    description:
        'Backing Tomorrow\'s Visionaries - We invest in bold ideas, ambitious teams, and disruptive business models.',
};

const whatWeLookFor = [
    {
        title: 'Meaningful Problems',
        description: 'Founders solving meaningful problems with big markets.',
    },
    {
        title: 'Innovative Models',
        description: 'Innovative, scalable, and technology-driven business models.',
    },
    {
        title: 'Ambitious Teams',
        description: 'Teams with the ambition to lead industries not just participate in them.',
    },
];

const howWeHelp = [
    {
        title: 'Strategic Insights',
        description: 'Access to strategic insights and market intelligence to inform your decisions.',
    },
    {
        title: 'Network Access',
        description: 'Support in fundraising, partnerships, and team building through our extensive network.',
    },
    {
        title: 'Expert Mentorship',
        description: 'Mentorship from industry experts and seasoned operators who\'ve been in your shoes.',
    },
    {
        title: 'Growth Guidance',
        description: 'Hands-on guidance through the critical early growth stages of your startup.',
    },
];

const howWeHelp2 = [
    {
        title: 'Founder-First',
        description: 'We see ourselves as partners, not just investors. Your vision is our mission.',
    },
    {
        title: 'Beyond Capital',
        description: 'From business model refinement to go-to-market strategy, we bring operating experience that accelerates growth.',
    },
    {
        title: 'Ecosystem Access',
        description: 'Tap into our network of industry leaders, advisors, and portfolio companies to open doors and scale faster.',
    },
    {
        title: 'Flexible Support',
        description: 'Whether seed, early-stage, or growth equity, we tailor our involvement to what founders truly need.',
    },
];

export default function StudioVenturePage() {
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
                        poster="/assets/images/hero/studio-hero.png"
                        className="w-full h-full object-cover"
                    >
                        <source src="https://bvhzecx8vysgg1hq.public.blob.vercel-storage.com/studio.mp4" type="video/mp4" />
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
                            Backing Tomorrow's Visionaries
                        </h1>

                        {/* Sub-headline */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white max-w-[900px] mt-8 text-center mb-16" style={{ marginBottom: '64px' }}>
                            We believe the future is built by founders. That's why we invest in bold ideas, ambitious teams, and disruptive business models — providing not just capital, but the strategic guidance, networks, and resources to help startups grow smarter and faster.
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

            {/* Graph Section */}
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
                                src="/assets/images/graphs/studio-approach.svg"
                                alt="Our Studio Approach"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Blocks Section */}
            <section className="bg-black pb-20 md:pb-28 w-full flex flex-col items-center">
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto">
                        {/* 2x2 Grid of Cards */}
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            {howWeHelp2.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-2">
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>
                                    <div className="rounded-[5px] bg-[#1a1a1a] p-6 lg:p-8 min-h-[235px] w-full flex flex-col">
                                        <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                            {item.title}
                                        </h3>
                                        <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
                                            src={`/assets/images/icons/studio${index + 1}.svg`}
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

            {/* How We Help Founders Section */}
            <section className="bg-black pt-12 md:pt-16 pb-8 md:pb-12 w-full flex flex-col items-center">
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Section Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white font-medium text-center mb-6">
                            How We Help Founders
                        </h2>

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] text-center max-w-[800px]">
                            We provide strategic guidance, operational support, and network access to help you scale smarter and faster.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 Blocks Section */}
            <section className="bg-black pb-12 md:pb-16 w-full flex flex-col items-center">
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto">
                        {/* 2x2 Grid of Cards */}
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            {howWeHelp.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-2">
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>
                                    <div className="rounded-[5px] bg-[#1a1a1a] p-6 lg:p-8 min-h-[235px] w-full flex flex-col">
                                        <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                            {item.title}
                                        </h3>
                                        <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Partner Section - Matching PE/VC Design */}
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
                                    If you're a founder with a <span className="text-[#C4A574] italic">bold vision and relentless drive</span>, we'd love to hear your story.
                                </h3>

                                {/* Closing Quote Mark */}
                                <span className="absolute -right-2 md:-right-6 -bottom-8 md:-bottom-10 font-serif text-5xl md:text-6xl lg:text-7xl text-[#8b7355] leading-none select-none">
                                    "
                                </span>
                            </div>
                        </div>

                        {/* CTA Button - Below the box */}
                        <div className="mt-10 md:mt-12" style={{ marginTop: '32px' }}>
                            <Link href="/get-in-touch">
                                <button className="group relative rounded-[3px] overflow-hidden bg-[#8b7355] transition-all duration-300 hover:bg-[#7a6548] flex items-center justify-center" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}>
                                    <span className="relative z-10 leading-none tracking-wide text-white font-medium" style={{ fontSize: '1rem' }}>
                                        Pitch Us Your Startup
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
