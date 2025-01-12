"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative border-2 border-slate-700 overflow-hidden h-fit w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
                card.title === 'Frontend' && 'md:row-span-2'
            )}
        >
            <div
                className={cn(
                    "flex flex-col py-8 px-4 transition-opacity duration-300",
                    // hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
                <div className='w-full flex flex-wrap mt-7 gap-y-4 gap-x-2'>
                    {card?.skills?.map((item: { image: string; name: string }, i: number) => (
                        <div className='flex items-center mb-4 gap-2 justify-center text-sm md:text-base duration-150 text-neutral-400 border border-neutral-400 rounded-lg py-2 px-3 md:py-3 md:px-4 font-normal transition-all hover:shadow-lg hover:border-slate-600' key={i}>
                            <img className='size-6' src={item.image} alt={item.name} />
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

type Card = {
    title: string;
    skills: { name: string; image: string; }[];
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
