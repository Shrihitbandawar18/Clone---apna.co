import React, { useState } from 'react'
import {
  Building2, Globe, Users, Calendar, MapPin, Star, ExternalLink
} from 'lucide-react'
import { getInitials, getRatingBg } from '../../utils'

/**
 * CompanyInfo — Displays company details, rating, and description.
 * Mirrors the "About Company" section on the Apna.co job detail page.
 */
function CompanyInfo({ company }) {
  const [imgError, setImgError] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // Pick logo from job prop (company_info doesn't carry logo directly)
  const { name, about, website, industry, employees, founded, headquarters, rating, reviews } = company

  const infoItems = [
    { icon: Building2, label: 'Industry', value: industry, color: 'text-blue-500' },
    { icon: Users, label: 'Employees', value: employees, color: 'text-green-500' },
    { icon: Calendar, label: 'Founded', value: founded, color: 'text-orange-500' },
    { icon: MapPin, label: 'HQ', value: headquarters, color: 'text-red-400' },
  ]

  const shortAbout = about.slice(0, 180)
  const needsTruncation = about.length > 180

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
      {/* Header */}
      <h2 className="text-base font-semibold text-gray-900 mb-4">About the Company</h2>

      {/* Logo + Name + Rating */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
          <span className="text-lg font-bold text-blue-600">{getInitials(name)}</span>
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{name}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{industry}</p>

          {/* Rating badge */}
          <div className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full border text-xs font-semibold ${getRatingBg(rating)}`}>
            <Star size={10} className="fill-current" />
            <span>{rating}</span>
            <span className="font-normal text-gray-400 ml-0.5">({(reviews / 1000).toFixed(1)}K reviews)</span>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {expanded || !needsTruncation ? about : shortAbout + '…'}
        </p>
        {needsTruncation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 mt-1.5 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {infoItems.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="flex items-start gap-2">
            <Icon size={14} className={`${color} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="text-xs text-gray-400">{label}</p>
              <p className="text-xs font-semibold text-gray-800">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Website Link */}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors w-full justify-center"
      >
        <Globe size={13} />
        Visit Company Website
        <ExternalLink size={11} />
      </a>
    </div>
  )
}

export default CompanyInfo
