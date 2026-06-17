import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, Briefcase, Clock, IndianRupee, Users, BookOpen,
  Bookmark, BookmarkCheck, Star
} from 'lucide-react'
import { getInitials, truncate, workModeColor } from '../../utils'

/**
 * JobCard — Reusable card component for job listings.
 * Used on both the Job Listing page and Related Jobs section.
 *
 * @param {object} job    - Full job data object
 * @param {boolean} compact - When true, shows reduced info (used in sidebar)
 */
function JobCard({ job, compact = false }) {
  const [saved, setSaved] = useState(false)
  const [imgError, setImgError] = useState(false)

  if (!job) return null

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-card-hover transition-all duration-200 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* Card Header: Logo + Title + Save */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 overflow-hidden flex items-center justify-center">
            {!imgError && job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-full h-full object-contain p-1"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-sm font-bold text-blue-600">
                {getInitials(job.company)}
              </span>
            )}
          </div>

          {/* Title & Company */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
              {job.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate">{job.company}</p>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setSaved(!saved)
          }}
          aria-label={saved ? 'Remove from saved' : 'Save job'}
          className="flex-shrink-0 p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
        >
          {saved ? (
            <BookmarkCheck size={16} className="text-blue-600" />
          ) : (
            <Bookmark size={16} />
          )}
        </button>
      </div>

      {/* Job Meta Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${workModeColor(job.workMode)}`}>
          {job.workMode}
        </span>
        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-medium">
          {job.jobType}
        </span>
      </div>

      {/* Details Row */}
      {!compact && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <IndianRupee size={12} className="text-green-600 flex-shrink-0" />
            <span className="truncate">{job.salary.replace('₹', '').split('–')[0].trim()}+</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Briefcase size={12} className="text-blue-500 flex-shrink-0" />
            <span className="truncate">{job.experience}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <MapPin size={12} className="text-red-400 flex-shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Clock size={12} className="text-orange-400 flex-shrink-0" />
            <span className="truncate">{job.postedDate}</span>
          </div>
        </div>
      )}

      {compact && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <MapPin size={11} className="text-red-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Briefcase size={11} className="text-blue-500" />
            <span>{job.experience}</span>
          </div>
        </div>
      )}

      {/* Skills */}
      {!compact && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {job.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="text-xs text-gray-400">+{job.skills.length - 3} more</span>
          )}
        </div>
      )}

      {/* Footer: applicants + rating */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Users size={11} />
          <span>{job.applicants} applicants</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <Star size={11} className="text-yellow-400 fill-yellow-400" />
          <span className="font-medium text-gray-700">{job.company_info.rating}</span>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
