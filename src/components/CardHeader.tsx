import React from 'react';
import { MapPin } from 'lucide-react';
import '../styles/CardHeader.css';

interface CardHeaderProps {
    name: string;
    city: string;
    country: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ name, city, country }) => {
    return (
        <div className="card-header">
            <h2 className="practice-name">{name}</h2>
            <p className="practice-location">
                <MapPin size={14} strokeWidth={2} className="location-icon" />
                {city}, {country}
            </p>
        </div>
    );
};

export default CardHeader;
