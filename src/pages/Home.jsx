import HeroSection from '../components/homepage/HeroSection.jsx'
import AboutUs from '../components/homepage/AboutUs.jsx'
import HowItWorks from '../components/homepage/HowItWorks.jsx'
import OurVisaServices from '../components/homepage/OurVisaServices.jsx'
import WhyChooseUs from '../components/homepage/WhyChooseUs.jsx'
import Testimonials from '../components/homepage/Testimonials.jsx'
import JourneyBanner from '../components/homepage/JourneyBanner.jsx'
import VisaForm from '../components/homepage/VisaForm.jsx'
function Home() {
  return (
    <>
      <HeroSection />
      <OurVisaServices />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials/>
      <div className='flex w-[90vw] m-auto justify-between md:flex-row flex-col'>
      <JourneyBanner/>
      <VisaForm/>
      </div>
    </>
  )
}

export default Home
