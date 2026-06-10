import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-24 text-[#082b42]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <img
            src="/images/aboutus-leftimg.png"
            alt="Saudi visa travel support"
            className="w-full max-w-xl object-contain"
          />
        </div>

        <div className="relative min-h-[28rem]">
          <img
            src="/images/aboutus-rightimg.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-0 z-0 hidden w-[42rem] max-w-none object-contain opacity-25 lg:block"
          />

          <div className="relative z-10 max-w-xl pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
              About Us
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Turning Saudi Travel{' '}
              <span className="font-bold italic text-orange-500">Plans Into Reality.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              From the moment you decide to visit Saudi Arabia, we are here to help.
              Whether you are travelling for Umrah, Hajj, tourism, business, or family
              visits, our dedicated team guides you through every stage of the visa
              process, ensuring a smooth and hassle-free experience from application
              to approval.
            </p>
            <Link
              to="/apply-now"
              className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-sky-700"
            >
              Begin Your Journey -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
