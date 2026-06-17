import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

/**
 * Footer — Site-wide footer with links, social icons, and legal info.
 */
function Footer() {
  const footerSections = [
    {
      heading: 'For Job Seekers',
      links: [
        { label: 'Browse Jobs', href: '/' },
        { label: 'Jobs by Category', href: '#' },
        { label: 'Jobs by City', href: '#' },
        { label: 'Jobs by Company', href: '#' },
        { label: 'Fresher Jobs', href: '#' },
        { label: 'Walk-in Jobs', href: '#' },
      ],
    },
    {
      heading: 'For Employers',
      links: [
        { label: 'Post a Job', href: '#' },
        { label: 'Find Candidates', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Recruiter Login', href: '#' },
        { label: 'Talent Solutions', href: '#' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers at Apna', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Safety Tips', href: '#' },
        { label: 'Report a Problem', href: '#' },
        { label: 'Sitemap', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Brand + tagline */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <Briefcase size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                apna<span className="text-blue-400">.co</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              India's leading professional networking and job platform. Connecting job seekers with top employers.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download App */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm">Get the Apna App</p>
            <p className="text-gray-400 text-xs mt-0.5">10 Crore+ Jobs. Download Now.</p>
          </div>
          <div className="flex gap-3">
            <button className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              App Store
            </button>
            <button className="text-xs font-semibold text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
              Play Store
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Apna Time Aa Gaya Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
