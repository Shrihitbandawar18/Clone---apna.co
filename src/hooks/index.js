/**
 * hooks/index.js — Custom React hooks used across the application.
 */

import { useState, useEffect } from 'react'

/**
 * useScrollPosition — Tracks the current vertical scroll position.
 * Used by Header to add shadow on scroll and by StickyApplyButton
 * to decide when to appear on desktop.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

/**
 * useJob — Fetches a job from the local JSON store by id.
 * Returns { job, loading, error } tuple.
 */
export function useJob(id) {
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate network latency for realistic UX
    setLoading(true)
    setError(null)

    const timer = setTimeout(async () => {
      try {
        const { default: jobs } = await import('../data/jobs.json')
        const found = jobs.find((j) => j.id === Number(id))
        if (!found) throw new Error('Job not found')
        setJob(found)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [id])

  return { job, loading, error }
}

/**
 * useRelatedJobs — Returns jobs in the same category, excluding current job.
 */
export function useRelatedJobs(currentJobId, category) {
  const [relatedJobs, setRelatedJobs] = useState([])

  useEffect(() => {
    if (!category) return
    const load = async () => {
      const { default: jobs } = await import('../data/jobs.json')
      const filtered = jobs.filter(
        (j) => j.category === category && j.id !== Number(currentJobId)
      )
      setRelatedJobs(filtered.slice(0, 4))
    }
    load()
  }, [currentJobId, category])

  return relatedJobs
}
