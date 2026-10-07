# Job Application Tracker (SDEV 355 - Take-Home #1)

A React application built with Vite to track job applications, statuses, and key metrics. This project serves as Take-Home #1 for SDEV 355, focusing on component-based architecture, props, lists, conditional rendering, and derived summary counts.

## Features
* **Summary Strip:** Dynamic counters showing totals for applied, interviewing, offered, and rejected positions.
* **Application Cards:** Displays individual job details including role, company, location, date applied, and status.
* **Status Badges:** Color-coded badges to easily identify application stages.
* **Sorting & Filtering:** Easily sort applications by date, company, role, or status.
* **Empty State Handling:** Gracefully renders fallback messages if no applications are present.

## Project Structure
* `src/components/`
  * `Summary.jsx` — Status counter strip
  * `ApplicationList.jsx` — Container for filtering, sorting, and rendering application cards
  * `ApplicationCard.jsx` — Individual job card display
  * `StatusBadge.jsx` — Status styling badge
* `src/data.js` — Mock application data
* `src/App.jsx` — Main application layout and state coordination

## Getting Started

1. Clone your private repository and navigate into the project directory.
2. Install dependencies:
   ```bash
   npm install