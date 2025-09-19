'use client';
import { useRef } from 'react';

export default function SpotlightCard({ className = '', children }) {
  const ref = useRef(null);

  const setSpotFromPoint = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    el.style.setProperty('--spot-x', `${x}px`);
    el.style.setProperty('--spot-y', `${y}px`);
  };

  const handleMouseMove = (e) => setSpotFromPoint(e.clientX, e.clientY);
  const handlePointerMove = (e) => setSpotFromPoint(e.clientX, e.clientY);
  const handlePointerLeave = () => setSpotFromPoint(-100, -100);
  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    setSpotFromPoint(t.clientX, t.clientY);
  };
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    setSpotFromPoint(t.clientX, t.clientY);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`relative rounded-lg border border-border bg-secondary shadow-sm overflow-hidden ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="spotlight-mask" />
      </div>
      <style jsx>{`
        .spotlight-mask {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            200px 200px at var(--spot-x, -100px) var(--spot-y, -100px),
            color-mix(in srgb, var(--primary) 20%, transparent),
            transparent 60%
          );
          opacity: 0.9;
          transition: background 120ms ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .spotlight-mask { transition: none; }
        }
      `}</style>
    </div>
  );
}


