'use client';
import type { SkillGroup } from '@/data/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    reduced
  }: {
    card: SkillGroup;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    reduced: boolean;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-lg relative border-2 border-slate-700 overflow-hidden h-fit w-full transition-all duration-300 ease-out',
        hovered === index && 'border-slate-500',
        !reduced && hovered !== null && hovered !== index && 'blur-xs scale-[0.98]'
      )}>
      <div
        className={cn(
          'flex flex-col p-5 transition-opacity duration-300'
          // hovered === index ? "opacity-100" : "opacity-0"
        )}>
        <h3 className="text-xl font-medium text-text-primary">{card.title}</h3>
        <div className="w-full flex flex-wrap mt-5 gap-2">
          {card.skills.map((item) => (
            <div
              className="flex items-center max-w-full gap-2 text-sm text-neutral-200 border border-slate-600 rounded-lg py-2 px-3 font-normal transition-colors hover:border-slate-400"
              key={item.name}>
              {item.image && (
                <Image
                  className={cn('size-6 shrink-0 object-contain', item.imageClassName)}
                  src={item.image}
                  alt=""
                  width={24}
                  height={24}
                />
              )}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
);

Card.displayName = 'Card';

export function FocusCards({ cards }: { cards: SkillGroup[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = useMotionPreference();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          reduced={reduced}
        />
      ))}
    </div>
  );
}
