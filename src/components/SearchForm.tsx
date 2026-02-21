'use client';

import React, { useState } from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
    onSearch: (flightNumber: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim().toUpperCase());
        }
    };

    return (
        <form className={`${styles.form} animate-fade-in`} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter Flight Number (e.g., AA123)"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Search
                </button>
            </div>
        </form>
    );
}
