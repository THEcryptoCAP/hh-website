import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Advisory Services | Hanshills & Co.',
    description:
        'Architects of Transformation - Operating at the intersection of capital, technology, and design.',
};

const techPartnerCards = [
    {
        title: 'Core Competence',
        description: 'Systems & process architecture, AI frameworks, Web 3.0 ecosystems.',
    },
    {
        title: 'Delivery Model',
        description: 'Decentralized, yet structured and outcome-driven.',
    },
    {
        title: 'Expert Ecosystem',
        description: 'The network includes industry practitioners, domain and technology experts, PAN-IIT innovators, and globally distinguished academicians.',
    },
    {
        title: 'Scope of Engagement',
        description: 'Portfolio companies, in-house initiatives, strategic alliances, and client mandates.',
    },
];

export default function AdvisoryPage() {
    return (
        <div className="bg-black min-h-screen w-full flex flex-col items-center">
            {/* Hero Section */}

            <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        poster="/assets/images/hero/advisory-hero.png"
                        className="w-full h-full object-cover"
                    >
                        <source src="https://bvhzecx8vysgg1hq.public.blob.vercel-storage.com/advisory.mp4" type="video/mp4" />
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
                            Architects of Transformation
                        </h1>

                        {/* Sub-headline */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white max-w-[900px] mt-8 text-center mb-16" style={{ marginBottom: '64px' }}>
                            We operate at the intersection of capital, technology, and design, shaping ventures, partnerships, and ecosystems that are resilient, innovation-led, and impact-driven.
                        </p>

                        {/* Vertical Line and "What we provide"*/}
                        <div className="flex flex-col items-center">
                            <div className="w-px h-12 md:h-16 bg-white/60" />
                            <h5 className="font-body text-lg md:text-xl leading-6 text-white font-medium text-center mt-4">
                                What we provide
                            </h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venture Studio & Strategic Advisory Section */}
            <section className="bg-black py-12 md:py-20 w-full flex flex-col items-center">
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Section Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] text-white font-medium text-center mb-6">
                            Venture Studio & Strategic Advisory
                        </h2>

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-white text-center max-w-[900px] mb-16">
                            We do not simply fund ventures; we institutionalize them. We align capital with governance and strategy, creating enterprises built to endure volatility and compound value across cycles.
                        </p>

                        {/* Services Image */}
                        <div className="w-full flex justify-center">
                            <img
                                src="/assets/images/advisory/5-things.svg"
                                alt="Venture Studio Services"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Development Partner Section */}
            <section className="bg-black py-12 md:py-20 w-full flex flex-col items-center" style={{ marginTop: '84px' }}>
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Section Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white font-medium text-center mb-6">
                            Technology & Development Partner
                        </h2>

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-white text-center max-w-[900px] mb-16">
                            Technology, for us, is not a service but an architecture of scale. We embed intelligence, efficiency, and resilience into every system we design, ensuring outcomes that meet institutional-grade rigor.
                        </p>

                        {/* 2x2 Grid of Cards */}
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            {techPartnerCards.map((card, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-2">
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>
                                    <div className="rounded-[5px] bg-[#1a1a1a] p-6 lg:p-8 min-h-[235px] w-full flex flex-col">
                                        <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                            {card.title}
                                        </h3>
                                        <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Studio & Innovation Partner Section */}
            <section className="bg-black py-12 md:py-20 w-full flex flex-col items-center" style={{ marginTop: '84px' }}>
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                        {/* Section Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] text-white font-medium text-center mb-6">
                            Design Studio & Innovation Partner
                        </h2>

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-white text-center max-w-[900px] mb-16">
                            Design is our instrument of transformation—functional, human-centered, and impact-oriented. We move beyond aesthetics to architect strategies and innovations that align purpose with performance.
                        </p>

                        {/* Services Image */}
                        <div className="w-full flex justify-center">
                            <img
                                src="/assets/images/advisory/4-things.svg"
                                alt="Design Studio Services"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Schedule a Consultation Section */}
            <section className="bg-[#1a1a1a] w-full flex flex-col items-center py-20 md:py-24" style={{ marginTop: '84px', marginBottom: '84px' }}>
                <div className="w-full" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] mx-auto" style={{ marginTop: '48px', marginBottom: '32px' }}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 lg:gap-32">
                            {/* Left Side - Title and Pricing */}
                            <div className="flex flex-col items-start w-full md:w-auto" style={{ marginLeft: '160px' }}>
                                <h2
                                    className="font-display text-white font-medium mb-4 md:mb-6"
                                    style={{
                                        marginBottom: '72px',
                                        fontSize: 'clamp(2rem, 5vw, 6rem)',
                                        lineHeight: '1.1'
                                    }}
                                >
                                    Schedule a
                                    <br />
                                    Consultation
                                </h2>
                                <p className="font-body text-sm md:text-base text-[#a7a7a7]" style={{ marginBottom: '72px' }}>
                                    Book a strategic consultation with our team for only{' '}
                                    <span className="text-white font-medium">₹3,999</span> per hour
                                </p>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full md:w-auto md:min-w-[400px] lg:min-w-[450px]" style={{ marginRight: '240px' }}>
                                <form className="flex flex-col gap-5">
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full h-12 rounded-[5px] bg-[#252525] border border-white/5 px-5 py-3.5 text-white font-body text-sm md:text-base placeholder:text-[#666] placeholder:indent-[12px] focus:outline-none focus:border-[#8b7355]"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            className="w-full h-12 rounded-[5px] bg-[#252525] border border-white/5 px-5 py-3.5 text-white font-body text-sm md:text-base placeholder:text-[#666] placeholder:indent-[12px] focus:outline-none focus:border-[#8b7355]"
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            className="w-full h-12 rounded-[5px] bg-[#252525] border border-white/5 px-5 py-3.5 text-white font-body text-sm md:text-base placeholder:text-[#666] placeholder:indent-[12px] focus:outline-none focus:border-[#8b7355]"
                                            placeholder="dd-mm-yyyy"
                                        />
                                    </div>

                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="submit"
                                            className="w-40 h-12 rounded-[3px] bg-[#8b7355] px-8 py-3.5 hover:bg-[#9D8463] transition-colors"
                                        >
                                            <span className="font-body text-sm md:text-base tracking-[-0.03em] text-white font-semibold">
                                                BOOK NOW
                                            </span>
                                        </button>
                                    </div>

                                    <p className="font-body text-xs md:text-sm text-[#a7a7a7] text-center mt-2">
                                        Note: This is a placeholder form. Please contact us to confirm your booking.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black py-20 md:py-28 w-full flex flex-col items-center" style={{ marginBottom: '84px' }}>
                <div className="w-full flex justify-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="w-full max-w-[900px] flex flex-col items-center">

                        {/* Gradient Border Wrapper */}
                        <div className="w-full rounded-[4px] p-[1px] bg-gradient-to-b from-white/60 via-white/10 to-transparent">

                            {/* Inner Content Container - Black background matches section to mask the center */}
                            <div className="bg-black rounded-[3px] p-8 md:px-16 py-12 w-full flex flex-col items-center text-center h-full">

                                {/* Section Title */}
                                <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white/90 font-medium mb-0">
                                    Our Institutional Ethos
                                </h2>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent my-10 max-w-2xl" style={{ marginBottom: '2rem', marginTop: '2rem' }}></div>

                                {/* Ethos Points */}
                                <ul className="space-y-3 text-center list-disc list-inside" style={{ listStyleType: 'disc' }}>
                                    <li className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 marker:text-gray-500/80">
                                        We do not advise, we architect.
                                    </li>
                                    <li className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 marker:text-gray-500/80">
                                        We do not transact, we transform.
                                    </li>
                                    <li className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 marker:text-gray-500/80">
                                        We do not operate in silos, we orchestrate ecosystems.
                                    </li>
                                    <li className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 marker:text-gray-500/80">
                                        We do not network, we cultivate enduring partnerships.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
