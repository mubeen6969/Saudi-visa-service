// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Testimonials


import { MessageSquare, Quote } from 'lucide-react';

const INITIAL_TESTIMONIALS = [
  {
    id: '1',
    name: 'Ayesha R.',
    role: 'Umrah Applicant',
    text: 'Their guidance made the entire process feel calm. Every document was reviewed with care, ensuring zero delays in my Umrah visa processing.',
    avatarChar: 'A',
    avatarBg: 'bg-gradient-to-br from-[#1E5F74] to-[#0D9488]',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mohammed K.',
    role: 'Tourist Visa',
    text: 'Responsive, clear, and incredibly professional. I knew exactly what to do at every step. My tourist visa was issued faster than I expected!',
    avatarChar: 'M',
    avatarBg: 'bg-gradient-to-br from-[#1B365D] to-[#1E5F74]',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatima S.',
    role: 'Hajj Applicant',
    text: "The most reassuring service I've experienced. They treated my application with real respect, helping my family secure our coordinates.",
    avatarChar: 'F',
    avatarBg: 'bg-gradient-to-br from-[#2D3748] to-[#1B365D]',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials-section"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-white"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 opacity-[0.25] pointer-events-none mix-blend-multiply bg-no-repeat bg-left bg-contain"
        style={{
          backgroundImage: "url('/src/assets/images/pilgrims_bg_1781088916326.png')",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#E06A3B] text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase font-display mb-3">
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-[#1B365D] font-display">
            What Ours{' '}
            <span className="italic font-serif text-[#E06A3B] font-semibold pr-1">
              Customers
            </span>{' '}
            <span className="italic font-serif text-[#E06A3B] font-semibold">
              Says.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch pt-4">
          {INITIAL_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_-15px_rgba(11,60,93,0.08)] border border-[#F5EFEB] hover:border-[#E06A3B]/30 hover:shadow-[0_20px_50px_-12px_rgba(224,106,59,0.1)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="mb-6 flex">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#E06A3B] group-hover:bg-[#E06A3B] group-hover:text-white transition-colors duration-300">
                  <span className="text-3xl font-serif font-bold leading-none select-none">
                    “
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-[#4B5E70] text-[15px] leading-relaxed font-sans font-medium mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#F5EFEB] mt-auto">
                <div
                  className={`w-11 h-11 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold font-sans text-sm shadow-sm flex-shrink-0`}
                >
                  {item.avatarChar}
                </div>

                <div className="leading-tight">
                  <h4 className="font-bold text-[#1B365D] font-sans text-[15px]">
                    {item.name}
                  </h4>

                  <p className="text-[#8A9BA8] font-sans text-xs mt-0.5 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}