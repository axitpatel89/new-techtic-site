import React from 'react'
import { SiteLayout } from '../components/Layout'
import ServiceGrid from '../components/ServicePage/ServiceGrid'
import ServiceIntro from '../components/ServicePage/ServiceIntro'

const Services = () => {
    return (
        <SiteLayout>
            <ServiceIntro />
            <ServiceGrid />
        </SiteLayout>
    )
}

export default Services