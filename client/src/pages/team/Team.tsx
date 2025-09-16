import React from 'react'
import styles from './Team.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../../components/HeadingText/HeadingText'

const Team = () => {
    return (
        <Grid className={styles.teamContainer}>
            <HeadingText
                heading={'OUR TEAM'}
                subHeading={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem adipisci asperiores voluptatum ex sequi vero, eveniet atque repudiandae officiis eum quis et saepe esse consectetur nemo cumque dolore velit libero?'}
            />
        </Grid>
    )
}

export default Team