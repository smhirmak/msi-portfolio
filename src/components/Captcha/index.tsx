import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { useMessages } from '@/i18n';

type Recaptcha = {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme: string;
      size: 'normal' | 'compact';
      hl: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    }
  ) => number;
  reset: (widget: number) => void;
};
declare global {
  interface Window {
    grecaptcha?: Recaptcha;
  }
}

export default function Captcha({
  siteKey,
  onTokenChange,
  resetKey
}: {
  siteKey: string;
  onTokenChange: (token: string) => void;
  resetKey: number;
}) {
  const { locale, messages } = useMessages();
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    const target = container.current;
    window.grecaptcha?.ready(() => {
      if (cancelled || !target || !window.grecaptcha) return;
      try {
        widget.current = window.grecaptcha.render(target, {
          sitekey: siteKey,
          theme: 'dark',
          size: target.getBoundingClientRect().width < 304 ? 'compact' : 'normal',
          hl: locale,
          callback: (token) => {
            setFailed(false);
            onTokenChange(token);
          },
          'expired-callback': () => onTokenChange(''),
          'error-callback': () => {
            onTokenChange('');
            setFailed(true);
          }
        });
      } catch {
        setFailed(true);
      }
    });
    return () => {
      cancelled = true;
      if (widget.current !== null) window.grecaptcha?.reset(widget.current);
      widget.current = null;
      target?.replaceChildren();
      onTokenChange('');
    };
  }, [ready, siteKey, locale, onTokenChange, attempt]);

  useEffect(() => {
    if (widget.current !== null) window.grecaptcha?.reset(widget.current);
  }, [resetKey]);

  return (
    <div>
      <Script
        id="recaptcha-script"
        src={`https://www.google.com/recaptcha/api.js?render=explicit&hl=${locale}`}
        strategy="lazyOnload"
        onReady={() => setReady(true)}
        onError={() => setFailed(true)}
      />
      <div ref={container} className="min-h-[78px] max-w-full" />
      {failed && (
        <div className="mt-2 text-sm text-error" role="alert">
          <p>{messages.captchaError}</p>
          <button
            type="button"
            className="mt-2 underline underline-offset-4"
            onClick={() => {
              setFailed(false);
              if (window.grecaptcha) {
                setReady(true);
                setAttempt((current) => current + 1);
              } else window.location.reload();
            }}>
            {messages.retry}
          </button>
        </div>
      )}
    </div>
  );
}
