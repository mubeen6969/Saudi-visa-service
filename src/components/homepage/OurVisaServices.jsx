import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Umrah Visa',
    tag: 'Spiritual Journey',
    image: '/images/Umrah%20Visa.png',
    description:
      'Year-round access for pilgrims seeking the sacred rites of Umrah, handled with reverence and precision.',
  },
  {
    title: 'Tourist Visa',
    tag: 'Discover The Kingdom',
    image: '/images/Tourist%20Visa.png',
    description:
      'Explore Riyadh, AlUla, Jeddah and the Red Sea. Multi-entry options for short stays and long itineraries.',
  },
  {
    title: 'Hajj Visa',
    tag: 'Sacred Pilgrimage',
    image: '/images/Hajj%20Visa.png',
    description:
      'Seasonal Hajj processing supported by experienced consultants who understand every requirement.',
  },
]

function OurVisaServices() {
  return (
    <section className="bg-white px-5 py-24 text-[#082b42]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
              Our Visa Services
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
              Three doorways into{' '}
              <span className="font-bold italic text-orange-500">Saudi Arabia.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:mt-10">
            Each application is treated as a private journey - curated documents,
            human attention, and steady communication until your visa is in hand.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative min-h-[27rem] overflow-hidden rounded-2xl bg-slate-900 shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

              <div className="relative z-10 flex h-full min-h-[27rem] flex-col justify-between p-7 text-white">
                <span className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.32em] text-white/80 backdrop-blur">
                  {service.tag}
                </span>

                <div>
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Link
                      to="/apply-now"
                      className="rounded-full bg-white px-5 py-3 text-xs font-bold text-[#082b42] transition hover:bg-slate-100"
                    >
                      Apply Now -&gt;
                    </Link>
                    <Link
                      to="/visa-services"
                      aria-label={`View ${service.title}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-[#082b42] transition hover:bg-slate-100"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurVisaServices
