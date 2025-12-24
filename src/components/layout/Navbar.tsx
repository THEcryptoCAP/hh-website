'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

/**
 * Navigation Links
 * Order: Home, About, PE/VC, Venture Studio, Advisory, Insights, Contact
 */
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pe-vc', label: 'PE/VC' },
    { href: '/studio-venture', label: 'Venture Studio' },
    { href: '/advisory', label: 'Advisory' },
    { href: '/insights', label: 'Insights' },
    { href: '/get-in-touch', label: 'Contact' },
];

/**
 * Navbar Component
 * 
 * Style: Glass morphism with backdrop blur
 * - backdrop-blur-[11.2px]
 * - bg-[#d9d9d9]/10
 * - border border-[#585858]
 * - rounded-[5px]
 * 
 * Typography: Manrope, 19px, font-weight: 600, letter-spacing: -0.03em
 */
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <nav className="fixed inset-x-0 top-0 z-50">
            <div className="relative w-full">
                {/* Full Width Background */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "backdrop-blur-[11.2px]",
                        "bg-[#d9d9d9]/10",
                        "border-b border-[#585858]",
                        "transition-all duration-300"
                    )}
                />

                {/* Content Container - with padding */}
                <div
                    className={cn(
                        'relative mx-auto max-w-[1728px]',
                        'flex items-center',
                        'h-[59px] px-4 sm:px-6',
                        'transition-all duration-300'
                    )}
                    style={{
                        paddingLeft: 'max(1rem, var(--page-margin))',
                        paddingRight: 'max(1rem, var(--page-margin))'
                    }}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center group flex-shrink-0">
                        <img
                            src="/assets/resources/logo-navbar.svg"
                            alt="Hanshills & Co."
                            className="h-[23px] w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Spacer to push nav to the right */}
                    <div className="flex-grow" />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '40px' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'text-[19px] font-semibold tracking-[-0.03em]',
                                    'text-white',
                                    'transition-colors duration-300',
                                    'hover:text-[#8B7355]',
                                    'relative',
                                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#8B7355]',
                                    'after:transition-all after:duration-300 hover:after:w-full',
                                    pathname === link.href && 'text-[#8B7355] after:w-full'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:text-[#8B7355] transition-colors ml-auto"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'lg:hidden overflow-hidden transition-all duration-300',
                    isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="w-full">
                    <div
                        className={cn(
                            'backdrop-blur-[11.2px]',
                            'bg-[#1a1a1a]/95', // Darker background for mobile menu legibility
                            'border-b border-[#585858]',
                            'py-4'
                        )}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'block py-3 px-4 sm:px-6',
                                    'text-base sm:text-[19px] font-semibold tracking-[-0.03em]',
                                    'text-white',
                                    'transition-colors duration-300',
                                    'hover:text-[#8B7355] hover:bg-white/5',
                                    pathname === link.href && 'text-[#8B7355] bg-white/5'
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
