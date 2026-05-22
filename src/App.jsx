import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import StatsRow from './sections/StatsRow'
import Products from './sections/Products'
import Features from './sections/Features'
import Innovation from './sections/Innovation'
import Gallery from './sections/Gallery'
import Specs from './sections/Specs'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <StatsRow />
          <Products />
          <Features />
          <Innovation />
          <Gallery />
          <Specs />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
