import React, { useState } from 'react';
import ApplicationCard from './ApplicationCard';

export default function ApplicationList({ applications }) {
  const [sortBy, setSortBy] = useState('date');

  const sortedApplications = [...applications].sort((a, b) => {
    if (sortBy === 'company') {
      return a.company.localeCompare(b.company);
    } else if (sortBy === 'role') {
      return a.role.localeCompare(b.role);
    } else if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    } else {
      return b.date.localeCompare(a.date);
    }
  });

  return (
    <div className="application-list-section">
      <div className="controls">
        <label htmlFor="sort-select">Sort by: </label>
        <select 
          id="sort-select" 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="company">Company</option>
          <option value="role">Role</option>
          <option value="status">Status</option>
        </select>
      </div>

      <div className="card-grid">
        {sortedApplications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          sortedApplications.map(app => (
            <ApplicationCard key={app.id} application={app} />
          ))
        )}
      </div>
    </div>
  );
}