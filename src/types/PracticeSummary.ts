// Shared TypeScript types for the Practice Summary Card
export type PracticeSummary = {
    id: string;
    name: string;
    city: string;
    country: string;
    newPatientsThisMonth: number;
    appointmentRequests: number;
    conversionRate: number;
    monthlyTrend: number[];
    marketingSpend?: number;
};

export type StatusType = 'high' | 'risk' | 'stable';

export interface StatusInfo {
    label: string;
    className: string;
}
