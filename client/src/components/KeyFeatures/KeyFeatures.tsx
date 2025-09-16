import React from 'react'
import styles from './KeyFeatures.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'

import { data } from './data'

const KeyFeatures = () => {

    return (
        <Grid className={styles.keyFeaturesContainer}>
            <HeadingText
                heading={'Key Features'}
                subHeading={'Elevating Experiences, One Click at a Time.'}
            />
            <Grid className={styles.keyCardContainer}>
                {data.keyCardOne?.map((item: any) => {
                    return (
                        <Grid className={styles.keyCard}>
                            <Box>
                                <img src={item.icon} />

                            </Box>
                            <Box>
                                <Typography variant='h4'>{item.heading}</Typography>
                                <Typography>{item.content}</Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid className={styles.keyCardContainer}>
                {data.keyCardTwo?.map((item: any) => {
                    return (
                        <Grid className={styles.keyCard}>
                            <Box>
                                <img src={item.icon} />

                            </Box>
                            <Box>
                                <Typography variant='h4'>{item.heading}</Typography>
                                <Typography>{item.content}</Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default KeyFeatures