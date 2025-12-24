import Link from 'next/link';
import { NeuralNetworkBackground } from '../animations/NeuralNetworkBackground';

/**
 * Footer Links
 */
const footerLinks = {
    services: [
        { label: 'Private Equity', href: '/pe-vc' },
        { label: 'Venture Capital', href: '/pe-vc' },
        { label: 'Advisory', href: '/advisory' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Insights', href: '/insights' },
        { label: 'Contact', href: '/get-in-touch' },
    ],
    legal: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
    ],
};

/**
 * Footer Component
 * * - Rounded corners at top (10px)
 * - Mountain background image with low opacity
 * - Gradient from black to dark gray
 * - Typography: Manrope
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative content-wrapper" style={{ marginTop: '-180px', marginBottom: '20px', position: 'relative', zIndex: 30 }}>
            {/* Main footer container */}
            <div className="relative rounded-[10px] overflow-hidden">
                {/* Fading border overlay - positioned absolutely to create the outline effect */}
                <div
                    className="absolute inset-0 rounded-[10px] pointer-events-none z-20"
                    style={{
                        background: 'transparent',
                        border: '2px solid transparent',
                        borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 15%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0) 100%) 1',
                    }}
                />
                {/* Secondary border for rounded corners (border-image doesn't support border-radius) */}
                <div
                    className="absolute inset-0 rounded-[10px] pointer-events-none z-20"
                    style={{
                        boxShadow: `
                            inset 0 2px 0 0 rgba(255, 255, 255, 0.8),
                            inset 2px 2px 0 0 rgba(255, 255, 255, 0.7),
                            inset -2px 2px 0 0 rgba(255, 255, 255, 0.7),
                            inset 2px 0 0 0 rgba(255, 255, 255, 0.4),
                            inset -2px 0 0 0 rgba(255, 255, 255, 0.4)
                        `,
                        maskImage: 'linear-gradient(180deg, white 0%, white 20%, rgba(255,255,255,0.5) 50%, transparent 80%)',
                        WebkitMaskImage: 'linear-gradient(180deg, white 0%, white 20%, rgba(255,255,255,0.5) 50%, transparent 80%)',
                    }}
                />
                {/* Inner content wrapper */}
                <div
                    className="relative rounded-[10px] overflow-hidden h-full w-full"
                    style={{
                        background: 'linear-gradient(180deg, #000000 0%, #000000 60%, #0a0a0a 80%, #141414 100%)',
                        minHeight: '400px',
                    }}
                >
                    
                    {/* Neural Network Animation */}
                    <NeuralNetworkBackground opacity={0.7} />

                    <div className="container mx-auto relative z-10 py-8 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-12" style={{ marginTop: '32px' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">

                            {/* Brand & Tagline Section */}
                            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
                                {/* Logo */}
                                <Link href="/" className="inline-block">
                                    <img
                                        src="/assets/resources/logo-navbar.svg"
                                        alt="Hanshills & Co."
                                        className="h-6 sm:h-7 md:h-8 w-auto"
                                    />
                                </Link>

                                {/* Tagline */}
                                <p className="text-sm sm:text-base leading-relaxed font-normal text-[#a7a7a7] max-w-[280px]">
                                    Where Capital Meets Strategy — Building Enduring Value Across Every Stage.
                                </p>

                                {/* Connect Section */}
                                <div className="pt-2 sm:pt-4">
                                    <h4 className="text-sm sm:text-base leading-relaxed font-bold text-white mb-2 sm:mb-3">
                                        Connect
                                    </h4>
                                    <p className="text-sm sm:text-base leading-relaxed font-normal text-[#a7a7a7] max-w-[320px] mb-2">
                                        Ready to create value together? Let&apos;s discuss how we can help you achieve your goals
                                    </p>
                                    <a
                                        href="mailto:reach@hanshillsco.com"
                                        className="text-sm sm:text-base leading-relaxed font-normal text-[#a7a7a7] hover:text-white transition-colors"
                                    >
                                        reach@hanshillsco.com
                                    </a>
                                </div>
                            </div>

                            {/* Services Links */}
                            <div>
                                <h4 className="text-sm sm:text-base leading-relaxed font-bold text-white mb-3 sm:mb-4">
                                    Services
                                </h4>
                                <ul className="space-y-2">
                                    {footerLinks.services.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm sm:text-base leading-relaxed font-normal text-[#a7a7a7] hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company Links */}
                            <div>
                                <h4 className="text-sm sm:text-base leading-relaxed font-bold text-white mb-3 sm:mb-4">
                                    Company
                                </h4>
                                <ul className="space-y-2">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm sm:text-base leading-relaxed font-normal text-[#a7a7a7] hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div>
                                <h4 className="text-sm sm:text-base leading-relaxed font-bold text-white mb-3 sm:mb-4">
                                    Legal
                                </h4>
                                <ul className="space-y-2">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-base leading-[19px] font-normal text-[#a7a7a7] hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Section - Copyright */}
                        <div className="mt-12 pt-6 border-t border-white/10">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <p className="text-base leading-[19px] font-normal text-[#a7a7a7]">
                                    © {currentYear} Hanshills & Co. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* Closing the outer border div */}
        </footer>
    );
}