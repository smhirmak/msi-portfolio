import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        github: string;
        webapp?: string;
        imageClassName?: string;
        image: string;
        tags: string[];
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                // "grid grid-cols-1 md:grid-cols-2 -translate-y-72 lg:grid-cols-3",
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-4 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <img className={`w-full h-[180px] bg-white rounded-lg object-cover shadow-lg ${item?.imageClassName}`} src={item.image} alt={item.title} />
                        <div className='w-full flex flex-wrap gap-2 mt-1 items-center'>
                            {item.tags?.map((tag: any, index) => (
                                <span className='text-xs font-medium text-primary bg-neutral-800 py-0.5 px-2 rounded-lg' key={index}>{tag}</span>
                            ))}
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <div className='flex justify-end my-3 gap-3'>
                            {item?.github && <a className='w-full text-center no-underline text-xs md:text-sm font-semibold text-text-primary py-3 px-4 rounded-md bg-red-800 hover:bg-red-700 cursor-pointer transition-all' href={item?.github} target="new">
                                View Code
                            </a>}
                            {item?.webapp && <a className='w-full text-center no-underline text-xs md:text-sm font-semibold text-text-primary py-3 px-4 rounded-md bg-red-800 hover:bg-red-700 cursor-pointer transition-all' href={item?.webapp} target="new">
                                View Live App
                            </a>}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode | string;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            title={children as string}
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
