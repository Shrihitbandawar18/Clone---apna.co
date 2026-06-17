import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import JobCard from '../JobCard/JobCard'

/**
 * RelatedJobs — Shows a list of jobs in the same category.
 * Used in the right-hand sidebar and below the main content on mobile.
 */
function RelatedJobs({ jobs, currentJobId }) {
  // Filter out the current job
  const filtered = jobs.filter((j) => j.id !== Number(currentJobId))

  if (filtered.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-base font-semibold text-gray-900 mb-3">Similar Jobs</h2>
        <p className="text-sm text-gray-500">No similar jobs found at the moment.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">Similar Jobs</h2>
        <Link
          to="/"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors"
        >
          View all
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="space-y-3">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} compact />
        ))}
      </div>
    </div>
  )
}

export default RelatedJobs
