'use client';
import { useEffect, useRef, useState } from 'react';

export default function VentureCapitalVisual({ className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative group ${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Professional Venture Capital Visual */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* HD Image Container with Glide Animation */}
        <div className="w-full h-80 relative overflow-hidden">
          {/* City Skyline Image with Glide Effect */}
          <img 
            src="/images/venture-capital-city-skyline.jpg" 
            alt="Venture Capital City Skyline - Innovation and Growth"
            className="w-full h-full object-cover transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${scrollProgress * -60}px)`,
            }}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.backgroundImage = `linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)`;
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          
          {/* Fallback placeholder - shown when image fails to load */}
          <div 
            className="w-full h-full bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 relative hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)`,
              transform: `translateX(${scrollProgress * -60}px)`,
            }}
          >
            {/* Fallback content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-white/30 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-white/95 uppercase tracking-wider mb-1">Venture Capital</p>
                <p className="text-xs text-white/80">Innovation & Growth</p>
              </div>
            </div>
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/25"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 mx-auto mb-4 border-2 border-white/30 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <svg className="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-white/95 uppercase tracking-wider mb-1">Venture Capital</p>
              <p className="text-xs text-white/80">Innovation & Growth</p>
            </div>
          </div>
          
          {/* Overlay elements for sophistication with glide animation */}
          <div 
            className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-lg transition-all duration-700"
            style={{
              transform: `translateX(${scrollProgress * -20}px)`,
              opacity: 0.8 - scrollProgress * 0.3
            }}
          ></div>
          <div 
            className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full transition-all duration-700"
            style={{
              transform: `translateX(${scrollProgress * -15}px)`,
              opacity: 0.8 - scrollProgress * 0.2
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-4 w-8 h-8 border border-white/20 transform -rotate-45 transition-all duration-700"
            style={{
              transform: `translateX(${scrollProgress * -10}px) rotate(${-45 + scrollProgress * 5}deg)`,
              opacity: 0.8 - scrollProgress * 0.4
            }}
          ></div>
          
          {/* Subtle grid pattern with glide animation */}
          <div 
            className="absolute inset-0 opacity-10 transition-all duration-1000"
            style={{
              opacity: 0.1 + scrollProgress * 0.05,
              transform: `translateX(${scrollProgress * -30}px)`
            }}
          >
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
        
        {/* Professional overlay with glide animation */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-all duration-700"
          style={{
            opacity: 0.2 + scrollProgress * 0.1
          }}
        ></div>
      </div>
      
      {/* Floating stats card with glide animation */}
      <div 
        className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transition-all duration-700"
        style={{
          transform: `translateX(${scrollProgress * -25}px) translateY(${scrollProgress * -15}px) scale(${1 + scrollProgress * 0.03})`,
          boxShadow: `0 ${10 + scrollProgress * 8}px ${25 + scrollProgress * 12}px rgba(0,0,0,${0.1 + scrollProgress * 0.04})`
        }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">50+</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">Startups Funded</div>
        </div>
      </div>
    </div>
  );
}

