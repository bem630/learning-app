import React from 'react'
import Banner from './Banner'
import CallToAction from './CallToAction'
import FAQSection from './FAQSection'
import Services from './Services'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Services/>
        <CallToAction/>
        <FAQSection/>
    </div>
  )
}
