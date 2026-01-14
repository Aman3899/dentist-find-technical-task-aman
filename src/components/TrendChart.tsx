import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/TrendChart.css';

interface TrendChartProps {
    monthlyTrend: number[];
}

const TrendChart: React.FC<TrendChartProps> = ({ monthlyTrend }) => {
    // Transform data for Recharts
    const chartData = monthlyTrend.map((value, index) => ({
        month: `M${index + 1}`,
        patients: value
    }));

    return (
        <div className="trend-section">
            <h3 className="section-title">6-Month Trend (New Patients)</h3>
            <div className="trend-chart-container">
                <ResponsiveContainer width="100%" height={100}>
                    <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 11, fill: '#6b7280' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 11, fill: '#6b7280' }}
                            axisLine={false}
                            tickLine={false}
                            width={30}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}
                            labelStyle={{ color: '#111827', fontWeight: 600 }}
                            cursor={{ fill: '#f3f4f6' }}
                        />
                        <Bar
                            dataKey="patients"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={40}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TrendChart;
