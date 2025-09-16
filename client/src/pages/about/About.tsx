import React from 'react'
import styles from './About.module.scss'
import { Grid } from '@mui/material'
import AboutBanner from '../../components/About/AboutBanner/AboutBanner'
import WelcomeToOtusone from '../../components/About/WelcomeToOtusone/WelcomeToOtusone'
import WhyChoose from '../../components/About/WhyChoose/WhyChoose'
import OurTeam from '../../components/About/OurTeam/OurTeam'
import NewWorkAbout from '../../components/NewWorkAbout/NewWorkAbout'
import CustomerSays from '../../components/About/CustomerSays/CustomerSays'
import OurTechnology from '../../components/Technology/OurTechnology'


const About = () => {

    return (
        <Grid className={styles.aboutContainer}>
            <AboutBanner />
            <WelcomeToOtusone />
            <WhyChoose />
            {/* <OurTeam /> */}
            <NewWorkAbout />
            {/* <OurTechnology/> */}
            <CustomerSays />
        </Grid>
    )
}

export default About