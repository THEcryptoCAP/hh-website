'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitCohortApplication } from '@/lib/actions';
import { sendCohortApplicationEmail } from '@/lib/emailjs/config';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Background images for each step (using local cohort images)
const stepBackgrounds = [
    '/assets/images/cohort/cohort-1.png',
    '/assets/images/cohort/cohort-2.png',
    '/assets/images/cohort/cohort-3.png',
    '/assets/images/cohort/cohort-4.png',
    '/assets/images/cohort/cohort-5.png',
];

const stepInfo = [
    { number: 1, title: 'Section 1', subtitle: 'Your Coordinates' },
    { number: 2, title: 'Section 2', subtitle: 'Your Mountain Path' },
    { number: 3, title: 'Section 3', subtitle: 'The Climb Ahead' },
    { number: 4, title: 'Section 4', subtitle: 'Proof of Life' },
    { number: 5, title: 'Section 5', subtitle: 'Welcome to the Summit' },
];

// Validation Schema - Updated to match new form fields
const applicationSchema = z.object({
    // Step 1: Your Coordinates
    full_name: z.string().min(2, 'Name is required'),
    date_of_birth: z.string().min(1, 'Date of birth is required'),
    email: z.string().email('Valid email required'),
    linkedin_url: z.string().refine((val) => {
        if (!val || val === '') return true;
        try {
            new URL(val);
            return val.includes('linkedin.com');
        } catch {
            return false;
        }
    }, 'Valid LinkedIn URL required'),
    phone: z.string().min(10, 'Valid contact number required'),
    whatsapp: z.string().optional(),
    pan: z.string().optional(),
    role: z.string().min(2, 'Required'),
    building_description: z.string().min(5, 'Required').max(100, 'Max 20 words'),

    // Step 2: Your Mountain Path
    life_want: z.string().min(20, 'Min 100 words required'),
    diary_today: z.string().min(100, 'Min 200 words required'),
    tattoo_words: z.string().min(5, 'Required'),
    book_about_life: z.string().min(100, 'Min 200 words required'),
    truth_learned: z.string().min(20, 'Min 50 words required'),

    // Step 3: The Climb Ahead
    cohort_expectations: z.string().min(1, 'Required'),
    time_commitment: z.string().min(1, 'Required'),
    obstacles: z.string().min(10, 'Required'),
    handle_criticism: z.string().min(50, 'Min 100 words required'),
    resilience_meaning: z.string().min(10, 'Required'),

    // Step 4: Proof of Life
    website_url: z.string().optional(),
    pitch_deck_file: z.any().optional(),
    work_ethic_inspiration: z.string().min(10, 'Required'),

    // Step 5: Welcome to the Summit
    understands_fee: z.boolean().refine((val) => val === true, 'Required'),
    signature: z.string().min(2, 'Required'),
    payment_preference: z.enum(['pay_now', 'reserve', 'invoice']),
});

type ApplicationData = z.infer<typeof applicationSchema>;

