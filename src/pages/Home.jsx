import HeroSection from '../components/homepage/HeroSection.jsx'
import AboutUs from '../components/homepage/AboutUs.jsx'
import HowItWorks from '../components/homepage/HowItWorks.jsx'
import OurVisaServices from '../components/homepage/OurVisaServices.jsx'
import WhyChooseUs from '../components/homepage/WhyChooseUs.jsx'

function Home() {
  return (
    <>
      <HeroSection />
      <OurVisaServices />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
    </>
  )
}

export default Home
