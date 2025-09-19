'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Logo from './components/Logo';



import ventureCapitalImage from '../../public/venture capital visual.avif';
import privateEquityImage from '../../public/private equity visual.avif';
import strategicAdvisorImage from '../../public/stratedgic advisor image.avif';
import SpotlightCard from './components/SpotlightCard';
import heroImage from '../../public/hero section images.avif';

// Custom hook for typewriter effect
function useTypewriter(text, speed = 100) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

// Custom hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}

export default function Home() {
  const headline = "Building Enduring Value Across Every Stage.";
  const typewriterText = useTypewriter(headline, 80);
  
  const heroRef = useScrollAnimation();
  const philosophyRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const insightsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <section 
        ref={heroRef.elementRef}
        className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background Image - Full Visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage.src} 
            alt="Hero Background" 
            className="w-full h-full object-cover transition-all duration-1500 ease-in-out transform scale-105 hover:scale-100"
          />
        </div>
        
        {/* Content */}
        <div className="container text-center relative z-20">
          <h1 className="text-heading-1 font-serif font-bold text-foreground leading-tight mb-6 drop-shadow-2xl">
            <span className="block mb-4">Where Capital Meets Strategy</span>
            <span className="block text-heading-3 text-foreground/95 mt-2 min-h-[1.2em]">
              {typewriterText}
            </span>
          </h1>
          <p className="text-body-large text-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
            From visionary founders to established enterprises, we invest, advise, and accelerate growth through our three integrated verticals: Private Equity, Venture Capital, and Advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/venture-capital" className="btn btn-primary btn-large">
              For Founders → Pitch Us
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-large">
              For Investors → Partner With Us
            </Link>
            <Link href="/advisory" className="btn btn-primary btn-large">
              For Businesses → Work With Us
            </Link>
            </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        ref={philosophyRef.elementRef}
        className={`py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted transition-all duration-1000 ease-out ${
          philosophyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8">Our Philosophy</h2>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              We believe value creation isn't one-dimensional. That's why we bring together capital, advisory, and operational expertise under one roof — to help companies scale, transform, and lead markets with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef.elementRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          {/* Private Equity */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group md:order-1">
                <div className="w-full h-[260px] sm:h-80 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={privateEquityImage.src} 
                    alt="Private Equity" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <SpotlightCard className="transition-all duration-1000 ease-out delay-300 md:order-2 p-6 sm:p-8">
                <h2 className="text-heading-2 font-serif font-bold text-foreground mb-6">Private Equity with Purpose</h2>
                <p className="text-body-large text-muted-foreground leading-relaxed mb-8">
                  We partner with high-potential businesses and established enterprises to create sustainable value. Through strategic capital, operational expertise, and global networks, we help companies scale new heights while delivering enduring returns for stakeholders.
                </p>
                <Link href="/private-equity" className="btn btn-primary">
                  Explore Our PE Approach
                </Link>
              </SpotlightCard>
            </div>
          </div>

          {/* Venture Capital */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group md:order-2">
                <div className="w-full h-[260px] sm:h-80 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={ventureCapitalImage.src} 
                    alt="Venture Capital" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <SpotlightCard className="transition-all duration-1000 ease-out delay-300 md:order-1 p-6 sm:p-8">
                <h2 className="text-heading-2 font-serif font-bold text-foreground mb-6">Backing Tomorrow's Visionaries</h2>
                <p className="text-body-large text-muted-foreground leading-relaxed mb-8">
                  We invest in founders who dare to reimagine the future. Beyond capital, we provide strategic guidance, operational playbooks, and access to an ecosystem that empowers startups to grow smarter, faster, and stronger.
                </p>
                <Link href="/venture-capital" className="btn btn-primary">
                  Pitch Your Startup
                </Link>
              </SpotlightCard>
            </div>
          </div>

          {/* Advisory */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group md:order-1">
                <div className="w-full h-[260px] sm:h-80 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={strategicAdvisorImage.src} 
                    alt="Strategic Advisory" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <SpotlightCard className="transition-all duration-1000 ease-out delay-300 md:order-2 p-6 sm:p-8">
                <h2 className="text-heading-2 font-serif font-bold text-foreground mb-6">Advisory That Delivers Clarity & Results</h2>
                <p className="text-body-large text-muted-foreground leading-relaxed mb-8">
                  From sell-side M&A and capital raising to strategic consulting and value creation, our advisory arm blends investment banking precision with consulting insight. We help businesses make informed decisions, execute flawlessly, and achieve transformative outcomes.
                </p>
                <Link href="/advisory" className="btn btn-primary">
                  Learn About Our Advisory Services
                </Link>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section 
        ref={insightsRef.elementRef}
        className={`py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted transition-all duration-1000 ease-out ${
          insightsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-3 font-serif font-bold text-foreground mb-8">Perspectives That Move Markets</h2>
            <p className="text-body-large text-muted-foreground leading-relaxed mb-8">
              Our team shares actionable insights on market trends, investment strategies, and growth playbooks so you stay ahead in an evolving world.
            </p>
            <Link href="/insights" className="btn btn-primary">
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section 
        ref={ctaRef.elementRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-2 font-serif font-bold text-foreground mb-6">Ready to Create Value Together?</h2>
            <p className="text-body-large text-muted-foreground mb-8">
              Whether you're a founder, investor, or business leader — we're here to help you achieve what's next.
            </p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="large" className="text-primary-foreground mb-4" />
              <p className="text-muted-foreground">
                Where Capital Meets Strategy — Building Enduring Value Across Every Stage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/private-equity" className="hover:text-primary-foreground transition-colors">Private Equity</Link></li>
                <li><Link href="/venture-capital" className="hover:text-primary-foreground transition-colors">Venture Capital</Link></li>
                <li><Link href="/advisory" className="hover:text-primary-foreground transition-colors">Advisory</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
                <li><Link href="/insights" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
                <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-muted-foreground">
                Ready to create value together? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hanshills & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
