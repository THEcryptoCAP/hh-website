import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ArrowRight } from 'lucide-react';

export interface NumberedItemProps {
    number: string | number;
    title: string;
    description: string;
    href?: string;
    linkText?: string;
    className?: string;
    size?: 'sm' | 'lg';
}

/**
 * NumberedItem Component
 * 
 * Used for services sections with pattern: 01. 02. 03.
 * 
 * Typography:
 * - Number: 96px (lg) or 32px (sm), font-weight: 500, letter-spacing: -0.01em
 * - Title: 40px, font-weight: 500, letter-spacing: -0.01em
 * - Description: 24px, font-weight: 400, color: #A7A7A7
 * - Link: 16px, font-weight: 600, letter-spacing: -0.03em
 */
export function NumberedItem({
    number,
    title,
    description,
    href,
    linkText,
    className,
    size = 'lg',
}: NumberedItemProps) {
    // Format number to always have 2 digits with period
    const formattedNumber = typeof number === 'number' 
        ? `${number.toString().padStart(2, '0')}.`
        : number;

    return (
        <div className={cn('space-y-4', className)}>
            {/* Number */}
            <span
                className={cn(
                    'font-display font-medium tracking-[-0.01em] text-white block',
                    size === 'lg' && 'text-6xl lg:text-[96px] leading-[1.2]',
                    size === 'sm' && 'text-2xl lg:text-[32px] leading-[1.2]'
                )}
            >
                {formattedNumber}
            </span>

            {/* Title */}
            <h3 className="font-display text-2xl lg:text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-white">
                {title}
            </h3>

            {/* Description */}
            <p className="font-body text-lg lg:text-2xl font-normal leading-normal text-[#A7A7A7]">
                {description}
            </p>

            {/* Link (optional) */}
            {href && linkText && (
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-base font-semibold tracking-[-0.03em] text-white hover:text-[#8B7355] transition-colors group mt-4"
                >
                    <span>{linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            )}
        </div>
    );
}

/**
 * NumberedGrid Component
 * A grid layout for multiple NumberedItems
 */
export interface NumberedGridItem {
    title: string;
    description: string;
    href?: string;
    linkText?: string;
}

export interface NumberedGridProps {
    items: NumberedGridItem[];
    columns?: 2 | 3 | 4;
    size?: 'sm' | 'lg';
    className?: string;
}

export function NumberedGrid({
    items,
    columns = 3,
    size = 'lg',
    className,
}: NumberedGridProps) {
    return (
        <div
            className={cn(
                'grid gap-8 lg:gap-12',
                columns === 2 && 'grid-cols-1 md:grid-cols-2',
                columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                columns === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                className
            )}
        >
            {items.map((item, index) => (
                <NumberedItem
                    key={index}
                    number={index + 1}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    linkText={item.linkText}
                    size={size}
                />
            ))}
        </div>
    );
}
