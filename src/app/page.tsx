import React from 'react'
import HeroSection from './home-sections/HeroSection'
import AboutSection from './home-sections/AboutSection'
import ServiceSection from './home-sections/ServiceSection'
import PortfolioSection from './home-sections/PortfolioSection'
import FAQSection from '../components/FAQSection'
import BackToTop from '../components/BackToTop'
import TestimonialsCard from '../components/TestimonialsCard'
import FreelancerSection from './home-sections/FreelancerSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <FreelancerSection/>

      {/* FAQ Section */}
      <section className='section'>
        <FAQSection/>
      </section>

      {/* Testimonials Section */}
      <section className='section'>
        <TestimonialsCard/>
      </section>

      {/* Back to top button */}
      <BackToTop />
    </>
  )
}

export default Home