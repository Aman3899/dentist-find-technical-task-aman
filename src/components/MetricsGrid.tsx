import React from 'react';
import { Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import MetricItem from './MetricItem';
import '../styles/MetricsGrid.css';

interface MetricsGridProps {
    newPatientsThisMonth: number;
    appointmentRequests: number;
    conversionRate: number;
    marketingSpend?: number;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({
    newPatientsThisMonth,
    appointmentRequests,
    conversionRate,
    marketingSpend
}) => {
    return (
        <div className="metrics-grid">
            <MetricItem
                icon={<Users size={28} strokeWidth={2} />}
                label="New Patients This Month"
                value={newPatientsThisMonth}
            />
            <MetricItem
                icon={<Calendar size={28} strokeWidth={2} />}
                label="Appointment Requests"
                value={appointmentRequests}
            />
            <MetricItem
                icon={<TrendingUp size={28} strokeWidth={2} />}
                label="Conversion Rate"
                value={`${conversionRate}%`}
            />
            {marketingSpend !== undefined && (
                <MetricItem
                    icon={<DollarSign size={28} strokeWidth={2} />}
                    label="Marketing Spend"
                    value={`$${marketingSpend.toLocaleString()}`}
                />
            )}
        </div>
    );
};

export default MetricsGrid;
