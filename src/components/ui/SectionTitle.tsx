import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    variant?: 'default' | 'italic' | 'faded';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    subtitleClassName?: string;
}

/**
 * SectionTitle Component
 * 
 * Typography:
 * - Default: 40px, font-weight: 500, letter-spacing: -0.01em
 * - Italic variant: font-style: italic, font-weight: 300
 * - Faded: color: rgba(248, 248, 248, 0.30)
 */
export function SectionTitle({
    children,
    subtitle,
    align = 'center',
    variant = 'default',
    size = 'md',
    className,
    subtitleClassName,
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                'space-y-4',
                align === 'center' && 'text-center',
                align === 'left' && 'text-left',
                align === 'right' && 'text-right',
                className
            )}
        >
            <h2
                className={cn(
                    'font-display tracking-[-0.01em]',
                    // Sizes
                    size === 'sm' && 'text-2xl lg:text-3xl',
                    size === 'md' && 'text-3xl lg:text-[40px] leading-[1.2]',
                    size === 'lg' && 'text-4xl lg:text-5xl',
                    size === 'xl' && 'text-5xl lg:text-7xl lg:text-[96px] leading-[1.1]',
                    // Variants
                    variant === 'default' && 'font-medium text-white',
                    variant === 'italic' && 'font-light italic text-white',
                    variant === 'faded' && 'font-light italic text-white/30'
                )}
            >
                {children}
            </h2>

            {subtitle && (
                <p
                    className={cn(
                        'font-body text-2xl font-normal text-[#A7A7A7] max-w-[808px] mx-auto leading-normal',
                        align === 'left' && 'mx-0',
                        subtitleClassName
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
