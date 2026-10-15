import { useEffect, useRef, useState } from 'react';
import { Bio } from '@/data/constants';
import { useMessages } from '@/i18n';

export const INTRO_STORAGE_KEY = 'msi-intro-seen-v1';

export default function PreLoader() {
  const [visible, setVisible] = useState(false);
  const shouldShow = useRef<boolean | null>(null);
  const { messages } = useMessages();
  useEffect(() => {
    if (shouldShow.current === null) {
      shouldShow.current = false;
      try {
        if (!localStorage.getItem(INTRO_STORAGE_KEY)) {
          localStorage.setItem(INTRO_STORAGE_KEY, '1');
          shouldShow.current =
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.location.hash;
        }
      } catch {
        return;
      }
    }
    if (!shouldShow.current) return;
    // Defer the visual state until after Strict Mode's effect replay.
    const show = window.setTimeout(() => setVisible(true), 0);
    const hide = window.setTimeout(() => setVisible(false), 850);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);
  if (!visible) return null;
  return (
    <div
      className="intro-overlay pointer-events-none fixed inset-0 z-100 flex flex-col items-center justify-center gap-3 bg-bg px-6 text-center"
      aria-hidden="true"
      data-testid="intro-overlay">
      <span className="text-2xl font-semibold">{Bio.name}</span>
      <span className="text-base text-primary">{messages.title}</span>
    </div>
  );
}