// Step Progress Indicator Component
function StepIndicator({ currentStep }: { currentStep: number }) {
    return (
        <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all
                        ${step <= currentStep ? 'border-white bg-white/10 text-white' : 'border-white/30 text-white/30'}`}>
                        {step}
                    </div>
                    {index < 4 && (
                        <div className={`w-16 md:w-24 h-[2px] transition-all ${step < currentStep ? 'bg-white' : 'bg-white/30'}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

// Simple Input - label as placeholder inside
function FormInput({ 
    label, 
    error, 
    wordLimit,
    className = '',
    ...props 
}: { 
    label: string; 
    error?: string;
    wordLimit?: string;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={`w-full ${className}`}>
            <div className="relative">
                <input
                    {...props}
                    placeholder={label}
                    className="w-full h-[44px] px-4 bg-transparent border border-white/25 rounded-[8px] text-white text-sm placeholder-[#d9d9d9]/50 focus:border-white/50 focus:outline-none"
                />
                {wordLimit && (
                    <span className="absolute right-3 bottom-3 text-xs text-[#575757]">{wordLimit}</span>
                )}
            </div>
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    );
}

// Simple Textarea - label as placeholder inside
function FormTextarea({ 
    label, 
    error, 
    wordLimit,
    rows = 4,
    className = '',
    ...props 
}: { 
    label: string; 
    error?: string;
    wordLimit?: string;
    rows?: number;
    className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className={`w-full ${className}`}>
            <div className="relative">
                <textarea
                    {...props}
                    rows={rows}
                    placeholder={label}
                    className="w-full px-4 py-3 bg-transparent border border-white/25 rounded-[8px] text-white text-sm placeholder-[#d9d9d9]/50 focus:border-white/50 focus:outline-none resize-none"
                />
                {wordLimit && (
                    <span className="absolute right-3 bottom-2 text-xs text-[#575757]">{wordLimit}</span>
                )}
            </div>
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    );
}

export function ApplicationForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        setValue,
        formState: { errors },
    } = useForm<ApplicationData>({
        resolver: zodResolver(applicationSchema) as any,
        defaultValues: {
            understands_fee: false,
            payment_preference: 'pay_now',
        },
    });

    const paymentPreference = watch('payment_preference');

    const nextStep = async () => {
        let fieldsToValidate: (keyof ApplicationData)[] = [];

        switch (currentStep) {
            case 1:
                fieldsToValidate = ['full_name', 'date_of_birth', 'email', 'phone', 'role', 'building_description'];
                break;
            case 2:
                fieldsToValidate = ['life_want', 'diary_today', 'tattoo_words', 'book_about_life', 'truth_learned'];
                break;
            case 3:
                fieldsToValidate = ['cohort_expectations', 'time_commitment', 'obstacles', 'handle_criticism', 'resilience_meaning'];
                break;
            case 4:
                fieldsToValidate = ['work_ethic_inspiration'];
                break;
        }

        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, 5));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                setError('File size must be less than 10MB');
                return;
            }
            setUploadedFileName(file.name);
            setValue('pitch_deck_file', file);
        }
    };

    const onSubmit = async (data: ApplicationData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Transform data to match the expected format
            const submissionData = {
                full_name: data.full_name,
                email: data.email,
                phone: data.phone,
                linkedin_url: data.linkedin_url || '',
                current_role: data.role,
                company: 'N/A',
                years_experience: 0,
                industry: 'N/A',
                project_description: data.building_description,
                stage: 'ideation' as const,
                website_url: data.website_url || '',
                pitch_deck_url: '',
                inspiration: data.work_ethic_inspiration,
                understands_fee: data.understands_fee,
                signature_name: data.signature,
                payment_preference: data.payment_preference,
                requires_gst: data.payment_preference === 'invoice',
            };

            const dbResult = await submitCohortApplication(submissionData);
            if (!dbResult.success) {
                throw new Error(dbResult.error || 'Failed to submit application');
            }

            await sendCohortApplicationEmail({
                full_name: data.full_name,
                email: data.email,
                application_id: dbResult.data?.id || 'unknown',
                cohort_name: 'Mountain Cohort 01',
            });

            router.push('/cohort/confirmation');

        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'Submission failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentStepInfo = stepInfo[currentStep - 1];

    return (
        <div className="min-h-screen bg-black relative">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <div 
                            className="w-full h-full bg-cover bg-top bg-no-repeat"
                            style={{ backgroundImage: `url('${stepBackgrounds[currentStep - 1]}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-8">
                {/* Spacer to push content down */}
                <div className="flex-shrink-0 h-[18vh] md:h-[22vh]" />
                
                {/* Header Section with Title */}
                <div className="text-center w-full flex flex-col items-center">
                    <motion.div
                        key={`title-${currentStep}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-[-0.01em] leading-[1.15] italic">
                            {currentStepInfo.title}
                        </h1>
                        <p className="text-base md:text-lg text-white/70 mt-2">
                            {currentStepInfo.subtitle}
                        </p>
                    </motion.div>
                </div>
                
                {/* Step Indicator - WITH EXPLICIT INLINE STYLE MARGINS */}
                <div className="w-full flex justify-center" style={{ marginTop: '96px', marginBottom: '180px' }}>
                    <StepIndicator currentStep={currentStep} />
                </div>

                {/* Form Container */}
                <div className="w-full max-w-[800px] pb-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        {/* Glass Card with gradient border */}
                        <div className="relative rounded-[20px]" style={{ padding: '2px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), rgba(255,255,255,0.1))' }}>
                            <div className="w-full backdrop-blur-[15px] rounded-[18px]" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '32px 48px' }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Step 1: Your Coordinates */}
                                        {currentStep === 1 && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                <FormInput
                                                    label="Your Name"
                                                    {...register('full_name')}
                                                    error={errors.full_name?.message}
                                                />
                                                <FormInput
                                                    label="Date of Birth"
                                                    type="date"
                                                    {...register('date_of_birth')}
                                                    error={errors.date_of_birth?.message}
                                                />
                                                <FormInput
                                                    label="Email Address"
                                                    type="email"
                                                    {...register('email')}
                                                    error={errors.email?.message}
                                                />
                                                <FormInput
                                                    label="LinkedIn Profile URL"
                                                    {...register('linkedin_url')}
                                                    error={errors.linkedin_url?.message}
                                                />
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                                <FormInput
                                                    label="Contact Number"
                                                    {...register('phone')}
                                                    error={errors.phone?.message}
                                                />
                                                <FormInput
                                                    label="WhatsApp (if different)"
                                                    {...register('whatsapp')}
                                                />
                                            </div>
                                            <FormInput
                                                label="PAN (optional for students)"
                                                {...register('pan')}
                                            />
                                            <FormInput
                                                label="Role (Founder / Industry Specialist / Business Owner / Student / Other)"
                                                {...register('role')}
                                                error={errors.role?.message}
                                            />
                                            <FormTextarea
                                                label="What are you Building, Learning or Leading?..."
                                                rows={4}
                                                wordLimit="20 words"
                                                {...register('building_description')}
                                                error={errors.building_description?.message}
                                            />
                                        </div>
                                    )}

                                    {/* Step 2: Your Mountain Path */}
                                    {currentStep === 2 && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <FormTextarea
                                                label="What do you truly want in life?"
                                                rows={6}
                                                wordLimit="(100 words)"
                                                {...register('life_want')}
                                                error={errors.life_want?.message}
                                            />
                                            <FormTextarea
                                                label="Write a detailed diary of today."
                                                rows={8}
                                                wordLimit="(200-300 words)"
                                                {...register('diary_today')}
                                                error={errors.diary_today?.message}
                                            />
                                            <FormInput
                                                label="If you could tattoo five words on your skin forever, what would they be?..."
                                                {...register('tattoo_words')}
                                                error={errors.tattoo_words?.message}
                                            />
                                            <FormTextarea
                                                label="Name the book about your life and write its opening page."
                                                rows={8}
                                                wordLimit="(200-300 words)"
                                                {...register('book_about_life')}
                                                error={errors.book_about_life?.message}
                                            />
                                            <FormTextarea
                                                label="One truth you've learned the hard way"
                                                rows={4}
                                                wordLimit="(50 words)"
                                                {...register('truth_learned')}
                                                error={errors.truth_learned?.message}
                                            />
                                        </div>
                                    )}

                                    {/* Step 3: The Climb Ahead */}
                                    {currentStep === 3 && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <FormInput
                                                label="What do you expect from this one week cohort? (Select upto three)"
                                                {...register('cohort_expectations')}
                                                error={errors.cohort_expectations?.message}
                                            />
                                            <FormInput
                                                label="How much time can you commit each day?"
                                                {...register('time_commitment')}
                                                error={errors.time_commitment?.message}
                                            />
                                            <FormInput
                                                label="What's getting in the way of your progress right now?"
                                                {...register('obstacles')}
                                                error={errors.obstacles?.message}
                                            />
                                            <FormTextarea
                                                label="How do you handle criticism or failure?"
                                                rows={5}
                                                wordLimit="(100 words)"
                                                {...register('handle_criticism')}
                                                error={errors.handle_criticism?.message}
                                            />
                                            <FormInput
                                                label="What does resilience mean to you?"
                                                {...register('resilience_meaning')}
                                                error={errors.resilience_meaning?.message}
                                            />
                                        </div>
                                    )}

                                    {/* Step 4: Proof of Life */}
                                    {currentStep === 4 && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <FormInput
                                                label="Website or Portfolio URL"
                                                {...register('website_url')}
                                                error={errors.website_url?.message}
                                            />
                                            
                                            {/* File Upload */}
                                            <div className="w-full">
                                                <div 
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="w-full h-[44px] bg-transparent border border-white/25 rounded-[8px] cursor-pointer hover:border-white/50 transition-colors flex items-center"
                                                >
                                                    <div className="px-4 w-full flex items-center justify-between">
                                                        <span className="text-sm text-[#d9d9d9]/50">
                                                            {uploadedFileName || 'Upload one-pager/pitch deck (PDF, Maximum 10MB)'}
                                                        </span>
                                                        <div className="w-7 h-7 rounded border border-white/25 flex items-center justify-center">
                                                            <Upload className="w-3.5 h-3.5 text-white/50" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept=".pdf"
                                                    onChange={handleFileUpload}
                                                    className="hidden"
                                                />
                                            </div>

                                            <FormInput
                                                label="Who or what inspires your work ethic?"
                                                {...register('work_ethic_inspiration')}
                                                error={errors.work_ethic_inspiration?.message}
                                            />
                                        </div>
                                    )}

                                    {/* Step 5: Welcome to the Summit */}
                                    {currentStep === 5 && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                                            {/* Fee Acknowledgment */}
                                            <div className="w-full bg-transparent border border-white/25 rounded-[8px] p-3">
                                                <div className="flex items-start gap-3">
                                                    <input
                                                        type="checkbox"
                                                        id="fee_ack"
                                                        {...register('understands_fee')}
                                                        className="w-4 h-4 rounded border-2 border-white/40 bg-transparent mt-0.5 cursor-pointer accent-[#8B7355]"
                                                    />
                                                    <label htmlFor="fee_ack" className="text-sm leading-relaxed cursor-pointer text-[#d9d9d9]/60">
                                                        &quot;I understand the cohort fee is <span className="text-white font-medium">Rs.6,999</span> (GST applicable) and am ready to commit.&quot;
                                                    </label>
                                                </div>
                                            </div>
                                            {errors.understands_fee && (
                                                <p className="text-red-400 text-xs ml-1">{errors.understands_fee.message}</p>
                                            )}

                                            {/* Signature */}
                                            <FormInput
                                                label="Signature (Type your name + Date)"
                                                {...register('signature')}
                                                error={errors.signature?.message}
                                            />

                                            {/* Payment Preference */}
                                            <div className="w-full">
                                                <label className="block text-base text-[#d9d9d9]/60 mb-3">Payment Preference</label>
                                                <div className="flex flex-wrap gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('payment_preference', 'pay_now')}
                                                        className={`px-6 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                                                            paymentPreference === 'pay_now'
                                                                ? 'bg-white text-[#010101]'
                                                                : 'bg-transparent border border-white/20 text-white/80 hover:border-white/40'
                                                        }`}
                                                    >
                                                        Pay Now
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('payment_preference', 'reserve')}
                                                        className={`px-6 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                                                            paymentPreference === 'reserve'
                                                                ? 'bg-white text-[#010101]'
                                                                : 'bg-transparent border border-white/20 text-white/80 hover:border-white/40'
                                                        }`}
                                                    >
                                                        Reserve
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('payment_preference', 'invoice')}
                                                        className={`px-6 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                                                            paymentPreference === 'invoice'
                                                                ? 'bg-white text-[#010101]'
                                                                : 'bg-transparent border border-white/20 text-white/80 hover:border-white/40'
                                                        }`}
                                                    >
                                                        Invoice with GST
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {error && (
                                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', color: '#f87171', fontSize: '14px' }}>
                                    {error}
                                </div>
                            )}
                            </div>
                        </div>

                        {/* Navigation Buttons - Smaller with margin below */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '32px', marginBottom: '60px' }}>
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    disabled={isSubmitting}
                                    style={{
                                        width: '180px',
                                        height: '50px',
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        border: 'none',
                                        color: '#010101',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        letterSpacing: '-0.02em',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    ← Back
                                </button>
                            )}

                            {currentStep < 5 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    style={{
                                        width: '180px',
                                        height: '50px',
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        border: 'none',
                                        color: '#010101',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        letterSpacing: '-0.02em',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    Next →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '180px',
                                        height: '50px',
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        border: 'none',
                                        color: '#010101',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        letterSpacing: '-0.02em',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: isSubmitting ? 0.5 : 1,
                                    }}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit →'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
