'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg' : 'bg-background/40 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={closeMenu} className="flex-shrink-0">
            <Logo size="default" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/private-equity" className="nav-link">Private Equity</Link>
            <Link href="/venture-capital" className="nav-link">Venture Capital</Link>
            <Link href="/advisory" className="nav-link">Advisory</Link>
            <Link href="/insights" className="nav-link">Insights</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/90 hover:text-primary hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setIsOpen(v => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container py-2">
            <div className="flex flex-col py-2">
              <Link href="/" onClick={closeMenu} className="mobile-link">Home</Link>
              <Link href="/about" onClick={closeMenu} className="mobile-link">About</Link>
              <Link href="/private-equity" onClick={closeMenu} className="mobile-link">Private Equity</Link>
              <Link href="/venture-capital" onClick={closeMenu} className="mobile-link">Venture Capital</Link>
              <Link href="/advisory" onClick={closeMenu} className="mobile-link">Advisory</Link>
              <Link href="/insights" onClick={closeMenu} className="mobile-link">Insights</Link>
              <Link href="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .nav-link { 
          padding: 0.5rem 0.75rem; 
          border-radius: 0.5rem; 
          font-weight: 500; 
          color: var(--foreground);
          transition: all var(--transition-smooth);
          border: 1px solid transparent;
        }
        .nav-link:hover { 
          color: var(--primary); 
          background: color-mix(in srgb, var(--secondary) 40%, transparent);
          border-color: color-mix(in srgb, var(--border) 60%, transparent);
        }
        .mobile-link {
          padding: 0.75rem 0.25rem;
          font-size: 1.0625rem; /* 17px for readability */
          line-height: 1.4;
          color: var(--foreground);
          border-bottom: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
        }
        .mobile-link:last-child { border-bottom: 0; }
      `}</style>
    </nav>
  );
}


