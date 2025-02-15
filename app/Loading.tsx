import React, { useState, useEffect } from 'react';
import './globals.css';

export const Loading: React.FC = () => {
    const [number, setNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => (prevNumber < 100 ? prevNumber + 1 : 1));
        }, 10); // Adjust the interval as needed

        // Simulate loading completion
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout as needed

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    if (!loading) {
        return null; // Remove the loading component after loading
    }

    return (
        <div className="loading-container">
            <div className="number">{number}</div>
        </div>
    );
}