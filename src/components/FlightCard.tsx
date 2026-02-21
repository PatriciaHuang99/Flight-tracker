import React from 'react';
import { Flight } from '@/lib/mockData';
import styles from './FlightCard.module.css';

interface FlightCardProps {
    flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return '--:--';
        try {
            return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch (e) {
            return '--:--';
        }
    };

    const formatFullDate = (dateStr: string) => {
        if (!dateStr) return '';
        try {
            return new Date(dateStr).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
        } catch (e) {
            return '';
        }
    };

    return (
        <div className={`${styles.card} glass-card animate-fade-in`}>
            <div className={styles.header}>
                <div className={styles.airlineInfo}>
                    <span className={styles.airline}>{flight.airline}</span>
                    <span className={styles.flightNumber}>{flight.flightNumber}</span>
                    <span className={styles.date}>{formatFullDate(flight.startTime)}</span>
                </div>
                <div className={`${styles.status} ${styles[flight.status.toLowerCase().replace(' ', '')]}`}>
                    {flight.status}
                </div>
            </div>

            <div className={styles.route}>
                <div className={styles.location}>
                    <h2 className={styles.cityCode}>{flight.startLocation}</h2>
                    <div className={styles.timeInfo}>
                        <span className={styles.time}>{formatDate(flight.startTime)}</span>
                        <span className={styles.tz}>{flight.startTimeZone}</span>
                    </div>
                </div>

                <div className={styles.path}>
                    <div className={styles.line}></div>
                    <div className={styles.planeIcon}>✈️</div>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.location}>
                    <h2 className={styles.cityCode}>{flight.endLocation}</h2>
                    <div className={styles.timeInfo}>
                        <span className={styles.time}>{formatDate(flight.endTime)}</span>
                        <span className={styles.tz}>{flight.endTimeZone}</span>
                    </div>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Duration</span>
                    <span className={styles.value}>{flight.duration || 'N/A'}</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.label}>Gate</span>
                    <span className={styles.value}>{flight.gate || 'N/A'}</span>
                </div>
            </div>
        </div>
    );
}
