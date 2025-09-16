import React from 'react'
import { Grid, Typography } from '@mui/material'
import styles from './HeadingText.module.scss'

export interface IHeadingText {
    heading: string;
    span?: string
    subHeading: string;
}
const HeadingText = ({ heading, span, subHeading }: IHeadingText) => {
    return (
        <Grid className={styles.headingTextContainer}>
            <Typography variant='h2'>{heading}</Typography>
            <Typography variant='h2'>{span}</Typography>
            <Typography>{subHeading}</Typography>
        </Grid>
    )
}

export default HeadingText