
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import ApplyNow from './pages/ApplyNow.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Process from './pages/Process.jsx'
import VisaServices from './pages/VisaServices.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Footer from './components/homepage/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/process" element={<Process />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply-now" element={<ApplyNow />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
