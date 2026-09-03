import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * CipherFlux Labs — Mavaraval (Marvel) Theme Boot Screen
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

    // 4.5-Second Total Duration:
    add(() => {
      setIsExiting(true);
    }, 4100);

    // Complete at exactly 4.5s
    add(() => {
      setDone(true);
      onCompleteRef.current?.();
    }, 4500);

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
        @keyframes pro-brand-bg {
          0% { background-color: #030712; }
          15% { background-color: #030712; }
          85% { background-color: #030712; }
          100% { background-color: #030712; }
        }

        @keyframes pro-brand-logo-scale {
          0% { transform: scale(2.5); opacity: 0; }
          15% { transform: scale(1); opacity: 1; }
          85% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes pro-brand-line-draw {
          0% { transform: scaleX(0); opacity: 1; }
          30% { transform: scaleX(1); opacity: 1; }
          85% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }

        @keyframes pro-glow {
          0% { box-shadow: 0 0 0px rgba(37,99,235,0); }
          50% { box-shadow: 0 0 30px rgba(37,99,235,0.4); }
          100% { box-shadow: 0 0 0px rgba(37,99,235,0); }
        }
      `}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="CipherFlux Labs Theme Loading"
        onClick={handleSkip}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: '#030712',
          animation: 'pro-brand-bg 4.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          opacity: isExiting ? 0 : 1,
          transition: isExiting ? 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          willChange: 'opacity, background-color',
          overflow: 'hidden',
          padding: '0 5vw',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pro-brand-logo-scale 4.5s cubic-bezier(0.12, 0.8, 0.25, 1) forwards',
            width: '100%',
          }}
        >
          {/* Main Logo Container - Controls exact width alignment */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'max-content',
            maxWidth: '100%',
          }}>
            {/* Top white border */}
            <div style={{
              height: '4px',
              width: '100%',
              backgroundColor: 'white',
              animation: 'pro-brand-line-draw 4.5s cubic-bezier(0.12, 0.8, 0.25, 1) forwards',
              transformOrigin: 'center',
              marginBottom: '8px',
              borderRadius: '4px',
            }} />

            {/* Brand Box */}
            <div style={{
              position: 'relative',
              backgroundColor: '#2563EB',
              padding: '0.4em 0.8em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 2vw, 1.5rem)',
              overflow: 'hidden',
              borderRadius: '4px',
              animation: 'pro-glow 4.5s ease-in-out forwards',
              width: '100%',
            }}>
              {/* Logo inside the box */}
              <img
                src="/cipherflux-logo.png"
                alt="CipherFlux Logo"
                style={{
                  width: 'clamp(32px, 8vw, 64px)',
                  height: 'clamp(32px, 8vw, 64px)',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                }}
              />
              <h1 style={{
                margin: 0,
                color: 'white',
                fontFamily: '"Impact", "Arial Black", sans-serif',
                fontSize: 'clamp(1.5rem, 8vw, 5rem)',
                letterSpacing: '-2px',
                textTransform: 'uppercase',
                lineHeight: 1,
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}>
                CIPHERFLUX LABS
              </h1>
            </div>
            
            {/* Bottom white border */}
            <div style={{
              height: '4px',
              width: '100%',
              backgroundColor: 'white',
              animation: 'pro-brand-line-draw 4.5s cubic-bezier(0.12, 0.8, 0.25, 1) forwards',
              transformOrigin: 'center',
              marginTop: '8px',
              borderRadius: '4px',
            }} />
          </div>
        </div>

        {/* Bottom subtle brand & skip prompt */}
        <div className="absolute bottom-6 sm:bottom-8 flex items-center justify-between w-full px-4 sm:px-10 pointer-events-auto">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/70 font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>CipherFlux Labs</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="px-3 py-1 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.1] text-white/70 hover:text-white text-xs font-medium transition-all duration-150 min-h-[32px] flex items-center"
          >
            Skip <kbd className="font-mono text-[10px] text-white/50 ml-1">Esc</kbd>
          </button>
        </div>
      </div>
    </>
  );
}
