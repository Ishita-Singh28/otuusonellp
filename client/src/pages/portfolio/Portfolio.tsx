import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.scss'
import { Grid, Typography } from '@mui/material'
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner'
import OurRecentWork from '../../components/OurRecentWork/OurRecentWork'
import TalkSection from '../../components/TalkSection/TalkSection'
import axios from 'axios'
import { baseurl } from '../../baseUrl/baseUrl'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState<any>()
    const getPortfolio = async () => {
        const response = await axios.get(`${baseurl}/portfolio`)
        const data = response?.data?.portfolio

        setPortfolio(data)
        if (data) {
            setPortfolio(data)
        }
    }
    useEffect(() => {
        getPortfolio()
    }, [])
    return (
        <Grid className={styles.portfolioContainer}>
            <PortfolioBanner />
            <OurRecentWork portfolio={portfolio} />
            <TalkSection />
        </Grid>
    )
}

export default Portfolio