import type { PracticeSummary } from '../types/PracticeSummary';

// Mock practice data for demonstration purposes

export const practicesData: PracticeSummary[] = [
    {
        id: '1',
        name: 'Smile Dental Care',
        city: 'New York',
        country: 'USA',
        newPatientsThisMonth: 45,
        appointmentRequests: 180,
        conversionRate: 25.0,
        monthlyTrend: [32, 38, 35, 40, 42, 45],
        marketingSpend: 8500
    },
    {
        id: '2',
        name: 'Bright Smiles Dentistry',
        city: 'Los Angeles',
        country: 'USA',
        newPatientsThisMonth: 28,
        appointmentRequests: 350,
        conversionRate: 8.0,
        monthlyTrend: [35, 30, 28, 32, 29, 28],
        marketingSpend: 12000
    },
    {
        id: '3',
        name: 'Family Dental Practice',
        city: 'Chicago',
        country: 'USA',
        newPatientsThisMonth: 52,
        appointmentRequests: 310,
        conversionRate: 16.8,
        monthlyTrend: [40, 42, 45, 48, 50, 52]
    }
];
