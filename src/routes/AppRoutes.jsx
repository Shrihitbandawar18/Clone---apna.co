import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import JobListing from '../pages/JobListing/JobListing'
import JobDetails from '../pages/JobDetails/JobDetails'

/**
 * AppRoutes — Centralised routing configuration.
 * Routes:
 *   /          → Job Listing page (home)
 *   /jobs/:id  → Job Details page for a specific job
 *   *          → Redirect to /
 */
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListing />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
