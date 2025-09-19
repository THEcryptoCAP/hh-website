'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Logo from './components/Logo';



import ventureCapitalImage from '../../public/venture capital visual.avif';
import privateEquityImage from '../../public/private equity visual.avif';
import strategicAdvisorImage from '../../public/stratedgic advisor image.avif';
import SpotlightCard from './components/SpotlightCard';
// Import the image properly for Next.js
import heroImage from '../../public/Picture1.jpg';

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const heroRef = useScrollAnimation();
  const philosophyRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const insightsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  // Scroll effect for flowy animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <section 
        ref={heroRef.elementRef}
        className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background Image - Full Visibility with Flowy Transitions */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Dynamic Gradient Overlay with Enhanced Scroll Effect */}
          <div 
            className="absolute inset-0 z-10 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(135deg, 
                rgba(0,0,0,${0.15 + scrollY * 0.00008}) 0%, 
                rgba(0,0,0,${0.05 + scrollY * 0.00003}) 30%, 
                transparent 50%, 
                rgba(0,0,0,${0.1 + scrollY * 0.00005}) 70%, 
                rgba(0,0,0,${0.25 + scrollY * 0.0001}) 100%
              )`,
              backdropFilter: `blur(${scrollY * 0.01}px)`,
              transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          ></div>
          
          {/* Main Hero Image with Flowy Scroll Parallax */}
          <div className="relative w-full h-full">
          <img 
            src={heroImage}
              alt="Hero Background - Professional Investment Landscape" 
              className={`w-full h-full object-cover transition-all duration-3000 ease-out transform ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{
                filter: `brightness(${0.9 - scrollY * 0.00003}) contrast(${1.15 + scrollY * 0.00001}) saturate(${1.2 + scrollY * 0.000005})`,
              }}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                console.log('Image failed to load, trying fallback');
                e.target.src = '/Picture1.jpg';
              }}
            />
            
            {/* Elegant Loading Animation */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-white/10 border-t-white/30 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                  <div className="absolute inset-2 w-16 h-16 border-2 border-transparent border-t-white/40 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
                </div>
              </div>
            )}
            
            {/* Enhanced Flowy Gradient Overlay with Scroll Effect */}
            <div 
              className="absolute inset-0 transition-all duration-1000 ease-out"
              style={{
                background: `linear-gradient(180deg, 
                  rgba(0,0,0,${0.2 + scrollY * 0.00008}) 0%, 
                  rgba(0,0,0,${0.05 + scrollY * 0.00002}) 25%, 
                  transparent 45%, 
                  transparent 65%, 
                  rgba(0,0,0,${0.08 + scrollY * 0.00003}) 85%, 
                  rgba(0,0,0,${0.15 + scrollY * 0.00006}) 100%
                )`,
                backdropFilter: `blur(${scrollY * 0.005}px)`,
                transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            ></div>
            
            {/* Enhanced Flowing Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    width: `${2 + (i % 3)}px`,
                    height: `${2 + (i % 3)}px`,
                    left: `${15 + (i * 7) % 70}%`,
                    top: `${20 + (i * 8) % 60}%`,
                    backgroundColor: `rgba(255,255,255,${0.1 + (i % 3) * 0.05})`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${4 + i * 0.3}s`,
                    transform: `translateY(${scrollY * (0.2 + i * 0.01)}px) translateX(${Math.sin(scrollY * 0.001 + i) * 10}px)`,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Additional Flowy Light Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`light-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                    left: `${30 + i * 20}%`,
                    top: `${40 + i * 15}%`,
                    background: `radial-gradient(circle, rgba(255,255,255,${0.02 + scrollY * 0.00001}) 0%, transparent 70%)`,
                    transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) scale(${1 + scrollY * 0.00001})`,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content with Enhanced Flowy Scroll Effects */}
        <div 
          className="container text-center relative z-20"
          style={{
            transform: `translateY(${scrollY * 0.15}px) scale(${1 - scrollY * 0.00001})`,
            transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: `blur(${scrollY * 0.001}px)`
          }}
        >
          <h1 className="text-heading-1 font-serif font-bold text-foreground leading-tight mb-6 drop-shadow-2xl">
            <span 
              className="block mb-4 transition-all duration-1000 ease-out delay-300"
              style={{
                transform: `translateY(${scrollY * 0.08}px) translateX(${Math.sin(scrollY * 0.0005) * 5}px)`,
                opacity: 1 - scrollY * 0.0006,
                textShadow: `0 4px 20px rgba(0,0,0,${0.3 + scrollY * 0.0001})`,
                filter: `blur(${scrollY * 0.0002}px)`
              }}
            >
              Where Capital Meets Strategy
            </span>
            <span 
              className="block text-heading-3 text-foreground/95 mt-2 min-h-[1.2em] transition-all duration-1000 ease-out delay-500"
              style={{
                transform: `translateY(${scrollY * 0.06}px) translateX(${Math.cos(scrollY * 0.0003) * 3}px)`,
                opacity: 1 - scrollY * 0.0004,
                textShadow: `0 2px 15px rgba(0,0,0,${0.2 + scrollY * 0.00008})`,
                filter: `blur(${scrollY * 0.0001}px)`
              }}
            >
              {typewriterText}
            </span>
          </h1>
          <p 
            className="text-body-large text-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg transition-all duration-1000 ease-out delay-700"
            style={{
              transform: `translateY(${scrollY * 0.04}px) translateX(${Math.sin(scrollY * 0.0002) * 2}px)`,
              opacity: 1 - scrollY * 0.0003,
              textShadow: `0 2px 10px rgba(0,0,0,${0.15 + scrollY * 0.00005})`,
              filter: `blur(${scrollY * 0.0001}px)`
            }}
          >
            From visionary founders to established enterprises, we invest, advise, and accelerate growth through our three integrated verticals: Private Equity, Venture Capital, and Advisory.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ease-out delay-900"
            style={{
              transform: `translateY(${scrollY * 0.02}px) scale(${1 - scrollY * 0.000005})`,
              opacity: 1 - scrollY * 0.0001,
              filter: `blur(${scrollY * 0.00005}px)`
            }}
          >
            <Link 
              href="/venture-capital" 
              className="btn btn-primary btn-large transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-2xl"
              style={{
                boxShadow: `0 15px 40px rgba(0,0,0,${0.4 + scrollY * 0.0002})`,
                transform: `translateY(${scrollY * 0.01}px) scale(${1 + scrollY * 0.00001})`,
                filter: `blur(${scrollY * 0.00003}px)`
              }}
            >
              For Founders → Pitch Us
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-secondary btn-large transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-2xl"
              style={{
                boxShadow: `0 15px 40px rgba(0,0,0,${0.4 + scrollY * 0.0002})`,
                transform: `translateY(${scrollY * 0.01}px) scale(${1 + scrollY * 0.00001})`,
                filter: `blur(${scrollY * 0.00003}px)`
              }}
            >
              For Investors → Partner With Us
            </Link>
            <Link 
              href="/advisory" 
              className="btn btn-primary btn-large transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-2xl"
              style={{
                boxShadow: `0 15px 40px rgba(0,0,0,${0.4 + scrollY * 0.0002})`,
                transform: `translateY(${scrollY * 0.01}px) scale(${1 + scrollY * 0.00001})`,
                filter: `blur(${scrollY * 0.00003}px)`
              }}
            >
              For Businesses → Work With Us
            </Link>
            </div>
        </div>
      </section>

      {/* Philosophy Section with Flowy Effects */}
      <section 
        ref={philosophyRef.elementRef}
        className={`py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted transition-all duration-1000 ease-out ${
          philosophyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          background: `linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)) 50%, hsl(var(--muted)/0.95) 100%)`
        }}
      >
        <div className="container">
          <div 
            className="max-w-4xl mx-auto text-center"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h2 
              className="text-heading-3 font-serif font-bold text-foreground mb-8"
              style={{
                transform: `translateY(${scrollY * 0.01}px)`,
                textShadow: `0 2px 10px rgba(0,0,0,${0.1 + scrollY * 0.00005})`
              }}
            >
              Our Philosophy
            </h2>
            <p 
              className="text-body-large text-muted-foreground leading-relaxed"
              style={{
                transform: `translateY(${scrollY * 0.005}px)`,
                opacity: 0.95 + scrollY * 0.00001
              }}
            >
              We believe value creation isn't one-dimensional. That's why we bring together capital, advisory, and operational expertise under one roof — to help companies scale, transform, and lead markets with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Flowy Effects */}
      <section 
        ref={servicesRef.elementRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
          background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)/0.98) 100%)`
        }}
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
