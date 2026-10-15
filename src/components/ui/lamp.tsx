import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export function LampContainer({ children }: { children: ReactNode }) {
  const reduced = useMotionPreference();
  const transition = { duration: reduced ? 0 : 0.8, ease: 'easeInOut' as const };
  const viewport = { once: true, amount: 0.25 };
  return (
    <div
      key={reduced ? 'static' : 'animated'}
      className="relative isolate mb-6 overflow-hidden rounded-lg px-2 pt-5 pb-5 sm:px-4"
      data-testid="project-lamp">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={false}
          whileInView={{ scaleX: 1, opacity: 0.7 }}
          viewport={viewport}
          transition={transition}
          className="absolute top-0 left-1/2 h-28 w-full max-w-xl -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          initial={reduced ? false : { width: '20%', opacity: 0.25 }}
          whileInView={{ width: '48%', opacity: 0.8 }}
          viewport={viewport}
          transition={transition}
          style={{
            backgroundImage:
              'conic-gradient(from 70deg at center top, #06b6d4, transparent 50%, transparent)'
          }}
          className="absolute top-0 right-1/2 h-32 max-w-lg">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-bg [mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="absolute inset-y-0 left-0 w-24 bg-bg [mask-image:linear-gradient(to_right,black,transparent)] sm:w-40" />
        </motion.div>
        <motion.div
          initial={reduced ? false : { width: '20%', opacity: 0.25 }}
          whileInView={{ width: '48%', opacity: 0.8 }}
          viewport={viewport}
          transition={transition}
          style={{
            backgroundImage:
              'conic-gradient(from 290deg at center top, transparent, transparent 50%, #06b6d4)'
          }}
          className="absolute top-0 left-1/2 h-32 max-w-lg">
          <div className="absolute inset-y-0 right-0 w-24 bg-bg [mask-image:linear-gradient(to_left,black,transparent)] sm:w-40" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-bg [mask-image:linear-gradient(to_top,black,transparent)]" />
        </motion.div>
        <div className="absolute inset-x-0 top-8 h-36 bg-linear-to-b from-transparent to-bg" />
        <motion.div
          initial={reduced ? false : { width: '20%', opacity: 0.4 }}
          whileInView={{ width: '48%', opacity: 0.85 }}
          viewport={viewport}
          transition={transition}
          className="absolute top-0 left-1/2 h-px max-w-lg -translate-x-1/2 bg-cyan-400 shadow-[0_0_16px_#22d3ee]"
        />
      </div>
      <motion.div
        className="text-center"
        initial={reduced ? false : { y: 20 }}
        whileInView={{ y: 0 }}
        viewport={viewport}
        transition={transition}>
        {children}
      </motion.div>
    </div>
  );
}
