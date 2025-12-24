import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface GradientOverlayProps {
    variant?: 'fadeBottom' | 'fadeTop' | 'hero' | 'card';
    className?: string;
    children?: React.ReactNode;
}

/**
 * GradientOverlay Component
 * 
 * Gradient styles:
 * - fadeBottom: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)
 * - fadeTop: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)
 * - hero: More complex gradient with multiple stops
 * - card: linear-gradient(90deg, #2a2a2a 0%, #000000 100%)
 */
export function GradientOverlay({
    variant = 'fadeBottom',
    className,
    children,
}: GradientOverlayProps) {
    return (
        <div
            className={cn(
                'absolute inset-0 pointer-events-none',
                // Gradient variants
                variant === 'fadeBottom' && 'bg-gradient-to-b from-transparent to-black',
                variant === 'fadeTop' && 'bg-gradient-to-b from-black to-transparent',
                variant === 'hero' && 'bg-gradient-to-b from-transparent via-black/70 to-black',
                variant === 'card' && 'bg-gradient-to-r from-[#2a2a2a] to-black',
                className
            )}
        >
            {children}
        </div>
    );
}

/**
 * ImageWithGradient Component
 * Combines an image with a gradient overlay
 */
export interface ImageWithGradientProps {
    src: string;
    alt?: string;
    gradientVariant?: GradientOverlayProps['variant'];
    className?: string;
    imageClassName?: string;
    children?: React.ReactNode;
}

export function ImageWithGradient({
    src,
    alt = '',
    gradientVariant = 'fadeBottom',
    className,
    imageClassName,
    children,
}: ImageWithGradientProps) {
    return (
        <div className={cn('relative overflow-hidden', className)}>
            <img
                src={src}
                alt={alt}
                className={cn('w-full h-full object-cover', imageClassName)}
            />
            <GradientOverlay variant={gradientVariant} />
            {children}
        </div>
    );
}
