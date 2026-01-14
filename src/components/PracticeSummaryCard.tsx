import React from 'react';
import type { PracticeSummary } from '../types/PracticeSummary';
import CardHeader from './CardHeader';
import MetricsGrid from './MetricsGrid';
import StatusIndicator from './StatusIndicator';
import TrendChart from './TrendChart';
import Recommendations from './Recommendations';
import '../styles/PracticeSummaryCard.css';

interface PracticeSummaryCardProps {
    data: PracticeSummary;
}

/**
 * PracticeSummaryCard - Main component that displays comprehensive practice metrics
 * 
 * This component is composed of smaller, reusable subcomponents:
 * - CardHeader: Practice name and location
 * - MetricsGrid: Key performance metrics
 * - StatusIndicator: Visual performance status
 * - TrendChart: 6-month trend visualization
 * - Recommendations: Actionable suggestions
 */
const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ data }) => {
    return (
        <div className="practice-card">
            <CardHeader
                name={data.name}
                city={data.city}
                country={data.country}
            />

            <div className="card-body">
                <MetricsGrid
                    newPatientsThisMonth={data.newPatientsThisMonth}
                    appointmentRequests={data.appointmentRequests}
                    conversionRate={data.conversionRate}
                    marketingSpend={data.marketingSpend}
                />

                <StatusIndicator conversionRate={data.conversionRate} />

                <TrendChart monthlyTrend={data.monthlyTrend} />

                <Recommendations conversionRate={data.conversionRate} />
            </div>
        </div>
    );
};

export default PracticeSummaryCard;
