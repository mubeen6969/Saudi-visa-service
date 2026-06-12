import { ArrowRight, Phone, Mail, Clock, Compass } from 'lucide-react';



export default function Footer({ onBeginJourneyClick }) {
    return (
        <footer id="footer-section" className="relative text-white overflow-hidden rounded-tl-[40px] rounded-tr-[40px] mt-6 bg-black">

            {/* Background Image with Dark Gradient Overlays for High Contrast */}
            <img
                src="/images/footerbgimage.png"
                alt="Riyadh Sunset Skyline background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten pointer-events-none"
                referrerPolicy="no-referrer"
            />


            {/* Main Container */}
            <div className="relative z-10 w-[90vw] mx-auto px-6 md:px-11 lg:px-11 pt-28 pb-12">

                {/* UPPER CALL TO ACTION BLOCK */}
                <div className="mb-20 max-w-2xl">
                    <p className="text-[11px] md:text-xs font-light tracking-[0.25em] uppercase font-display mb-3">
                        NOW DEPARTING
                    </p>
                    <h2 className=" text-4xl md:text-5xl lg:text-6xl  tracking-tight leading-[1.1] mb-6">
                        Your Saudi <br />
                        Journey <span className="tracking-widest   font-semibold">Begins Here.</span>
                    </h2>
                    <p className="text-white/85 text-2xl md:text-[23px] leading-relaxed mb-8 max-w-xl font-normal">
                        Whether you travel for sacred rites or to discover the Kingdom — we'll prepare every document so all that's left is the flight.
                    </p>

                    <button
                        onClick={onBeginJourneyClick}
                        className="inline-flex items-center gap-3.5 bg-white hover:bg-[#3CD2C5] text-[#1B365D] hover:text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm font-display group uppercase tracking-wider"
                    >
                        Begin Your Journey
                        <ArrowRight className="w-4.5 h-4.5 text-[#1B365D] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                    </button>
                </div>

                {/* MIDDLE FOOTER COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pt-12 border-t border-white/10 mb-12">

                    {/* Column 1: Caligraphy Icon Brand */}
                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-baseline gap-2.5">
                            {/* <span className="font-serif italic text-3xl md:text-4.5xl text-white font-bold tracking-tight select-none leading-none">
                                S<span className="text-[#3CD2C5] font-serif">a</span>u<span className="text-[#3CD2C5] font-serif">d</span>i
                            </span>
                            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-cyan-200/70 font-display block">
                                Visa Service
                            </span> */}
                            <img src="/images/logo.png" alt="" />
                        </div>

                        <p className="text-[#A2BACF] text-[14px] leading-relaxed max-w-xs font-medium">
                            Providing reliable, transparent, and hassle-free Saudi visa services.
                        </p>
                    </div>

                    {/* Column 2: Page directory links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">
                            Page
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#A2BACF] font-medium">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
                            </li>
                            <li>
                                <a href="#apply-section" className="hover:text-white transition-colors duration-200">About</a>
                            </li>
                            <li>
                                <a href="#apply-section" className="hover:text-white transition-colors duration-200">Services</a>
                            </li>
                            <li>
                                <a href="#status-check" className="hover:text-white transition-colors duration-200">Process</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Direct Navigation Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">
                            Link Direct
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#A2BACF] font-medium">
                            <li>
                                <a href="#apply-section" className="hover:text-white transition-colors duration-200">Help Centre</a>
                            </li>
                            <li>
                                <a href="#status-check" className="hover:text-white transition-colors duration-200">FAQ</a>
                            </li>
                            <li>
                                <a href="#apply-section" className="hover:text-white transition-colors duration-200">Term & Condition</a>
                            </li>
                            <li>
                                <a href="#apply-section" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact details */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">
                            Contact Info
                        </h4>
                        <ul className="space-y-3.5 text-sm text-[#A2BACF] font-medium">
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#3CD2C5]" />
                                <a href="tel:5205772710" className="hover:text-white transition-colors duration-200">
                                    (520) 577 2710
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#3CD2C5]" />
                                <a href="mailto:saudivisaservice@gmail.com" className="hover:text-white transition-colors duration-200 break-all">
                                    saudivisaservice@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Clock className="w-4 h-4 text-[#3CD2C5] mt-0.5 flex-shrink-0" />
                                <span>Mon - Fri: 7:30am - 5:30pm</span>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
                {/* BOTTOM COPYRIGHT ROW */}
                <div className="bg-linear-to-r from-[#3CA5D4] to-[#0E3254] h-18 w-full pt-8 border-t border-white/5   gap-4 text-xs text-white font-thin ">
                 <div className="flex justify-between w-[90vw] m-auto">
                       <p>© 2026 Saudia Visa Services. All rights reserved.</p>
                    <div className="flex gap-6 ">
                        <a href="#apply-section" className="hover:text-white transition-all">Services</a>
                        <a href="#status-check" className="hover:text-white transition-all">Process</a>
                        <a href="#apply-section" className="hover:text-white transition-all">Contact</a>
                    </div>
                 </div>
                </div>
        </footer>
    );
}
