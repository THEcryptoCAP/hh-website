'use server';

import { createClient } from '@/lib/supabase/server';
import { CohortApplication, ContactMessage } from '@/lib/supabase/queries';

/**
 * Create a new contact message
 */
export async function submitContactMessage(
    messageData: Omit<ContactMessage, 'id' | 'status' | 'created_at'>
): Promise<{ success: boolean; data?: ContactMessage; error?: string }> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('contact_messages')
        .insert(messageData)
        .select()
        .single();

    if (error) {
        console.error('Error creating contact message:', error);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

/**
 * Create a new cohort application
 */
export async function submitCohortApplication(
    applicationData: Partial<CohortApplication>
): Promise<{ success: boolean; data?: CohortApplication; error?: string }> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('cohort_applications')
        .insert(applicationData)
        .select()
        .single();

    if (error) {
        console.error('Error creating cohort application:', error);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}
