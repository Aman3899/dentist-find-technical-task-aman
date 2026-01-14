import React from 'react';
import type { StatusInfo } from '../types/PracticeSummary';
import '../styles/StatusIndicator.css';

interface StatusIndicatorProps {
    conversionRate: number;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ conversionRate }) => {
    const getStatus = (rate: number): StatusInfo => {
        if (rate >= 20) return { label: 'High Performer', className: 'status-high' };
        if (rate < 10) return { label: 'At Risk', className: 'status-risk' };
        return { label: 'Stable', className: 'status-stable' };
    };

    const status = getStatus(conversionRate);

    return (
        <div className="status-section">
            <div className={`status-indicator ${status.className}`}>
                <span className="status-dot"></span>
                <span className="status-label">{status.label}</span>
            </div>
        </div>
    );
};

export default StatusIndicator;
