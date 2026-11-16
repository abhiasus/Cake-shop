import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Categories from './components/Categories'
import BestSellers from './components/BestSellers'
import CustomBanner from './components/CustomBanner'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <Categories />
      <BestSellers />
      <CustomBanner />
      <Footer />
    </>
  )
}