import React, { useState, useEffect } from 'react';
import Summary from './components/Summary';
import ApplicationList from './components/ApplicationList';

export default function App() {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchApplications() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/applications.json', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch applications (Status: ${response.status})`);
        }

        const data = await response.json();
        setApplications(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchApplications();

    return () => controller.abort();
  }, []);

  if (isLoading) {
    return (
      <main className="app-container">
        <header>
          <h1>Job Application Tracker</h1>
        </header>
        <div className="loading">Loading applications...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="app-container">
        <header>
          <h1>Job Application Tracker</h1>
        </header>
        <div className="error">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="app-container">
      <header>
        <h1>Job Application Tracker</h1>
      </header>
      
      <Summary applications={applications} />

      <ApplicationList applications={applications} />
    </main>
  );
}