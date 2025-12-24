import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration
 * Handles all email sending functionality for the application
 */

// Initialize EmailJS with public key
if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}

export interface CohortApplicationEmailData {
    full_name: string;
    email: string;
    application_id: string;
    cohort_name: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail(
    data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone || 'Not provided',
            subject: data.subject || 'Contact Form Submission',
            message: data.message,
            to_name: 'Hanshills & Co.',
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
            templateParams
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Failed to send email' };
        }
    } catch (error) {
        console.error('Error sending contact email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

/**
 * Send cohort application confirmation email to applicant
 */
export async function sendCohortApplicationEmail(
    data: CohortApplicationEmailData
): Promise<{ success: boolean; error?: string }> {
    try {
        const templateParams = {
            to_name: data.full_name,
            to_email: data.email,
            application_id: data.application_id,
            cohort_name: data.cohort_name,
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COHORT!,
            templateParams
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Failed to send email' };
        }
    } catch (error) {
        console.error('Error sending cohort application email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

/**
 * Send welcome email after successful payment
 */
export async function sendWelcomeEmail(
    applicantName: string,
    applicantEmail: string
): Promise<{ success: boolean; error?: string }> {
    try {
        const templateParams = {
            to_name: applicantName,
            to_email: applicantEmail,
            // Template should include the content from instructions.md:
            // "🏔 You Are Now a Summit Holder. Welcome to The Hanshills & Co. Mountain Cohort..."
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_WELCOME!,
            templateParams
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Failed to send welcome email' };
        }
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

/**
 * Send notification to admin about new contact message
 */
export async function sendAdminNotification(
    type: 'contact' | 'cohort',
    data: any
): Promise<{ success: boolean; error?: string }> {
    try {
        const templateParams = {
            notification_type: type,
            data: JSON.stringify(data, null, 2),
            timestamp: new Date().toISOString(),
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            'admin_notification_template', // You'll need to create this template
            templateParams
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Failed to send admin notification' };
        }
    } catch (error) {
        console.error('Error sending admin notification:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}
