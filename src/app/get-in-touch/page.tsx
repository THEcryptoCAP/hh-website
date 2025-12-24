'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { sendContactEmail } from '@/lib/emailjs/config';
import { submitContactMessage } from '@/lib/actions';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function GetInTouchPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Save to Supabase
            const dbResult = await submitContactMessage({
                ...data,
                phone: null,
                subject: null,
            });
            if (!dbResult.success) {
                throw new Error(dbResult.error || 'Failed to save message');
            }

            // Send email via EmailJS
            const emailResult = await sendContactEmail(data);
            if (!emailResult.success) {
                console.error('Email sending failed:', emailResult.error);
            }

            setIsSuccess(true);
            reset();

            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Context */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/hero/contact-hero.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>

                <div className="z-10 w-full max-w-[1400px] px-6 lg:px-20 flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#77ffaa]/10 border border-[#77ffaa]/20 flex items-center justify-center mb-8 backdrop-blur-sm">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#77ffaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-6">
                        Message Sent
                    </h2>
                    <p className="font-body text-lg md:text-xl text-[#a7a7a7] max-w-[600px] mb-8">
                        Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="rounded-[8px] bg-[#9C8260] px-10 py-4 hover:bg-[#8A7150] transition-all duration-300"
                    >
                        <span className="font-body text-sm tracking-widest uppercase text-white font-semibold">
                            Send Another
                        </span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen w-full flex flex-col items-center">
            {/* Hero Section */}
            {/* Content is vertically centered within the hero, with navbar offset */}
            <section className="relative w-full h-[90vh] min-h-[750px] flex flex-col items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/hero/contact-hero.png"
                        alt="Contact Hero"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Gradient Fade to Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                </div>

                {/* Logo - Mountain Icon - Fixed at top like homepage */}
                <div className="absolute z-30 left-1/2 transform -translate-x-1/2" style={{ top: '120px' }}>
                    <Image
                        src="/assets/images/logos/logo.svg"
                        alt="Hanshills Logo"
                        width={80}
                        height={80}
                        className="h-[80px] w-auto"
                    />
                </div>

                {/* Hero Content - Positioned at bottom */}
                <div className="relative z-10 w-full pb-20" style={{ paddingLeft: '72px', paddingRight: '72px', marginTop: 'auto' }}>
                    <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
                        {/* Title Content */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight drop-shadow-2xl">
                                Get In Touch
                            </h1>
                            <p className="font-body text-base md:text-lg lg:text-xl text-white/90 max-w-[700px] mt-8 font-light leading-relaxed drop-shadow-lg">
                                Ready to create value together? Let's discuss how we can help you achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            {/* -mt-40 pulls the form up over the image gradient, mb-48 adds substantial gap before footer */}
            <section className="relative w-full flex flex-col items-center -mt-40 z-20 pb-32 mb-48" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
                <div className="w-full max-w-[1100px]">

                    {/* Form Outer Card */}
                    <div
                        className="w-full rounded-[40px] p-8 md:p-12 lg:p-20 flex flex-col items-center"
                        style={{
                            background: 'rgba(5, 5, 5, 0.85)', // Deep dark background
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)', // Thin white border
                            boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.9)'
                        }}
                    >
                        {/* Form Title */}
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium text-center mb-20 tracking-tight w-full" style = {{marginTop: '32px', marginBottom: '32px'}}>
                            Send Us A Message
                        </h2>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-8 p-4 rounded-[8px] bg-red-900/20 border border-red-500/20 text-red-200 text-center font-body text-sm">
                                {error}
                            </div>
                        )}

                        {/* Inner Form - Centered with max-width and explicit Gap */}
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[700px] flex flex-col items-center gap-8">

                            {/* Name Input */}
                            <div className="w-full flex flex-col items-center">
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input
                                    {...register('name')}
                                    id="name"
                                    type="text"
                                    className="w-full rounded-[8px] bg-[#0A0A0A] border border-white/20 px-6 py-5 text-white font-body text-base placeholder:text-[#666] focus:outline-none focus:border-[#8B7355] focus:bg-[#111] transition-all duration-300 h-[60px]"
                                    placeholder="Your Name"
                                />
                                {errors.name && (
                                    <p className="mt-2 text-xs text-red-400 pl-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="w-full flex flex-col items-center">
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input
                                    {...register('email')}
                                    id="email"
                                    type="email"
                                    className="w-full rounded-[8px] bg-[#0A0A0A] border border-white/20 px-6 py-5 text-white font-body text-base placeholder:text-[#666] focus:outline-none focus:border-[#8B7355] focus:bg-[#111] transition-all duration-300 h-[60px]"
                                    placeholder="Your Email"
                                />
                                {errors.email && (
                                    <p className="mt-2 text-xs text-red-400 pl-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="w-full flex flex-col items-center">
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    {...register('message')}
                                    id="message"
                                    rows={8}
                                    className="w-full rounded-[8px] bg-[#0A0A0A] border border-white/20 px-6 py-5 text-white font-body text-base placeholder:text-[#666] focus:outline-none focus:border-[#8B7355] focus:bg-[#111] transition-all duration-300 resize-none min-h-[250px]"
                                    placeholder="Your Message..."
                                />
                                {errors.message && (
                                    <p className="mt-2 text-xs text-red-400 pl-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="w-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-[8px] bg-[#8B7355] py-5 hover:bg-[#7A6448] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg h-[60px]"
                                    style = {{marginBottom: '32px'}}
                                >
                                    <span className="font-body text-sm leading-none tracking-widest uppercase text-white font-medium">
                                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </div>
    );
}