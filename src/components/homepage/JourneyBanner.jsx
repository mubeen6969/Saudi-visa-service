import { MapPin, Phone, Mail } from 'lucide-react';

export default function JourneyBanner() {
  return (
    <div className="md:w-[40vw] w-full h-full bg-gradient-to-b from-[#135E74] via-[#0E4461] to-[#0A2640] text-white p-8 md:p-10 rounded-[32px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
      {/* Decorative ambient lighting glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Top */}
      <div className="relative z-10">
        <div className="mb-8">
          <p className="text-[#3CD2C5] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Business Lounge
          </p>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-4.5xl font-extrabold leading-tight tracking-tight mb-6">
          Begin your <br />
          <span className="italic font-serif text-[#3CD2C5] font-semibold">
            Saudi
          </span>{' '}
          <br />
          <span className="italic font-serif text-[#3CD2C5] font-semibold">
            Journey.
          </span>
        </h3>

        <p className="text-cyan-100/80 text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-sm">
          Share a few details and a visa consultant will reach out within hours
          to begin your personalized application.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#3CD2C5]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Visa Operations Center
              </p>
              <p className="text-cyan-100/60 text-xs mt-0.5">
                Jeddah - Saudi Arabia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#3CD2C5]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                +966 12 000 0000
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#3CD2C5]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <a
                href="mailto:visa@saudiavisa.com"
                className="text-white text-sm font-semibold hover:text-[#3CD2C5] transition-colors duration-200"
              >
                visa@saudiavisa.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-10 mt-10 md:mt-0 border-t border-white/10 flex items-center justify-between text-xs tracking-wider">
        <div>
          <span className="text-cyan-200/40 text-[9px] uppercase font-bold block mb-1">
            Gate
          </span>
          <span className="text-white font-mono font-bold text-sm tracking-widest">
            A12
          </span>
        </div>

        <div className="text-right">
          <span className="text-cyan-200/40 text-[9px] uppercase font-bold block mb-1">
            Boarding
          </span>
          <span className="text-[#3CD2C5] font-mono font-bold text-sm tracking-widest">
            DAILY
          </span>
        </div>
      </div>
    </div>
  );
}