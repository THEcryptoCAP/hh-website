'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    once?: boolean;
}

/**
 * Fade in animation component with optional directional slide
 */
export function FadeIn({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.6,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const directionOffset = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {},
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    opacity: 0,
                    ...directionOffset[direction],
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                },
            }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Premium easing curve
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

/**
 * Container that staggers the animation of its children
 */
export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Item to be used within StaggerContainer
 */
export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

interface ScaleInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Scale in animation for elements
 */
export function ScaleIn({ children, className = '', delay = 0 }: ScaleInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    offset?: number;
}

/**
 * Simple parallax scroll effect
 */
export function Parallax({ children, className = '', offset = 50 }: ParallaxProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ y: 0 }}
            animate={isInView ? { y: -offset } : { y: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.div>
    );
}
