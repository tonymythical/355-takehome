import React from 'react';

export default function Summary({ applications }) {
  const total = applications.length;
  const applied = applications.filter(app => app.status === 'applied').length;
  const interview = applications.filter(app => app.status === 'interview').length;
  const offer = applications.filter(app => app.status === 'offer').length;
  const rejected = applications.filter(app => app.status === 'rejected').length;

  return (
    <div className="summary-strip">
      <div className="summary-item">
        <span className="summary-count">{total}</span>
        <span className="summary-label">Total</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">{applied}</span>
        <span className="summary-label">Applied</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">{interview}</span>
        <span className="summary-label">Interview</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">{offer}</span>
        <span className="summary-label">Offer</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">{rejected}</span>
        <span className="summary-label">Rejected</span>
      </div>
    </div>
  );
}