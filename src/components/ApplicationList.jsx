import React, { useState } from 'react';
import ApplicationCard from './ApplicationCard';

export default function ApplicationList({ applications }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const statuses = ['all', 'applied', 'interview', 'offer', 'rejected'];

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = 
      selectedStatus === 'all' || app.status === selectedStatus;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      app.company.toLowerCase().includes(query) || 
      app.role.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === 'company') {
      return (a.company || '').localeCompare(b.company || '');
    } else if (sortBy === 'role') {
      return (a.role || '').localeCompare(b.role || '');
    } else if (sortBy === 'status') {
      return (a.status || '').localeCompare(b.status || '');
    } else {
      return (b.date || '').localeCompare(a.date || '');
    }
  });

  return (
    <div className="application-list-section">
      <div className="section-header">
        <h2>Applications</h2>
      </div>

      <div className="controls">
        <div className="status-filters">
          {statuses.map((status) => (
            <button
              key={status}
              className={selectedStatus === status ? 'active' : ''}
              onClick={() => setSelectedStatus(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search company or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="card-grid">
        {sortedApplications.length === 0 ? (
          <div className="empty-state">
            {applications.length === 0 
              ? "You have no applications yet." 
              : "No applications match these filters."}
          </div>
        ) : (
          sortedApplications.map(app => (
            <ApplicationCard key={app.id} application={app} />
          ))
        )}
      </div>
    </div>
  );
}