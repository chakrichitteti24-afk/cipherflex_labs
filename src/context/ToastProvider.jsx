import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { ToastContext } from './ToastContext';

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div 
        aria-live="polite" 
        className="fixed bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+1rem))] right-4 sm:right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-[calc(100%-2rem)] sm:w-full"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto bg-[#0B1120] border border-white/[0.12] rounded-xl sm:rounded-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-2xl flex items-center justify-between gap-3 text-white backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5">
                {toast.type === 'success' && (
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" aria-hidden="true" />
                )}
                {toast.type === 'info' && (
                  <Info size={16} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                )}
                {toast.type === 'error' && (
                  <AlertCircle size={16} className="text-rose-400 shrink-0" aria-hidden="true" />
                )}
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  {toast.message}
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label="Close notification"
              >
                <X size={13} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
