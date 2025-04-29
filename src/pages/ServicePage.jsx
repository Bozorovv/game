import React from 'react'
import ServiceHero from '../component/ServiceHero'
import ServiceMain from '../component/ServiceMain'
import ServiceBanner from '../component/ServiceBanner'
import ServiceBanner2 from '../component/ServiceBanner2'
import ServiceBanne3 from '../component/serviceBanner3'
import ServiceInfo from '../component/ServiceInfo'

function ServicePage() {
  return (
    <div>
      <ServiceHero />
      <ServiceMain />
      <ServiceBanner />
      <ServiceBanner2 />
      <ServiceBanne3 />
      <ServiceInfo />
    </div>
  )
}

export default ServicePage
