# Restaurant Finder

A React application that allows users to search for restaurants by UK postcode.

## Tech Stack

- **React + TypeScript** — component structure and type safety
- **Vite** — fast development setup
- **Tailwind CSS** — styling
- **TanStack Query** — data fetching 
- **Vitest** — unit testing

## Getting Started

### Install dependencies
npm install

### Start the development server
npm run dev

Open http://localhost:5173

### Run tests
npm run test

### Build for production
npm run build

### Preview production build
npm run preview

## Design Decisions

- **Vite proxy** — ran into fetching problems from the browser because the API does not include CORS headers, so I configured a Vite dev server proxy to handle requests in development. For production a dedicated backend proxy will be needed.
- **Data transformation** — I mapped raw API responses  to a clean `Restaurant` interface early in the data layer, keeping components free from API implementation details.

## Assumptions

- Some of the cuisine tags (e.g. "Collect stamps", "Deals") seemed irrelevant with the information we want to display, so I filtered them out. I filtered out the ones I noticed, there could be more filtering needed.
- The star rating is displayed out of 5 based on data I noticed in the API response.

## Improvements

Given more time, I would:

- **Add a backend proxy** — to handle CORS properly in production rather than relying on the Vite dev server proxy
- **Pagination or infinite scroll** — to allow browsing beyond the first 10 restaurants
- **Filtering and sorting** — allow users to filter by cuisine type or sort by rating
- **Skeleton loading cards** — replace the spinner with skeleton cards that match the card layout for a smoother loading experience
- **More test coverage** — integration tests for the hook and component tests for the UI states