import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface CardProps {
    title: string;
    description: string;
    href?: string;
    icon?: React.ReactNode;
    image?: string;
    className?: string;
    variant?: 'default' | 'service' | 'insight' | 'gradient';
}

/**
 * Card Component
 * 
 * Styles:
 * - Default: rounded-[5px], bg-[#1a1a1a]
 * - Gradient: bg-gradient-to-r from-[#2a2a2a] to-black
 * - Service: With image and dark overlay
 */
export function Card({
    title,
    description,
    href,
    icon,
    image,
    className,
    variant = 'default',
}: CardProps) {
    const content = (
        <div
            className={cn(
                'group relative overflow-hidden rounded-[5px] transition-all duration-300',
                variant === 'default' && 'bg-[#1A1A1A] hover:bg-[#252525]',
                variant === 'service' && 'bg-[#1A1A1A] hover:bg-[#252525]',
                variant === 'insight' && 'bg-[#1A1A1A] hover:bg-[#252525] border border-white/10',
                variant === 'gradient' && 'bg-gradient-to-r from-[#2a2a2a] to-black',
                className
            )}
        >
            {/* Image */}
            {image && (
                <div className="aspect-video w-full overflow-hidden rounded-[5px]">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col h-full">
                {/* Icon */}
                {icon && (
                    <div className="mb-6 inline-flex rounded-[5px] bg-white/10 p-3 text-[#8B7355] transition-colors group-hover:bg-[#8B7355] group-hover:text-white w-fit">
                        {icon}
                    </div>
                )}

                {/* Title: font-display, white */}
                <h3 className="mb-4 font-display text-xl lg:text-2xl font-medium text-white">
                    {title}
                </h3>

                {/* Description: #A7A7A7 */}
                <p className="mb-6 font-body text-base text-[#A7A7A7] line-clamp-3 flex-grow">
                    {description}
                </p>

                {/* Link indicator */}
                {href && (
                    <div className="flex items-center gap-2 text-white font-semibold text-base tracking-[-0.03em] transition-all group-hover:text-[#8B7355] group-hover:gap-3 mt-auto">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                )}
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }

    return content;
}
