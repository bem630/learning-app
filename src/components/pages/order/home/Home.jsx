import React from 'react'
import Banner from './Banner'
import CallToAction from './CallToAction'
import FAQSection from './FAQSection'
import Services from './Services'
import FeaturedCourses from './FeaturedCourses'
import UpcomingEvents from './UpcomingEvents'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Services/>
        <FeaturedCourses/>
        <UpcomingEvents/>
        <CallToAction/>
        <FAQSection/>
    </div>
  )
}
