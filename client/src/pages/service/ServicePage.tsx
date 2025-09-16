import React, { Fragment } from 'react'
import styles from './ServicePage.module.scss'
import { Grid, Typography } from '@mui/material'
import ServiceBanner from '../../components/Service/ServiceBanner/ServiceBanner'
import WeProvides from '../../components/Service/WeProvides/WeProvides'
import FeatureService from '../../components/Service/FeatureService/FeatureService'
import WhyChoose from '../../components/Service/WhyChoose/WhyChoose'
import BringingIdiea from '../../components/Service/BringingIdiea/BringingIdiea'
import TalkSection from '../../components/TalkSection/TalkSection'
import WhyUs from '../../components/WhyUs/WhyUs'

const ServicePage = () => {
    return (
        <Fragment>
            <Grid className={styles.servicePage}>
                <ServiceBanner />
                {/* <WhyUs/> */}
                <FeatureService />
                {/* <WeProvides /> */}
                <WhyChoose />
                {/* <BringingIdiea /> */}
            </Grid>
            <TalkSection />
        </Fragment>
    )
}

export default ServicePage