import React from 'react'
import styles from './WelcomeSection.module.scss'
import { Grid, Typography } from '@mui/material'
import img from '../../asserst/img/home_welcome.png'
import CustomButton from '../customButton/CustomButton'
import { useNavigate } from 'react-router-dom'

const WelcomeSection = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Grid container className={styles.welcomeSectionContainer}>
            <Grid item sm={5}>
                <img src={img} alt='img' />

            </Grid>
            <Grid item sm={7}>
                <Typography variant='h5' fontSize={15} fontWeight={600}>Welcome</Typography>
                <Typography variant='h2' fontSize={28} fontWeight={700}>We are a creative agency</Typography>
                <Typography>At OTUSONE, we specialize in cutting-edge technologies that shape the future and act as catalysts for efficient service transformation for our clients. We are a pioneering firm in software development, offering dedicated services in iOS and Android mobile application development, website development, and digital marketing solutions. Our focus is on assisting you throughout the entire process, from conceptualization and design to programming, execution, testing, and bug fixing. Trust OTUSONE to help you scale and enhance your applications.
                </Typography>
                <CustomButton name={'More About us'} handleClick={() => { navigation('/about'); handleClick() }} />
            </Grid>
        </Grid>
    )
}

export default WelcomeSection