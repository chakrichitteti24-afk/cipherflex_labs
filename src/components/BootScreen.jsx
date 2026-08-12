import { useRef, useEffect, useState } from 'react';

/**
 * CipherFlux Labs — Premium OS-Like Boot Screen
 * Huawei-inspired: smooth, precise, elegant animations
 */
export default function BootScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // phase 0 = dark
  // phase 1 = logo appears + ring traces
  // phase 2 = pulse rings expand
  // phase 3 = exit fade
  const [done, setDone] = useState(false);

  const timers = useRef([]);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const add = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setPhase(1);
      add(() => { setPhase(3); }, 300);
      add(() => { setDone(true); onCompleteRef.current?.(); }, 700);
      return () => { timers.current.forEach(clearTimeout); };
    }

    // Phase 1: logo + ring trace (0.1s)
    add(() => setPhase(1), 100);

    // Phase 2: pulse rings (0.9s after phase 1)
    add(() => setPhase(2), 1000);

    // Phase 3: exit crossfade (3.2s — extended by +1.5s)
    add(() => setPhase(3), 3200);

    // Unmount (3.6s)
    add(() => { setDone(true); onCompleteRef.current?.(); }, 3600);

    // Safety
    add(() => { setDone(true); onCompleteRef.current?.(); }, 4000);

    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  if (done) return null;

  const isExiting = phase === 3;

  return (
    <>
      {/* Injected CSS keyframes — no external deps */}
      <style>{`
        @keyframes cf-logo-in {
          0%   { opacity: 0; transform: scale(0.88); }
          60%  { opacity: 1; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1);    }
        }

        @keyframes cf-ring-trace {
          0%   { stroke-dashoffset: 502; opacity: 0; }
          10%  { opacity: 1; }
          100% { stroke-dashoffset: 0;   opacity: 1; }
        }

        @keyframes cf-ring-glow-trace {
          0%   { stroke-dashoffset: 502; opacity: 0; }
          10%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0;   opacity: 0; }
        }

        @keyframes cf-pulse-1 {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.9); opacity: 0;   }
        }

        @keyframes cf-pulse-2 {
          0%   { transform: scale(1);   opacity: 0.3; }
          100% { transform: scale(2.5); opacity: 0;   }
        }

        @keyframes cf-glow-breathe {
          0%,100% { opacity: 0.15; }
          50%      { opacity: 0.35; }
        }

        @keyframes cf-shimmer {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: '#030712',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: isExiting ? 0 : 1,
          transition: isExiting ? 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          willChange: 'opacity',
        }}
      >
        {/* Outer ambient glow — breathes slowly */}
        {phase >= 1 && (
          <div style={{
            position: 'absolute',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)',
            animation: 'cf-glow-breathe 2.4s ease-in-out infinite',
            willChange: 'opacity',
          }} />
        )}

        {/* Pulse ring 1 */}
        {phase >= 2 && (
          <div style={{
            position: 'absolute',
            width: 'clamp(220px, 42vw, 320px)',
            height: 'clamp(220px, 42vw, 320px)',
            borderRadius: '50%',
            border: '1.5px solid rgba(37,99,235,0.55)',
            animation: 'cf-pulse-1 1.2s cubic-bezier(0.2, 0, 0.8, 1) forwards',
            willChange: 'transform, opacity',
          }} />
        )}

        {/* Pulse ring 2 (delayed) */}
        {phase >= 2 && (
          <div style={{
            position: 'absolute',
            width: 'clamp(220px, 42vw, 320px)',
            height: 'clamp(220px, 42vw, 320px)',
            borderRadius: '50%',
            border: '1px solid rgba(37,99,235,0.3)',
            animation: 'cf-pulse-2 1.4s cubic-bezier(0.2, 0, 0.8, 1) 0.25s forwards',
            willChange: 'transform, opacity',
          }} />
        )}

        {/* SVG ring trace layer — sits just outside the logo */}
        <div style={{ position: 'absolute', width: 'clamp(220px, 42vw, 320px)', height: 'clamp(220px, 42vw, 320px)' }}>
          <svg
            viewBox="0 0 320 320"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            {/* Static dim base ring */}
            <circle
              cx="160" cy="160" r="148"
              fill="none"
              stroke="rgba(37,99,235,0.12)"
              strokeWidth="1"
            />

            {/* Animated trace ring */}
            {phase >= 1 && (
              <circle
                cx="160" cy="160" r="148"
                fill="none"
                stroke="rgba(37,99,235,0.75)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="502"
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(37,99,235,0.9))',
                  transformOrigin: '160px 160px',
                  transform: 'rotate(-90deg)',
                  animation: 'cf-ring-trace 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  willChange: 'stroke-dashoffset, opacity',
                }}
              />
            )}

            {/* Glow ghost trace (fades out after ring is drawn) */}
            {phase >= 1 && (
              <circle
                cx="160" cy="160" r="148"
                fill="none"
                stroke="rgba(96,165,250,0.5)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="502"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(96,165,250,0.6))',
                  transformOrigin: '160px 160px',
                  transform: 'rotate(-90deg)',
                  animation: 'cf-ring-glow-trace 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  willChange: 'stroke-dashoffset, opacity',
                }}
              />
            )}
          </svg>
        </div>

        {/* Company Logo */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(180px, 36vw, 260px)',
            aspectRatio: '1 / 1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: phase >= 1
              ? 'cf-logo-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              : 'none',
            opacity: phase >= 1 ? undefined : 0,
            willChange: 'opacity, transform',
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
            }}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </div>
      </div>
    </>
  );
}
