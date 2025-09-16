import React from 'react'
import styles from './PortfolioBanner.module.scss'
import { Grid, Typography } from '@mui/material'

const PortfolioBanner = () => {
    return (
        <Grid className={styles.portfolioBanner}>
            <Typography textAlign={"center"} variant='h2' fontSize={36} fontWeight={600}>Our Portfolio</Typography>
            <Typography textAlign={"center"}>Explore the diverse portfolio of OTUSONE LLP, showcasing our expertise across a range of industries and projects:</Typography>
        </Grid>
    )
}

export default PortfolioBanner