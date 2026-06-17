import React, { useState } from 'react'
import { Send, CheckCircle, X } from 'lucide-react'
import { useScrollPosition } from '../../hooks'

/**
 * StickyApplyButton — Renders a sticky CTA for applying to a job.
 *
 * Behavior:
 * - Mobile:  Fixed bar at the bottom of the viewport, always visible.
 * - Desktop: Appears in the sidebar (not sticky) as a regular button;
 *            a fixed floating bar also appears after 400px scroll.
 *
 * @param {string} jobTitle - Job title shown in the modal.
 */
function StickyApplyButton({ jobTitle }) {
  const [applied, setApplied] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const scrollY = useScrollPosition()

  // Show floating bar on desktop after scrolling past the hero
  const showFloatingBar = scrollY > 400

  const handleApply = () => {
    setApplied(true)
    setShowModal(false)
    // Reset after 5 seconds for demo purposes
    setTimeout(() => setApplied(false), 5000)
  }

  const ApplyBtn = ({ size = 'default', fullWidth = false }) => (
    <button
      onClick={() => !applied && setShowModal(true)}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200
        ${fullWidth ? 'w-full' : ''}
        ${size === 'sm' ? 'text-sm px-5 py-2.5' : 'text-sm px-6 py-3'}
        ${applied
          ? 'bg-green-600 hover:bg-green-700 text-white shadow-sm'
          : 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-md'
        }
      `}
    >
      {applied ? (
        <>
          <CheckCircle size={16} />
          Application Sent!
        </>
      ) : (
        <>
          <Send size={15} />
          Apply Now
        </>
      )}
    </button>
  )

  return (
    <>
      {/* ── Desktop inline button (inside sidebar) ── */}
      <div className="hidden md:block">
        <ApplyBtn fullWidth />
        <p className="text-center text-xs text-gray-400 mt-2">
          {applied ? 'We will notify the employer.' : 'Be among the first to apply'}
        </p>
      </div>

      {/* ── Mobile: Fixed bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-sticky">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <ApplyBtn fullWidth />
          <button className="flex-shrink-0 border border-gray-200 text-gray-600 hover:bg-gray-50 p-3 rounded-xl transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 20.5H7A4.5 4.5 0 0 1 2.5 16V8A4.5 4.5 0 0 1 7 3.5h10A4.5 4.5 0 0 1 21.5 8v8a4.5 4.5 0 0 1-4.5 4.5Z"/>
              <path d="M8 10h8M8 14h5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Desktop: Floating bar after scroll ── */}
      <div
        className={`
          hidden md:flex fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200
          items-center justify-between px-6 py-3 shadow-sticky
          transition-all duration-300
          ${showFloatingBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-900 line-clamp-1">{jobTitle}</p>
            <p className="text-xs text-gray-500">Don't miss this opportunity!</p>
          </div>
          <ApplyBtn size="sm" />
        </div>
      </div>

      {/* ── Apply Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md p-6 shadow-2xl animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-gray-900">Confirm Application</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-5">
              You're applying for <strong className="text-gray-900">{jobTitle}</strong>.
              Your profile will be shared with the employer.
            </p>

            {/* Checklist */}
            <ul className="space-y-2 mb-6">
              {['Your resume will be shared', 'Employer can view your profile', 'You will receive email updates'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 text-sm font-semibold text-gray-700 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="flex-1 text-sm font-semibold text-white bg-blue-600 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Confirm Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyApplyButton
