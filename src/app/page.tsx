'use client';

import React, { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import FlightCard from '@/components/FlightCard';
import { Flight } from '@/lib/mockData';
import { fetchFlights } from '@/lib/aviationStack';
import styles from './page.module.css';

export default function Home() {
  const [results, setResults] = useState<Flight[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (flightNumber: string) => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const data = await fetchFlights(flightNumber);
      setResults(data);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Flight Tracker</h1>
          <p className={styles.subtitle}>Track your journey with real-time precision</p>
        </header>

        <section className={styles.searchSection}>
          <SearchForm onSearch={handleSearch} />
        </section>

        <section className={styles.resultsSection}>
          {isLoading ? (
            <div className={`${styles.loading} animate-fade-in`}>
              <div className={styles.spinner}></div>
              <p>Fetching live flight data...</p>
            </div>
          ) : hasSearched ? (
            results.length > 0 ? (
              <div className={styles.resultsGrid}>
                {results.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
                ))}
              </div>
            ) : (
              <div className={`${styles.noResults} glass animate-fade-in`}>
                <p>No flights found for that number. Try "AA123" or "DL456".</p>
              </div>
            )
          ) : (
            <div className={`${styles.welcome} animate-fade-in`}>
              <div className={styles.featureGrid}>
                <div className={`${styles.featureItem} glass`}>
                  <span className={styles.featureIcon}>📍</span>
                  <h3>Live Locations</h3>
                </div>
                <div className={`${styles.featureItem} glass`}>
                  <span className={styles.featureIcon}>⏰</span>
                  <h3>Real-time Updates</h3>
                </div>
                <div className={`${styles.featureItem} glass`}>
                  <span className={styles.featureIcon}>☁️</span>
                  <h3>Weather Info</h3>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
