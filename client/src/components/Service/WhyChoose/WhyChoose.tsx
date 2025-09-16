import React from 'react'
import styles from './WhyChoose.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { whyChoose } from '../data'
import icon from '../../../asserst/icons/growth.svg'

function WhyChoose() {
    return (
        <Grid className={styles.whyChooseContainer}>
            <HeadingText
                heading={'Why Choose OTUSONE LLP for your Big ideas'}
                subHeading={'OTUSONE LLP: Where Big Ideas Find Expert Support.'}
            />
            <Grid className={styles.whyChoose}>
                <Grid className={styles.card}>
                    {
                        whyChoose.map((item) => {
                            return (
                                <Grid>
                                    <Box>
                                        <img src={item.icon} width={60}/>
                                    </Box>
                                    <Box>
                                        <Typography variant='h4' fontSize={18} fontWeight={700}>{item.heading}</Typography>
                                        <Typography variant='h5'>{item.desc}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhyChoose