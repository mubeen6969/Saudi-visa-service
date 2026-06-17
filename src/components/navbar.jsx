import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Visa Services', path: '/visa-services' },
  { label: 'Process', path: '/process' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin' },
  { label: 'TrackApplication', path: '/TrackApplication' },
  { label: 'Success', path: '/success' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`${isHome ? 'absolute left-0 top-0 z-50' : 'relative'} w-full`}>
      <div className="bg-sky-700 text-white">
       <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between gap-2 px-5 py-2 text-[10px] font-medium">
          <div className="flex flex-wrap items-center gap-6">
            <span>info@saudivisaservice.com</span>
            <span>Lahore, Pakistan</span>
            <span>03123456789</span>
          </div>
          <div className="flex items-center gap-5">
            <span>Accessibility</span>
            <span>English</span>
          </div>
        </div>
      </div>

      <nav
        className={isHome ? 'bg-transparent' : 'bg-[#062738]'}
      >
        {/* <div className="mx-auto flex max-w-[90vw] flex-col gap-5 px-5 py-2 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex w-fit items-center">
            <img src="/images/logo.png" alt="Saudi Visa Service" className="h-16 w-auto md:h-20" />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={`
    ${menuOpen ? 'flex' : 'hidden'
              }
    md:flex flex-col md:flex-row
    w-full md:w-auto
    gap-2
    rounded-2xl md:rounded-full
    bg-white/25
    p-3
    backdrop-blur-md
  `}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `w-full md:w-auto text-center rounded-full px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15 ${isActive ? 'bg-white/15' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/apply-now"
              className="w-full md:w-auto text-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Apply Now -&gt;
            </NavLink>
          </div>
        </div> */}


        <div className="mx-auto max-w-7xl px-5 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/logo.png"
                alt="Saudi Visa Service"
                className="h-16 w-auto md:h-20"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/25 p-2 backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/15 ${isActive ? 'bg-white/15' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/apply-now"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Apply Now →
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 flex flex-col gap-2 rounded-2xl bg-white/20 p-3 backdrop-blur-md md:hidden">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-center text-sm font-medium text-white ${isActive ? 'bg-white/20' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/apply-now"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-900"
              >
                Apply Now →
              </NavLink>
            </div>
          )}
        </div>




      </nav>
    </header>
  )
}

export default Navbar
