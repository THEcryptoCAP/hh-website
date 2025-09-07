'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MountainLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`inline-block transition-all duration-1000 ease-out ${
      isVisible 
        ? 'opacity-100 scale-100 rotate-0' 
        : 'opacity-0 scale-75 rotate-12'
    }`}>
      <Image
        src="/mountain logo.webp"
        alt="Hanshills Mountain Logo"
        width={24}
        height={24}
        className="rounded"
        priority
      />
    </div>
  );
}
