import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Learn about Hanshills & Co., our mission, values, and the team driving strategic excellence in venture capital and advisory.',
};

export default function AboutPage() {
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
                        poster="/assets/images/hero/about-hero.png"
                        className="w-full h-full object-cover"
                    >
                        <source src="https://bvhzecx8vysgg1hq.public.blob.vercel-storage.com/about.mp4" type="video/mp4" />
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
                    {/* Headline */}
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight xl:leading-[115px] tracking-[0.02em] text-white font-medium text-center">
                            An Integrated Ecosystem for Capital, Strategy, and Growth
                        </h1>

                        <br />

                        {/* Sub-headline */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white max-w-[900px] mt-10 text-center">
                            We are not just investors. We are builders, advisors, and long-term partners. Our firm was created with a simple mission: to bring together the disciplines of Private Equity, Venture Capital, and Advisory under one roof enabling businesses at every stage to unlock their full potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="bg-black pt-16 md:pt-20 pb-12 md:pb-16 w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1000px] w-full flex flex-col items-center">
                        {/* Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white font-medium text-center">
                            Our Vision
                        </h2>

                        {/* Horizontal Divider - Below title */}
                        <div className="w-full max-w-[500px] h-px bg-white/20 mt-8 mb-8" />

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-white text-center max-w-[800px]">
                            To create a seamless bridge between capital and strategy, empowering founders, businesses, and investors to build enduring enterprises that shape the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Ethos Section */}
            <section className="bg-black pt-16 md:pt-24 pb-16 md:pb-24 w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] w-full flex flex-col items-center">
                        {/* Section Title - Centered */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] tracking-[-0.01em] text-white font-medium text-center mb-20">
                            Our Ethos
                        </h2>

                        {/* 2x2 Grid of Cards - Centered */}
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-[1360px]">
                            {/* Ethos Card 1 */}
                            <div className="flex flex-col">
                                <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-4">
                                    01.
                                </span>
                                <div className="rounded-[5px] bg-[#1a1a1a] p-8 lg:p-10 min-h-[260px] w-full flex flex-col justify-start">
                                    <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                        Value Creation First
                                    </h3>
                                    <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                        Every engagement whether investment or advisory is guided by our commitment to generate sustainable long-term value.
                                    </p>
                                </div>
                            </div>

                            {/* Ethos Card 2 */}
                            <div className="flex flex-col">
                                <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-4">
                                    02.
                                </span>
                                <div className="rounded-[5px] bg-[#1a1a1a] p-8 lg:p-10 min-h-[260px] w-full flex flex-col justify-start">
                                    <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                        Partnership Over Transactions
                                    </h3>
                                    <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                        We see relationships as collaborations, not one-off deals.
                                    </p>
                                </div>
                            </div>

                            {/* Ethos Card 3 */}
                            <div className="flex flex-col">
                                <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-4">
                                    03.
                                </span>
                                <div className="rounded-[5px] bg-[#1a1a1a] p-8 lg:p-10 min-h-[260px] w-full flex flex-col justify-start">
                                    <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                        Integrated Expertise
                                    </h3>
                                    <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                        With the combined power of PE, VC, and Advisory, we bring clarity and capability across the entire business lifecycle.
                                    </p>
                                </div>
                            </div>

                            {/* Ethos Card 4 */}
                            <div className="flex flex-col">
                                <span className="font-body text-[32px] leading-[38px] tracking-[-0.01em] font-medium text-white mb-4">
                                    04.
                                </span>
                                <div className="rounded-[5px] bg-[#1a1a1a] p-8 lg:p-10 min-h-[260px] w-full flex flex-col justify-start">
                                    <h3 className="font-display text-2xl md:text-[32px] lg:text-[40px] leading-tight lg:leading-[48px] tracking-[-0.01em] font-medium text-white">
                                        Intentional Growth
                                    </h3>
                                    <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-[#a7a7a7] mt-4">
                                        Every decision is made with precision, discipline, and purpose.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What Makes Us Different Section */}
            <section className="bg-black pt-12 md:pt-16 pb-12 md:pb-16 w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1400px] w-full flex flex-col items-center">
                        {/* Title */}
                        <h2 className="font-display text-3xl md:text-[40px] leading-snug md:leading-[48px] text-white font-medium text-center">
                            What Makes Us Different
                        </h2>

                        {/* Horizontal Divider */}
                        <div className="w-full max-w-[500px] h-px bg-white/20 mt-8 mb-8" />

                        {/* Description */}
                        <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-normal text-white text-center max-w-[800px] mb-20">
                            While most firms focus on just one piece of the puzzle investing, advising, or consulting we unite them all. This integrated model allows us to:
                        </p>

                        {/* Three Rows - Image Left, Number+Text Right - Centered */}
                        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1000px]">
                            {/* Row 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-[450px] h-[250px] rounded-[5px] overflow-hidden shrink-0 bg-[#2a2a2a]">
                                    <img
                                        src="/assets/images/services/service-1.svg"
                                        alt="Helping startups"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-[-0.01em] font-medium text-white">
                                        01.
                                    </span>
                                    <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-[#a7a7a7] mt-4">
                                        Help startups secure the capital and strategic guidance they need to scale.
                                    </p>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-[450px] h-[250px] rounded-[5px] overflow-hidden shrink-0 bg-[#2a2a2a]">
                                    <img
                                        src="/assets/images/services/service-2.svg"
                                        alt="Partnership"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-[-0.01em] font-medium text-white">
                                        02.
                                    </span>
                                    <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-[#a7a7a7] mt-4">
                                        Partner with established enterprises through private equity to drive transformation and create enduring stakeholder value.
                                    </p>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-[450px] h-[250px] rounded-[5px] overflow-hidden shrink-0 bg-[#2a2a2a]">
                                    <img
                                        src="/assets/images/services/service-3.svg"
                                        alt="Advisory services"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-[-0.01em] font-medium text-white">
                                        03.
                                    </span>
                                    <p className="font-body text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] font-medium text-[#a7a7a7] mt-4">
                                        Support business leaders with advisory services that blend deal-making precision with strategic clarity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Partner Section - Redesigned (Minimalist) */}
            <section className="bg-black pt-16 md:pt-20 pb-20 md:pb-24 w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center text-center" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                    <div className="max-w-[1200px] w-full flex flex-col items-center">

                        {/* Minimalist Divider/Accent */}
                        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-[#8b7355] to-transparent mb-8 opacity-60"></div>

                        {/* Clean Typography Quote with Large Quotation Marks */}
                        <h3 className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight tracking-[-0.01em] text-white max-w-[1000px] mb-12">
                            <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#a7a7a7] inline-block align-top leading-[0.6] mr-1">"</span>
                            <span className="text-[#a7a7a7]">We are more than financiers.</span> We are strategic partners committed to building the next generation of market leaders.<span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white inline-block align-top leading-[0.6] ml-1">"</span>
                        </h3>

                        {/* CTA Button */}
                        <Link href="/get-in-touch">
                            <button className="group relative rounded-[3px] w-[220px] h-[64px] overflow-hidden bg-[#8b7355] transition-all duration-300 hover:bg-[#7a6548] flex items-center justify-center">
                                <span className="relative z-10 text-base leading-none tracking-wide text-white font-semibold">
                                    Partner with us
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}