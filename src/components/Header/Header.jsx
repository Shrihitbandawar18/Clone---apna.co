import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Search, Bell, ChevronDown, Briefcase } from 'lucide-react'
import { useScrollPosition } from '../../hooks'

/**
 * Header — Top navigation bar replicating Apna.co header.
 * Features: sticky, shadow-on-scroll, responsive hamburger menu.
 */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollY = useScrollPosition()

  const navLinks = [
    { label: 'Find Jobs', href: '/' },
    { label: 'Companies', href: '#' },
    { label: 'Salaries', href: '#' },
    { label: 'Career Guide', href: '#' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrollY > 10 ? 'shadow-md' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Apna Jobs Home"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
              <Briefcase size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              apna<span className="text-blue-600">.co</span>
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, skills or company"
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
              Log In
            </button>
            <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Row */}
      <div className="md:hidden px-4 pb-3 pt-1 border-t border-gray-100 bg-white">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs, skills, companies…"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-3 border-t border-gray-100 flex gap-3">
            <button className="flex-1 text-sm font-semibold text-blue-600 border border-blue-600 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
              Log In
            </button>
            <button className="flex-1 text-sm font-semibold text-white bg-blue-600 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
