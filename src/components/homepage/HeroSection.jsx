import { Link } from 'react-router-dom'

const stats = [
  { value: '12,400+', label: 'Applications Assisted', icon: '03' },
  { value: 'Step-by-step', label: 'Document Guidance', icon: 'D' },
  { value: '24-72 hrs', label: 'Quick Processing Support', icon: 'T' },
  { value: '98%', label: 'Customer Satisfaction', icon: 'S' },
]

function HeroSection() {
  return (
    <section className="relative min-h-[130vh] overflow-hidden bg-[#06293b] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: 'url("/images/bg-image.png")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#062738]/80 via-[#0b4058]/25 to-[#062738]/75" />
      <img
        src="/images/man-image.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[90vw] items-center gap-8 px-5 pb-32 pt-44 lg:grid-cols-[1fr_0.9fr_1fr] lg:pb-24">
        <div className="z-10 max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            SAUDI VISA APPLICATIONS
          </h1>
          <p className="mt-5 max-w-lg text-base font-medium leading-7 text-white/95">
            Professional support for Umrah, Tourist, and Hajj visa applications
            with document guidance, application assistance, and status tracking.
          </p>
          <Link
            to="/apply-now"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-slate-100"
          >
            Begin Your Journey -&gt;
          </Link>
        </div>

        <div className="z-10 hidden lg:block" />

        <div className="z-10 md:w-[30vw] text-left lg:ml-auto lg:mt-28 absolute right-0 bottom-0">
          <h2 className="text-xl  font-extrabold leading-tight md:text-6xl whitespace-nowrap">
            <span className='ml-26'>TRAVEL</span> <br /> MADE EASY
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-white/95">
            Trusted visa experts helping you reach Saudi Arabia with confidence
            and peace of mind.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-20 w-full bg-white [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]" />

      <div className="absolute hidden md:bottom-4 left-1/2 z-20 w-[86%] max-w-6xl -translate-x-1/2 rounded-3xl bg-white px-6 py-5 text-slate-950 shadow-2xl md:px-10">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.value} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {item.icon}
              </span>
              <span>
                <strong className="block text-base font-extrabold text-[#16435a]">
                  {item.value}
                </strong>
                <span className="block text-[10px] font-medium text-slate-500">
                  {item.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
