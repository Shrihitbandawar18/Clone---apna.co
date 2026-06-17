import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  MapPin, Briefcase, Clock, IndianRupee, ChevronRight,
  Share2, Bookmark, BookmarkCheck, Users, Star,
  CheckCircle, AlertCircle, ChevronLeft, Eye
} from 'lucide-react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import JobHighlights from '../../components/JobHighlights/JobHighlights'
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo'
import RelatedJobs from '../../components/RelatedJobs/RelatedJobs'
import StickyApplyButton from '../../components/StickyApplyButton/StickyApplyButton'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'
import { useJob, useRelatedJobs } from '../../hooks'
import { getInitials, workModeColor } from '../../utils'

/**
 * JobDetails — Full job detail page.
 * Layout: Header → Breadcrumb → [Main Content | Sidebar] → Footer
 * On mobile: single column, StickyApplyButton fixed at bottom.
 */
function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { job, loading, error } = useJob(id)
  const relatedJobs = useRelatedJobs(id, job?.category)
  const allJobs = useRelatedJobs(0, job?.category) // for sidebar

  const [saved, setSaved] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Job Not Found</h2>
          <p className="text-gray-500 mb-6">This job listing may have been removed or expired.</p>
          <button
            onClick={() => navigate('/')}
            className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors"
          >
            Browse All Jobs
          </button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      {/* Add bottom padding on mobile for fixed CTA */}
      <main className="pb-20 md:pb-10">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

            {/* ── Breadcrumb ── */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 flex-wrap">
              <Link to="/" className="hover:text-blue-600 transition-colors">Jobs</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">{job.category}</span>
              <ChevronRight size={12} />
              <span className="text-gray-700 font-medium truncate max-w-xs">{job.title}</span>
            </nav>

            {/* ── Grid Layout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-6">

              {/* ════ LEFT / MAIN COLUMN ════ */}
              <div className="lg:col-span-2 space-y-5">

                {/* ── Hero Card ── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                  {/* Back button (mobile) */}
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 mb-4 md:hidden"
                  >
                    <ChevronLeft size={14} />
                    Back to results
                  </button>

                  {/* Company Logo + Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden flex items-center justify-center">
                      {!imgError && job.companyLogo ? (
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-full h-full object-contain p-2"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <span className="text-xl font-bold text-blue-600">
                          {getInitials(job.company)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-1">
                        {job.title}
                      </h1>
                      <Link
                        to="#"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        {job.company}
                      </Link>

                      {/* Rating inline */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-2 py-0.5 rounded-full">
                          <Star size={10} className="fill-green-600" />
                          {job.company_info.rating}
                        </div>
                        <span className="text-xs text-gray-400">
                          {(job.company_info.reviews / 1000).toFixed(1)}K reviews
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={handleShare}
                        title="Copy link"
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative"
                      >
                        <Share2 size={17} />
                        {copied && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => setSaved(!saved)}
                        title={saved ? 'Remove saved' : 'Save job'}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {saved
                          ? <BookmarkCheck size={17} className="text-blue-600" />
                          : <Bookmark size={17} />
                        }
                      </button>
                    </div>
                  </div>

                  {/* Quick Meta Row */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <IndianRupee size={14} className="text-green-600" />
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-blue-500" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-red-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-orange-400" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${workModeColor(job.workMode)}`}>
                      {job.workMode}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-medium">
                      {job.jobType}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-medium">
                      {job.shift}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 font-medium">
                      {job.openings} openings
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 py-3 border-y border-gray-100 mb-5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Users size={13} className="text-blue-400" />
                      <span><strong className="text-gray-900">{job.applicants}</strong> applicants</span>
                    </div>
                    <div className="h-3 w-px bg-gray-200" />
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Eye size={13} className="text-purple-400" />
                      <span><strong className="text-gray-900">{(job.applicants * 4).toLocaleString()}</strong> views</span>
                    </div>
                    <div className="h-3 w-px bg-gray-200" />
                    <span className="text-xs text-gray-500">
                      Deadline: <strong className="text-red-500">30 days left</strong>
                    </span>
                  </div>

                  {/* Desktop Apply button inline with hero */}
                  <div className="hidden md:block">
                    <StickyApplyButton jobTitle={job.title} />
                  </div>
                </div>

                {/* ── Job Highlights ── */}
                <JobHighlights job={job} />

                {/* ── Job Description ── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-3">Job Description</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                {/* ── Responsibilities ── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Requirements ── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Benefits ── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-4">Perks & Benefits</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {job.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 bg-green-50 rounded-lg border border-green-100"
                      >
                        <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Mobile: Company Info ── */}
                <div className="lg:hidden">
                  <CompanyInfo company={job.company_info} />
                </div>

                {/* ── Mobile: Related Jobs ── */}
                <div className="lg:hidden">
                  <RelatedJobs jobs={relatedJobs} currentJobId={id} />
                </div>

              </div>
              {/* ════ END MAIN COLUMN ════ */}


              {/* ════ RIGHT SIDEBAR ════ */}
              <div className="hidden lg:block space-y-5">

                {/* Apply Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
                  <StickyApplyButton jobTitle={job.title} />

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Openings</span>
                      <span className="font-semibold text-gray-800">{job.openings}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Applicants</span>
                      <span className="font-semibold text-gray-800">{job.applicants}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Posted</span>
                      <span className="font-semibold text-gray-800">{job.postedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <CompanyInfo company={job.company_info} />

                {/* Related Jobs */}
                <RelatedJobs jobs={relatedJobs} currentJobId={id} />

              </div>
              {/* ════ END SIDEBAR ════ */}

            </div>
          </div>
        )}
      </main>

      {/* Mobile sticky apply */}
      {!loading && job && (
        <div className="md:hidden">
          <StickyApplyButton jobTitle={job?.title} />
        </div>
      )}

      <Footer />
    </>
  )
}

export default JobDetails
