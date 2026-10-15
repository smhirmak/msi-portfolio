import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { Project } from '@/data/constants';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export const HoverEffect = ({ items, className }: { items: Project[]; className?: string }) => {
  const grid = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const activeCard = useRef<number | null>(null);
  const [highlight, setHighlight] = useState({ x: 0, y: 0, width: 0, height: 0, visible: false });
  const reduced = useMotionPreference();
  const updateHighlight = useCallback((index: number) => {
    const container = grid.current;
    const card = cards.current[index];
    if (!container || !card) return;
    const origin = container.getBoundingClientRect();
    const bounds = card.getBoundingClientRect();
    setHighlight({
      x: bounds.left - origin.left,
      y: bounds.top - origin.top,
      width: bounds.width,
      height: bounds.height,
      visible: true
    });
  }, []);

  useEffect(() => {
    if (reduced) {
      setHighlight((current) => ({ ...current, visible: false }));
      return;
    }
    const update = () => {
      if (activeCard.current !== null) updateHighlight(activeCard.current);
    };
    update();
    const observer = new ResizeObserver(update);
    if (grid.current) observer.observe(grid.current);
    cards.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, [items, reduced, updateHighlight]);

  return (
    <div
      ref={grid}
      onMouseLeave={() => {
        activeCard.current = null;
        setHighlight((current) => ({ ...current, visible: false }));
      }}
      className={cn(
        'relative isolate grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3',
        className
      )}>
      {!reduced && (
        <motion.span
          aria-hidden="true"
          data-testid="project-hover-background"
          data-active={highlight.visible}
          className="pointer-events-none absolute top-0 left-0 z-0 rounded-3xl bg-slate-800"
          initial={false}
          animate={{
            x: highlight.x,
            y: highlight.y,
            width: highlight.width,
            height: highlight.height,
            opacity: highlight.visible ? 1 : 0
          }}
          transition={{ duration: 0.2, ease: 'easeOut', opacity: { duration: 0.15 } }}
        />
      )}
      {items.map((item, idx) => (
        <div
          key={item.title}
          ref={(node) => {
            cards.current[idx] = node;
          }}
          data-project-card={idx}
          className="relative z-10 group block h-full w-full p-2"
          onMouseEnter={() => {
            activeCard.current = idx;
            if (!reduced) updateHighlight(idx);
          }}
          onFocus={() => {
            activeCard.current = idx;
            if (!reduced) updateHighlight(idx);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              activeCard.current = null;
              setHighlight((current) => ({ ...current, visible: false }));
            }
          }}>
          <Card>
            {item.image ? (
              <Image
                className={cn(
                  'w-full h-[180px] bg-white rounded-lg object-cover shadow-lg',
                  item.imageClassName
                )}
                src={item.image}
                alt={item.title}
                width={600}
                height={360}
                sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
              />
            ) : (
              <div
                aria-hidden="true"
                className="w-full h-[180px] rounded-lg border border-slate-700 bg-linear-to-br from-slate-800 via-slate-900 to-red-950 flex items-center justify-center p-6 text-center text-2xl font-semibold text-neutral-100">
                {item.coverLabel || item.title}
              </div>
            )}
            <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider">
              {item.category}
            </p>
            <div className="w-full flex flex-wrap gap-2 mt-1 items-center">
              {item.tags.map((tag) => (
                <span
                  className="text-xs font-medium text-neutral-200 bg-neutral-800 py-0.5 px-2 rounded-lg"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.links && item.links.length > 0 && (
              <div className="flex w-full flex-wrap justify-end mt-auto pt-6 gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    className="button-primary flex-1 text-center"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label}: ${item.title}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full overflow-hidden bg-card border border-slate-700 group-hover:border-slate-500 group-focus-within:border-slate-500 relative z-20',
        className
      )}>
      <div className="relative z-50 h-full">
        <div className="flex h-full flex-col items-start p-5">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode | string;
}) => {
  return (
    <h3 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>{children}</h3>
  );
};
export const CardDescription = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      title={children as string}
      className={cn('mt-4 text-zinc-300 leading-relaxed text-sm', className)}>
      {children}
    </p>
  );
};
