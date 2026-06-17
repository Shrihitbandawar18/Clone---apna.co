import React from 'react'
import {
  Briefcase, Clock, IndianRupee, MapPin, Calendar,
  Users, Layers, Monitor
} from 'lucide-react'

/**
 * JobHighlights — Displays key job attributes in a grid card layout.
 * Mirrors the "Job Highlights" section on the Apna.co job detail page.
 */
function JobHighlights({ job }) {
  const highlights = [
    {
      icon: IndianRupee,
      label: 'Annual Salary',
      value: job.salary,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Briefcase,
      label: 'Experience Required',
      value: job.experience,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: MapPin,
      label: 'Job Location',
      value: job.location,
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      icon: Monitor,
      label: 'Work Mode',
      value: job.workMode,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Clock,
      label: 'Shift Timing',
      value: job.shift,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
    },
    {
      icon: Layers,
      label: 'Employment Type',
      value: job.jobType,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      icon: Calendar,
      label: 'Department',
      value: job.department,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      icon: Users,
      label: 'Total Openings',
      value: `${job.openings} positions`,
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Job Highlights</h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {highlights.map(({ icon: Icon, label, value, color, bg }) => (
          <div
            key={label}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {/* Icon */}
            <div className={`flex-shrink-0 w-8 h-8 ${bg} rounded-lg flex items-center justify-center`}>
              <Icon size={15} className={color} />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-xs text-gray-500 leading-tight">{label}</p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5 leading-snug">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
          Skills Required
        </p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobHighlights
