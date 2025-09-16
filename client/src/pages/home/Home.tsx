import React from 'react'
import styles from './Home.module.scss'
import { Grid,useMediaQuery } from '@mui/material'
import CommonBanner from '../../components/commonBanner/CommonBanner'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import OurExpertise from '../../components/OurExpertise/OurExpertise'
import TruestedBy from '../../components/TruestedBy/TruestedBy'
import TalkSection from '../../components/TalkSection/TalkSection'
import WorkAbout from '../../components/WorkAbout/WorkAbout'
import CounterList from '../../components/CounterList/CounterList'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import Testimonial from '../../components/Testimonial/Testimonial'
import NewWorkAbout from '../../components/NewWorkAbout/NewWorkAbout'
import HowWeWork from '../../components/HowWeWork/HowWeWork'



const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Grid className={styles.homeContainer}>
            <CommonBanner />
            <KeyFeatures />
            <WelcomeSection />
            <OurExpertise />
            {isMobile && <HowWeWork />}
            <TruestedBy />
            <TalkSection />
            {/* <NewWorkAbout /> */}
            <WorkAbout />
            {/* <SpecialOffer /> */}   
            <Testimonial />
        </Grid>
    )
}

export default Home