import React from 'react';
import '../styles/MetricItem.css';

interface MetricItemProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

const MetricItem: React.FC<MetricItemProps> = ({ icon, label, value }) => {
    return (
        <div className="metric-item">
            <div className="metric-icon">{icon}</div>
            <div className="metric-content">
                <p className="metric-label">{label}</p>
                <p className="metric-value">{value}</p>
            </div>
        </div>
    );
};

export default MetricItem;
