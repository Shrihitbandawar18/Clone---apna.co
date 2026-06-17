import React, { useState, useEffect, useMemo } from 'react'
import { Search, SlidersHorizontal, MapPin, X, ChevronDown, TrendingUp, Zap } from 'lucide-react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import JobCard from '../../components/JobCard/JobCard'
import jobsData from '../../data/jobs.json'

/**
 * JobListing — Home page showing all available jobs with search + filter.
 */
function JobListing() {
  const [search, setSearch] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [workModeFilter, setWorkModeFilter] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  // Simulate load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  const categories = ['All', ...new Set(jobsData.map((j) => j.category))]
  const workModes = ['All', ...new Set(jobsData.map((j) => j.workMode))]

  const filtered = useMemo(() => {
    return jobsData.filter((job) => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q))

      const matchLocation =
        !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase())

      const matchCategory = categoryFilter === 'All' || job.category === categoryFilter
      const matchWorkMode = workModeFilter === 'All' || job.workMode === workModeFilter

      return matchSearch && matchLocation && matchCategory && matchWorkMode
    })
  }, [search, locationFilter, categoryFilter, workModeFilter])

  const activeFilters = [
    categoryFilter !== 'All' && { label: categoryFilter, clear: () => setCategoryFilter('All') },
    workModeFilter !== 'All' && { label: workModeFilter, clear: () => setWorkModeFilter('All') },
    locationFilter && { label: locationFilter, clear: () => setLocationFilter('') },
  ].filter(Boolean)

  const trendingSearches = ['React Developer', 'Data Scientist', 'Product Manager', 'Digital Marketing', 'HR Manager']

  return (
    <>
      <Header />

      <main>
        {/* ── Hero Search Banner ── */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                <Zap size={12} className="text-yellow-300" />
                10 Crore+ Jobs Listed
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                Find Your Dream Job
              </h1>
              <p className="text-blue-100 text-sm md:text-base mb-7">
                Search from thousands of verified jobs across India
              </p>

              {/* Search Box */}
              <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Job title, skills or company…"
                    className="w-full pl-10 pr-4 py-3 text-sm text-gray-900 bg-transparent focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div className="w-px bg-gray-200 hidden sm:block" />
                <div className="relative sm:w-48">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    placeholder="City or state…"
                    className="w-full pl-10 pr-4 py-3 text-sm text-gray-900 bg-transparent focus:outline-none placeholder-gray-400"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm whitespace-nowrap">
                  Search Jobs
                </button>
              </div>

              {/* Trending */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <div className="flex items-center gap-1 text-xs text-blue-200">
                  <TrendingUp size={11} />
                  Trending:
                </div>
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearch(term)}
                    className="text-xs bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3 py-1 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <div className="sticky top-14 md:top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-hide">

              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
              >
                <SlidersHorizontal size={13} />
                Filters
                {activeFilters.length > 0 && (
                  <span className="bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {activeFilters.length}
                  </span>
                )}
              </button>

              <div className="w-px h-5 bg-gray-200 flex-shrink-0" />

              {/* Category Pills */}
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`flex-shrink-0 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                    categoryFilter === cat
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}

              <div className="w-px h-5 bg-gray-200 flex-shrink-0" />

              {/* Work Mode Dropdown */}
              <div className="relative flex-shrink-0">
                <select
                  value={workModeFilter}
                  onChange={(e) => setWorkModeFilter(e.target.value)}
                  className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 pl-3 pr-7 py-2 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="All">Work Mode: All</option>
                  {workModes.filter((m) => m !== 'All').map((mode) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Active Filter Chips ── */}
        {activeFilters.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500">Active:</span>
              {activeFilters.map(({ label, clear }) => (
                <button
                  key={label}
                  onClick={clear}
                  className="inline-flex items-center gap-1 text-xs bg-white border border-blue-200 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {label}
                  <X size={10} />
                </button>
              ))}
              <button
                onClick={() => {
                  setCategoryFilter('All')
                  setWorkModeFilter('All')
                  setLocationFilter('')
                  setSearch('')
                }}
                className="text-xs text-red-500 hover:text-red-700 ml-1 transition-colors"
              >
                Clear all
              </button>
            </div>
          </div>
        )}

        {/* ── Job Results ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* Results count */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {loading ? 'Loading jobs…' : `${filtered.length} Jobs Found`}
              </h2>
              {!loading && (
                <p className="text-xs text-gray-500 mt-0.5">
                  {search ? `Results for "${search}"` : 'All available positions'}
                </p>
              )}
            </div>
            <div className="text-xs text-gray-500">
              Sorted by: <span className="font-medium text-gray-700">Relevance</span>
            </div>
          </div>

          {loading ? (
            /* Loading Skeleton Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 space-y-3 animate-pulse">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((j) => <div key={j} className="h-4 bg-gray-200 rounded" />)}
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((j) => <div key={j} className="h-6 w-16 bg-gray-200 rounded-full" />)}
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <Search size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-1">No jobs found</h3>
              <p className="text-sm text-gray-500 mb-4">
                Try adjusting your search or removing filters.
              </p>
              <button
                onClick={() => { setSearch(''); setCategoryFilter('All'); setWorkModeFilter('All'); setLocationFilter('') }}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            /* Jobs Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default JobListing
