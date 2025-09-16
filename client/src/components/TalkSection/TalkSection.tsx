import React from 'react'
import styles from './TalkSection.module.scss'
import { Grid, Typography } from '@mui/material'
import CustomButton from '../customButton/CustomButton'
import { useNavigate } from 'react-router-dom'

const TalkSection = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        navigation('/about');
        window.scroll(0, 0)
    }

    return (
        <Grid container className={styles.TalkSectionContainer}>
            <Grid item sm={6}>
                <Typography variant='h4' fontSize={20} fontWeight={600}>Do you have a concept you'd like to <br /> bring to life?</Typography>
                <Typography fontSize={13}>
                    Let's work together to execute and realize your idea.
                </Typography>
            </Grid>
            <Grid item sm={6}>
                <CustomButton name={"Let's talk"} handleClick={() => window.location.href = 'https://wa.me/9340312713'} />
                <CustomButton name={'Learn more'} handleClick={handleClick} />
            </Grid>
        </Grid>
    )
}

export default TalkSection