import { Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './BringingIdiea.module.scss'
import HeadingText from '../../HeadingText/HeadingText'
import { ideaOne, ideaOne2 } from '../data'


const BringingIdiea = () => {
    return (
        <Grid className={styles.bringingIdieaContainer}>
            <HeadingText
                heading={'BRINGING YOUR IDEAS TO LIVE'}
                subHeading={'"From concept to creation, we specialize in bringing your ideas to life. With our expertise and dedication, we turn your visions into tangible successes, empowering you to thrive in your endeavors."'}
            />
            <Grid className={styles.bringingIdiea}>
                <Grid className={styles.bringingIdieaCard}>
                    {ideaOne.map((item) => {
                        return (
                            <Grid>
                                <img src={item.img} />
                                <Typography variant='h4' fontSize={21} fontWeight={700}>{item.heading}</Typography>
                                <Typography variant='h5'>{item.desc}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid className={styles.bringingIdieaCard}>
                    {ideaOne2.map((item) => {
                        return (
                            <Grid>
                                <img src={item.img} />
                                <Typography variant='h4' fontSize={21} fontWeight={700}>{item.heading}</Typography>
                                <Typography variant='h5'>{item.desc}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BringingIdiea