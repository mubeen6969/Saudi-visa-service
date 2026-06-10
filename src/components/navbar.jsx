import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Visa Services', path: '/visa-services' },
  { label: 'Process', path: '/process' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`${isHome ? 'absolute left-0 top-0 z-50' : 'relative'} w-full`}>
      <div className="bg-sky-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-1 text-[9px] font-medium">
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
        <div className="mx-auto flex max-w-[90vw] flex-col gap-5 px-5 py-2 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex w-fit items-center">
            <img src="/images/logo.png" alt="Saudi Visa Service" className="h-16 w-auto md:h-20" />
          </Link>

          <div className="flex w-full flex-wrap items-center gap-2 rounded-full bg-white/25 p-2 backdrop-blur-md md:w-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/15 ${
                    isActive ? 'bg-white/15' : ''
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
              Apply Now -&gt;
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
