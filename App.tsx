import React, { useState, useEffect } from 'react';
import SquishyIcon from './SquishyIcon';

// --- Configuration ---
// The date the squishy toy got stuck.
// Set to a fixed date to ensure the counter works across time.
const START_DATE = new Date('2025-07-16T00:00:00');

const calculateDaysStuck = (): number => {
    const now = new Date();
    // To ensure we're comparing dates only, we can zero out the time part of 'now'
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const differenceInMs = today.getTime() - START_DATE.getTime();
    // Add a small epsilon to handle potential floating point inaccuracies around midnight
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24) + 0.00001);
    return Math.max(0, days); // Ensure it doesn't show negative days if date is in future
};

const App: React.FC = () => {
    const [daysStuck, setDaysStuck] = useState<number>(calculateDaysStuck());

    useEffect(() => {
        // Update the count every minute to catch day changes if the page is left open.
        const timer = setInterval(() => {
            setDaysStuck(calculateDaysStuck());
        }, 60000); 

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <main className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans antialiased overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/50 to-slate-900"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-sky-900/50 p-8 sm:p-12 text-center max-w-lg w-full border border-slate-700 flex flex-col items-center">
                
                <SquishyIcon />

                <h1 className="text-3xl sm:text-4xl font-bold text-sky-300 mt-6">
                    The Ceiling Squishy Saga
                </h1>
                
                <p className="text-slate-300 mt-2 text-sm sm:text-base">
                    Tracking the tenacity of one little blue toy.
                </p>

                <div className="my-8 sm:my-12">
                    <div 
                        className="text-8xl sm:text-9xl font-black bg-gradient-to-br from-sky-300 to-cyan-500 bg-clip-text text-transparent"
                    >
                        {daysStuck}
                    </div>
                    <div className="text-slate-400 tracking-widest text-sm sm:text-base font-medium mt-2">
                        {daysStuck === 1 ? 'DAY' : 'DAYS'} STUCK ON THE CEILING
                    </div>
                </div>

                <div className="text-xs text-slate-500">
                    Stuck since: {START_DATE.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>
        </main>
    );
};

export default App;
