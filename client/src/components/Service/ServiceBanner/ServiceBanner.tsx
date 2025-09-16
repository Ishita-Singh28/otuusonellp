import React from 'react'
import styles from './ServiceBanner.module.scss'
import { Grid, Typography } from '@mui/material'
import img from '../../../asserst/img/Otusone banner.png'
import CustomSearch from '../../CustomSearch/CustomSearch'

const ServiceBanner = () => {
    const service = ["App", "Website", "SEO", "Graphic", "Ecomm..", "Digital"]
    return (
        <Grid className={styles.serviceBanner}>
            <Grid className={styles.image}>
                <img src={img} alt='banner' />
            </Grid>
            <Grid className={styles.opecity}></Grid>
            <Grid className={styles.content}>
                <Typography textAlign={"center"} variant='h2' fontSize={42} fontWeight={700}>HELPING</Typography>
                <Typography textAlign={"center"} variant='h2' fontSize={42} fontWeight={700}>YOUR BUSINESS GROW </Typography>
                <Typography textAlign={"center"} variant='h5'>Fueling Your Business Growth: Our Commitment, Your Success.</Typography>
                {/* <CustomSearch /> */}
                <Grid className={styles.service}>
                    {service.map((item) => {
                        return (
                            <Typography variant='h5'>{item}</Typography>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ServiceBanner