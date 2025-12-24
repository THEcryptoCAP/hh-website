'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';

/**
 * Services Section
 * 
 * Design specs:
 * - 3-column layout with numbered items (01., 02., 03.)
 * - Square image with number overlaid at bottom-left corner
 * - Title and description below image
 * - CTA buttons at bottom - center aligned
 * - All cards have equal height
 */
const services = [
    {
        number: '01.',
        title: 'Private Equity with Purpose',
        description: 'We partner with high-potential businesses and established enterprises to create sustainable value. Through strategic capital, operational expertise, and global networks, we help companies scale new heights while delivering enduring returns for stakeholders.',
        cta: 'Explore our PE Approach',
        href: '/pe-vc',
        image: '/assets/images/philosophy/home1.png',
    },
    {
        number: '02.',
        title: "Backing Tomorrow's Visionaries",
        description: 'We invest in founders who dare to reimagine the future. Beyond capital, we provide strategic guidance, operational playbooks, and access to an ecosystem that empowers startups to grow smarter, faster, and stronger.',
        cta: 'Pitch Your Startup',
        href: '/cohort',
        image: '/assets/images/philosophy/home2.png',
    },
    {
        number: '03.',
        title: 'Advisory That Delivers Clarity & Results',
        description: 'From sell-side M&A and capital raising to strategic consulting and value creation, our advisory arm blends investment banking precision with consulting insight. We help businesses make informed decisions, execute flawlessly, and achieve transformative outcomes.',
        cta: 'Learn About Our Advisory Services',
        href: '/advisory',
        image: '/assets/images/philosophy/home3.png',
    },
];

export function ServicesSection() {
    return (
        <section className="bg-black py-8 sm:py-12 md:py-16">
            <div className="content-wrapper">
                {/* Grid with equal height cards */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
                    {services.map((service) => (
                        <StaggerItem key={service.number} className="h-full">
                            <FadeIn className="h-full">
                                {/* Service Card - Full height with flex column */}
                                <div className="rounded-[5px] overflow-hidden h-full flex flex-col">
                                    {/* Image Section with Number Overlay */}
                                    <div className="relative aspect-square overflow-hidden bg-neutral-800">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Number Overlay - Bottom Left of Image */}
                                        <span className="absolute bottom-4 left-4 text-6xl md:text-7xl lg:text-8xl leading-none tracking-[-0.01em] font-medium text-white drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Content Section - With equal height enforcement */}
                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col grow bg-[#1A1A1A]">
                                        {/* Title */}
                                        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight tracking-[-0.01em] font-medium text-white mb-3 sm:mb-4">
                                            {service.title}
                                        </h4>

                                        {/* Description - flex-grow ensures equal spacing */}
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-[#A7A7A7] mb-4 sm:mb-6 grow">
                                            {service.description}
                                        </p>

                                        {/* CTA Button - Full Width, anchored to bottom */}
                                        <Link href={service.href} className="w-full mt-auto">
                                            <Button variant="primary" size="lg" className="w-full">
                                                {service.cta}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
