# Job Application Tracker

A React application for tracking job applications, built as part of Take-Home #2 (Fetching, State & Events).

## Features

- **Asynchronous Data Fetching:** Loads application data dynamically from `/applications.json` upon component mount using `useEffect`.
- **Robust Error & Loading States:** Handles loading indicators, checks `response.ok` to catch HTTP errors (like 404s/500s), and gracefully handles request cancellation via `AbortController`.
- **Live Filtering & Search:** Filter applications instantly by status (All, Applied, Interview, Offer, Rejected) and search by company name or role.
- **Derived State:** Filters and sorts the application list cleanly on every render without storing redundant state variables.
- **Summary Counters:** Displays total metrics across the top that remain accurate regardless of active filters.
- **Smart Empty States:** Distinguishes between having no applications at all versus having no matches for current filters.

## Getting Started

1. Install dependencies:
   ```bash
   npm install