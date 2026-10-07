import React from 'react';
import { applications } from './data';
import Summary from './components/Summary';
import ApplicationList from './components/ApplicationList';

export default function App() {
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