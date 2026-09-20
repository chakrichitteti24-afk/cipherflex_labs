import { useEffect, useRef } from 'react';

export default function TechBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Only run pointer tracking on devices with a mouse/trackpad (never on mobile or touchscreens)
    if (window.matchMedia('(pointer: fine)').matches) {
      let rafId = null;
      let targetX = -1000;
      let targetY = -1000;

      const updateSpotlight = () => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouse-x', `${targetX}px`);
          containerRef.current.style.setProperty('--mouse-y', `${targetY}px`);
        }
        rafId = null;
      };

      const onPointerMove = (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        // Throttle to 1 update per frame (60fps / 120fps sync)
        if (!rafId) {
          rafId = requestAnimationFrame(updateSpotlight);
        }
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      return () => {
        window.removeEventListener('pointermove', onPointerMove);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        contain: 'strict',
        transform: 'translate3d(0, 0, 0)',
      }}
      aria-hidden="true"
    >
      {/* 1. Ultra-lightweight Cyber Grid & Dot Matrix Layer */}
      <div 
        className="absolute inset-0 opacity-60 sm:opacity-75"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px, 48px 48px, 48px 48px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 40%, #000 40%, transparent 100%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 2. Interactive Cursor Spotlight (Desktop only, GPU-composited, 0% CPU overhead) */}
      <div 
        className="absolute inset-0 hidden md:block transition-opacity duration-300"
        style={{
          background: 'radial-gradient(650px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(37, 99, 235, 0.075), transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 
        3. Zero-Lag Ambient Gradient Orbs 
        Uses native radial-gradients (ZERO blur-filter cost on low-end GPUs)
        Driven by pure CSS compositor translate3d keyframes
      */}
      {/* Top Right Orb - Sapphire Glow */}
      <div
        className="ambient-orb-1 absolute -top-20 -right-20 w-[360px] sm:w-[580px] h-[360px] sm:h-[580px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.12) 0%, rgba(29, 78, 216, 0.04) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Mid-Left Orb - Deep Cobalt Glow (Hidden on very small phones to guarantee 60-120fps) */}
      <div
        className="ambient-orb-2 absolute top-[30%] -left-28 w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full hidden sm:block"
        style={{
          background: 'radial-gradient(circle, rgba(30, 64, 175, 0.10) 0%, rgba(30, 64, 175, 0.03) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Mid-Right Orb - Electric Indigo */}
      <div
        className="ambient-orb-3 absolute top-[55%] -right-24 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.09) 0%, rgba(67, 56, 202, 0.025) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Bottom Orb - Cyber Blue */}
      <div
        className="ambient-orb-1 absolute -bottom-24 left-1/3 -translate-x-1/2 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0.02) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Top subtle vignette for clean navbar readability */}
      <div 
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-transparent" 
      />
    </div>
  );
}
