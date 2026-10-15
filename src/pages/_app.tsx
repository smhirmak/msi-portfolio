import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { MotionConfig } from 'framer-motion';
import { useReportWebVitals } from 'next/web-vitals';
import type { Metric } from 'web-vitals';

const poppins = localFont({
  src: [
    { path: '../fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Poppins-SemiBold.woff2', weight: '600', style: 'normal' }
  ],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['Arial'],
  preload: true
});

declare global {
  interface Window {
    __portfolioVitals?: Record<string, { value: number; rating: string }>;
  }
}
function reportVitals(metric: Metric) {
  window.__portfolioVitals = {
    ...window.__portfolioVitals,
    [metric.name]: { value: metric.value, rating: metric.rating }
  };
  window.dispatchEvent(new CustomEvent('portfolio:web-vitals', { detail: metric }));
}
export default function App({ Component, pageProps }: AppProps) {
  useReportWebVitals(reportVitals);
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </MotionConfig>
  );
}
