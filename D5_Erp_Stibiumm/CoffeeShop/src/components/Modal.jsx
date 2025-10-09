import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-xl max-w-lg w-full m-4 p-6">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="ml-2 rounded hover:bg-gray-100 dark:hover:bg-white/5 p-2">✕</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
