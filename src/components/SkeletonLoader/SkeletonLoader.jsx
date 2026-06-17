import React from 'react'

/**
 * SkeletonLoader — Animated placeholder displayed while job data loads.
 * Mimics the layout of the JobDetails page for a polished loading experience.
 */
function SkeletonLoader() {
  const Bone = ({ className }) => (
    <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb skeleton */}
      <Bone className="h-4 w-48 mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          {/* Hero card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Bone className="w-16 h-16 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Bone className="h-6 w-3/4" />
                <Bone className="h-4 w-1/2" />
                <div className="flex gap-2 pt-1">
                  <Bone className="h-6 w-20 rounded-full" />
                  <Bone className="h-6 w-24 rounded-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[1, 2, 3].map((i) => <Bone key={i} className="h-14 rounded-lg" />)}
            </div>
            <Bone className="h-10 w-full rounded-xl" />
          </div>

          {/* Highlights card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <Bone className="h-5 w-36 mb-4" />
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => <Bone key={i} className="h-16 rounded-lg" />)}
            </div>
          </div>

          {/* Description card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-3">
            <Bone className="h-5 w-40 mb-4" />
            {[100, 90, 95, 80, 88, 75].map((w, i) => (
              <Bone key={i} className="h-4" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-4">
            <Bone className="h-10 w-full rounded-xl" />
            <Bone className="h-5 w-36 mb-2" />
            <div className="flex items-start gap-3">
              <Bone className="w-12 h-12 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Bone className="h-4 w-3/4" />
                <Bone className="h-3 w-1/2" />
              </div>
            </div>
            {[1, 2, 3].map((i) => <Bone key={i} className="h-4" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
