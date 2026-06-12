import { Link } from 'react-router-dom'

const features = [
  {
    number: '01',
    title: 'Professional Guidance',
    text: 'Senior advisors walk you through every requirement, in plain language.',
    position: 'lg:left-4 lg:top-32',
  },
  {
    number: '02',
    title: 'Application Accuracy',
    text: 'Every detail, every document, reviewed before it ever leaves your hands.',
    position: 'lg:left-48 lg:top-60',
  },
  {
    number: '03',
    title: 'Dedicated Support',
    text: 'One point of contact from the first message to the moment your visa lands.',
    position: 'lg:right-4 lg:top-32',
  },
  {
    number: '04',
    title: 'Fast Communication',
    text: 'Replies measured in hours, not days - across every step.',
    position: 'lg:right-48 lg:top-60',
  },
]

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-8 text-[#082b42]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Stamped With Trust{' '}
            <span className="font-bold italic text-primary">And Quite Precision.</span>
          </h2>
        </div>

        <div className="relative mt-12 min-h-[39rem]">
          <div className="grid gap-5 md:grid-cols-2 lg:block">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`relative z-20 overflow-hidden rounded-xl bg-white/95 p-5 shadow-[0_12px_35px_rgba(230,101,54,0.16)] ring-1 ring-orange-100 lg:absolute lg:w-72 ${feature.position}`}
              >
                <span className="pointer-events-none absolute -right-2 -top-5 text-7xl font-black text-orange-500/10">
                  {feature.number}
                </span>
                <h3 className="relative text-base font-bold text-[#16435a]">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-xs leading-5 text-slate-500">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>

          <img
            src="/images/whychoseus-bgimg.png"
            alt="Saudi visa service airplane"
            className="absolute bottom-24 left-1/2 z-10 w-[92rem] max-w-none -translate-x-1/2 object-contain"
          />

          <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-3xl -translate-x-1/2 text-center">
            <p className="mx-auto max-w-2xl text-sm font-medium leading-6 text-slate-500">
              We treat visa applications the way private banks treat portfolios -
              with care, discretion, and unmistakable attention to detail.
            </p>
            <Link
              to="/apply-now"
              className="mt-6 inline-flex rounded-full bg-sky-600 px-7 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-sky-700"
            >
              Apply For Visa Service -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
