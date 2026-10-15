import { useRef, type ReactNode } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export function MovingBorder({
  children,
  duration = 7000
}: {
  children: ReactNode;
  duration?: number;
}) {
  const reduced = useMotionPreference();
  const path = useRef<SVGRectElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useAnimationFrame((time) => {
    if (reduced || !path.current) return;
    const length = path.current.getTotalLength();
    if (!length) return;
    const point = path.current.getPointAtLength(((time % duration) / duration) * length);
    x.set(point.x);
    y.set(point.y);
  });
  const transform = useMotionTemplate`translate(${x}px, ${y}px) translate(-50%, -50%)`;
  if (reduced) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
      data-testid="moving-border">
      <svg className="absolute size-full" preserveAspectRatio="none">
        <rect ref={path} x="1" y="1" width="98%" height="96%" rx="8" fill="none" />
      </svg>
      <motion.div className="absolute top-0 left-0" style={{ transform }}>
        {children}
      </motion.div>
    </div>
  );
}
