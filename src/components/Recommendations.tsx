import React from 'react';
import '../styles/Recommendations.css';

interface RecommendationsProps {
    conversionRate: number;
}

const Recommendations: React.FC<RecommendationsProps> = ({ conversionRate }) => {
    const getRecommendations = (rate: number): string[] => {
        if (rate >= 20) {
            return [
                'Consider increasing ad budget on top-performing channels.',
                'Expand to similar markets to replicate success.'
            ];
        } else if (rate < 10) {
            return [
                'Optimize mobile landing page layout.',
                'Review appointment booking flow for friction points.'
            ];
        } else {
            return [
                'Test new marketing channels to improve conversion.',
                'Consider A/B testing appointment request forms.'
            ];
        }
    };

    const recommendations = getRecommendations(conversionRate);

    return (
        <div className="recommendations-section">
            <h3 className="section-title">Recommendations</h3>
            <ul className="recommendations-list">
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
