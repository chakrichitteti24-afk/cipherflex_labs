import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * CipherFlux Labs — 3.5-Second Pure Water Ripples Boot Screen
 * Mobile responsive, continuous harmonic concentric liquid wave ripples.
 * Strictly non-neon: crystal water reflections, subtle liquid wave crests, and deep obsidian dark water aesthetics.
 */
export default function BootScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [done, setDone] = useState(false);

  const timers = useRef([]);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const isExitingRef = useRef(false);

  const finish = useCallback(() => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      setDone(true);
      onCompleteRef.current?.();
    }, 400);
  }, []);

  const handleSkip = useCallback(() => {
    timers.current.forEach(clearTimeout);
    finish();
  }, [finish]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const add = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      finish();
      return () => timers.current.forEach(clearTimeout);
    }

    // 3.5-Second Total Duration:
    // 0.0s - 3.1s: Smooth harmonic liquid water ripples
    // 3.1s - 3.5s: Gentle crossfade exit into main site
    add(() => {
      setIsExiting(true);
    }, 3100);

    // Complete at exactly 3.5s (3500ms)
    add(() => {
      setDone(true);
      onCompleteRef.current?.();
    }, 3500);

    // Instant skip via keyboard
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timers.current.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [finish, handleSkip]);

  if (done) return null;

  return (
    <>
      <style>{`
        /* Concentric continuous water ripple wave expansion */
        @keyframes cf-continuous-water-ripple {
          0% {
            transform: scale(0.75);
            opacity: 0;
            border-width: 2px;
          }
          15% {
            opacity: 0.75;
            border-width: 2px;
          }
          50% {
            opacity: 0.45;
            border-width: 1.5px;
          }
          80% {
            opacity: 0.15;
            border-width: 1px;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
            border-width: 0.5px;
          }
        }

        /* Secondary subtle liquid wave wake */
        @keyframes cf-continuous-sub-ripple {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          60% {
            opacity: 0.25;
          }
          100% {
            transform: scale(3.2);
            opacity: 0;
          }
        }

        /* Logo gentle breathing in calm water */
        @keyframes cf-logo-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.02);
          }
        }

        /* Water surface ambient lighting */
        @keyframes cf-water-ambient {
          0%, 100% {
            opacity: 0.04;
            transform: scale(1);
          }
          50% {
            opacity: 0.09;
            transform: scale(1.06);
          }
        }
      `}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="3.5-Second Water Ripples Loading"
        onClick={handleSkip}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: '#030712',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          opacity: isExiting ? 0 : 1,
          transition: isExiting ? 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          willChange: 'opacity',
          overflow: 'hidden',
        }}
      >
        {/* Soft liquid ambient lighting — non-neon */}
        <div
          style={{
            position: 'absolute',
            width: 'clamp(280px, 80vw, 580px)',
            height: 'clamp(280px, 80vw, 580px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 45%, transparent 70%)',
            animation: 'cf-water-ambient 3.5s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Central Liquid Stage */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(220px, 70vw, 360px)',
            height: 'clamp(220px, 70vw, 360px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Wave 1 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              boxShadow: 'inset 0 0 14px rgba(255,255,255,0.08), 0 0 14px rgba(37,99,235,0.15)',
              animation: 'cf-continuous-water-ripple 2.6s cubic-bezier(0.12, 0.8, 0.25, 1) infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Wave 2 (0.65s offset) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              boxShadow: 'inset 0 0 10px rgba(37,99,235,0.12)',
              animation: 'cf-continuous-water-ripple 2.6s cubic-bezier(0.12, 0.8, 0.25, 1) 0.65s infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Wave 3 (1.3s offset) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              animation: 'cf-continuous-sub-ripple 2.6s cubic-bezier(0.12, 0.8, 0.25, 1) 1.3s infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Wave 4 (1.95s offset) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1.5px solid rgba(37, 99, 235, 0.35)',
              animation: 'cf-continuous-sub-ripple 2.6s cubic-bezier(0.12, 0.8, 0.25, 1) 1.95s infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Calm Center Static Meniscus Ring */}
          <div
            style={{
              position: 'absolute',
              width: '75%',
              height: '75%',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.03)',
              pointerEvents: 'none',
            }}
          />

          {/* Center Company Logo */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              width: 'clamp(120px, 36vw, 190px)',
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'cf-logo-float 3s ease-in-out infinite',
            }}
          >
            <img
              src="/cipherflux-logo.png"
              alt="CipherFlux Labs"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                display: 'block',
                filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.6))',
              }}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Bottom subtle brand & skip prompt */}
        <div className="absolute bottom-6 sm:bottom-8 flex items-center justify-between w-full px-4 sm:px-10 pointer-events-auto">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500 font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span>CipherFlux Labs</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-400 hover:text-white text-xs font-medium transition-all duration-150 min-h-[32px] flex items-center"
            aria-label="Skip water ripples"
          >
            Skip <kbd className="font-mono text-[10px] text-gray-500 ml-1">Esc</kbd>
          </button>
        </div>
      </div>
    </>
  );
}
