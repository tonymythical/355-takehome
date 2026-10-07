import React from 'react';
import StatusBadge from './StatusBadge';

export default function ApplicationCard({ application }) {
  const { company, role, status, date, source, notes } = application;

  return (
    <div className="application-card">
      <div className="card-header">
        <div>
          <h3>{role}</h3>
          <p className="company-name">{company}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      
      <div className="card-details">
        <p><strong>Applied Date:</strong> {date}</p>
        {source && <p><strong>Source:</strong> {source}</p>}
        {notes && <p><strong>Notes:</strong> {notes}</p>}
      </div>
    </div>
  );
}