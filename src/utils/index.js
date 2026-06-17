/**
 * utils/index.js — Shared utility helpers used across components.
 */

/**
 * formatSalary — Formats a raw salary number to Indian locale string.
 * e.g. 1400000 → "14,00,000"
 */
export function formatSalary(amount) {
  return amount.toLocaleString('en-IN')
}

/**
 * truncate — Trims a string to maxLength and appends ellipsis.
 */
export function truncate(str, maxLength = 120) {
  if (!str || str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}

/**
 * getInitials — Returns 1-2 capital letter initials from a company name.
 * Used as fallback when company logo fails to load.
 */
export function getInitials(name = '') {
  const words = name.split(' ').filter(Boolean)
  if (words.length === 1) return words[0][0].toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/**
 * getRatingColor — Returns a Tailwind text color class based on rating value.
 */
export function getRatingColor(rating) {
  if (rating >= 4.0) return 'text-green-600'
  if (rating >= 3.5) return 'text-yellow-600'
  return 'text-red-500'
}

/**
 * getRatingBg — Returns background color class for rating badge.
 */
export function getRatingBg(rating) {
  if (rating >= 4.0) return 'bg-green-50 text-green-700 border-green-200'
  if (rating >= 3.5) return 'bg-yellow-50 text-yellow-700 border-yellow-200'
  return 'bg-red-50 text-red-700 border-red-200'
}

/**
 * workModeColor — Returns badge color classes for work mode labels.
 */
export function workModeColor(mode) {
  const map = {
    'Hybrid': 'bg-blue-50 text-blue-700 border-blue-200',
    'Work from Office': 'bg-orange-50 text-orange-700 border-orange-200',
    'Work from Home': 'bg-green-50 text-green-700 border-green-200',
    'Remote': 'bg-green-50 text-green-700 border-green-200',
  }
  return map[mode] || 'bg-gray-100 text-gray-700 border-gray-200'
}
