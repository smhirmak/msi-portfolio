import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

interface TimelineEntry {
  title: string;
  subTitle?: string;
  content: React.ReactNode;
}
export function Timeline({
  data,
  title,
  titleId,
  desc,
  startOffset = 0.1
}: {
  data: TimelineEntry[];
  title: string;
  titleId: string;
  desc: string;
  startOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [endOffset, setEndOffset] = useState(0.5);
  const reduced = useMotionPreference();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Keep the original midpoint finish for tall timelines, but prevent the
    // scroll range from reversing for short entries such as Education.
    const updateOffset = () =>
      setEndOffset(Math.min(0.5, startOffset + element.offsetHeight / (window.innerHeight * 2)));
    const observer = new ResizeObserver(updateOffset);
    observer.observe(element);
    window.addEventListener('resize', updateOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateOffset);
    };
  }, [startOffset]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset * 100}%`, `end ${endOffset * 100}%`]
  });
  // Grow the line itself so its gradient keeps the original shape as we scroll.
  // Percentage height also follows content changes and responsive line wrapping.
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <div ref={ref}>
      <h2 id={titleId} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-text-secondary sm:text-lg">{desc}</p>
      <div className="relative mt-8 [--timeline-axis:0.5rem] md:[--timeline-axis:12.5rem]">
        <div
          aria-hidden="true"
          data-timeline-track
          className="pointer-events-none absolute top-0 bottom-0 left-(--timeline-axis) w-0.5 -translate-x-1/2 overflow-hidden bg-linear-to-b from-transparent via-slate-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            data-timeline-progress
            className="absolute inset-x-0 top-0 w-full rounded-full bg-linear-to-t from-purple-500 via-blue-500 via-10% to-transparent"
            style={{ height: reduced ? '100%' : height, opacity: reduced ? 1 : opacity }}
          />
        </div>
        {data.map((entry) => (
          <div
            key={entry.title}
            data-timeline-entry
            className="relative grid grid-cols-[1rem_1fr] gap-x-4 pb-10 last:pb-0 md:grid-cols-[12rem_1rem_1fr] md:gap-x-0">
            <div className="sticky top-[calc(var(--header-height)+1.5rem)] hidden self-start pt-1 pr-4 text-sm font-semibold text-text-secondary md:block">
              <p>{entry.title}</p>
              {entry.subTitle != null && <p className="mt-1">{entry.subTitle}</p>}
            </div>
            <div className="sticky top-[calc(var(--header-height)+1.5rem)] z-10 self-start pt-1">
              <span
                aria-hidden="true"
                data-timeline-marker
                className="mx-auto block size-3 rounded-full border-2 border-bg bg-slate-400"
              />
            </div>
            <div className="min-w-0 md:pl-6">
              <p className="mb-4 text-sm font-semibold text-text-secondary md:hidden">
                {entry.title}
                {entry.subTitle != null && <span className="mt-1 block">{entry.subTitle}</span>}
              </p>
              {entry.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
