import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

/**
 * Button Component
 * 
 * Primary: rounded-[3px] bg-[#8b7355] - Brown accent button
 * Outline: rounded-[3px] border border-white - Ghost border button
 * 
 * Typography: Manrope, font-weight: 600, letter-spacing: -0.03em
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center',
                    'font-body font-semibold',
                    'tracking-[-0.03em]',
                    'transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'rounded-[3px]',

                    // Variants
                    variant === 'primary' && [
                        'bg-[#8B7355] text-white',
                        'hover:bg-[#9D8463]',
                        'active:bg-[#7A6449]',
                    ],
                    variant === 'secondary' && [
                        'bg-white text-black',
                        'hover:bg-gray-100',
                    ],
                    variant === 'outline' && [
                        'bg-transparent text-white',
                        'border border-white',
                        'hover:bg-white hover:text-black',
                    ],
                    variant === 'ghost' && [
                        'bg-transparent text-white',
                        'hover:bg-white/10',
                    ],

                    // Sizes - adjusted for better proportions matching design
                    size === 'sm' && 'h-8 sm:h-9 px-4 sm:px-5 text-xs sm:text-sm',
                    size === 'md' && 'h-10 sm:h-[44px] px-5 sm:px-6 text-xs sm:text-sm',
                    size === 'lg' && 'h-12 sm:h-[50px] px-6 sm:px-8 text-sm min-w-[140px] sm:min-w-[160px]',

                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
