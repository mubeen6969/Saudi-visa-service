const steps = [
  {
    number: '01',
    title: 'Choose Visa Type',
    text: 'Choose your visa type and submit your application along with the required documents through our secure process.',
  },
  {
    number: '02',
    title: 'We Review & Process',
    text: 'Our experts verify your information, review your documents, and handle the application with professional care.',
  },
  {
    number: '03',
    title: 'Get Updates',
    text: 'Track your application progress and receive ongoing support until your visa process is successfully completed.',
  },
]

const documents = [
  'Valid passport (6+ months)',
  'Supporting documents per visa type',
  'Recent passport photographs',
  'Travel itinerary details',
  'Accommodation confirmation',
  'Vaccination records (if required)',
]

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-[#073657] px-5 py-20 text-white">
        <img
          src="/images/how-it-works-leftbg.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-4 h-72 w-3/5 object-contain object-left-top opacity-45 mix-blend-screen md:h-[28rem]"
        />
        <img
          src="/images/how-it-works-rightbg.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover object-right opacity-30 mix-blend-screen"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/75">
              How Its Works
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight md:text-5xl">
              A Calm Considered{' '}
              <span className="font-extrabold italic">Three-Steps Path.</span>
            </h2>

            <div className="mt-14 rounded-2xl border-4 border-sky-300 bg-white p-9 text-[#082b42] shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-400">
                Required Documents
              </p>
              <h3 className="mt-5 text-4xl font-semibold leading-tight">
                Everything You Need,{' '}
                <span className="font-extrabold italic text-orange-500">
                  Prepared Correctly.
                </span>
              </h3>

              <div className="mt-9 grid gap-8 md:grid-cols-[1fr_0.72fr] md:items-end">
                <ul className="space-y-4 text-sm font-semibold text-slate-600">
                  {documents.map((document) => (
                    <li key={document} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                        +
                      </span>
                      {document}
                    </li>
                  ))}
                </ul>

                <img
                  src="/images/required-documents.png"
                  alt="Required Saudi visa documents"
                  className="ml-auto w-full max-w-48 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:pt-16">
            <p className="max-w-2xl text-lg font-medium leading-8 text-white/85">
              Our streamlined process is designed to guide you through every stage,
              from application submission to final updates, with professional support
              and complete transparency.
            </p>

            <div className="relative mt-16 max-w-2xl">
              <div className="absolute left-9 top-12 hidden h-[21rem] w-px bg-white/60 md:block" />

              <div className="space-y-14">
                {steps.map((step) => (
                  <div key={step.number} className="relative grid gap-6 md:grid-cols-[5rem_1fr]">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-sky-700 text-3xl font-extrabold shadow-lg">
                      {step.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
