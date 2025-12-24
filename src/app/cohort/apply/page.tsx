import { Metadata } from 'next';
import { ApplicationForm } from '@/components/cohort/ApplicationForm';

export const metadata: Metadata = {
    title: 'Apply to Mountain Cohort | Hanshills & Co.',
    description:
        'Begin your ascent. Apply to join the exclusive Mountain Cohort for high-potential founders.',
};

export default function ApplyPage() {
    return <ApplicationForm />;
}
