import React, { useState } from 'react'
import styles from './FeatureService.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { featureService } from '../data'
import { MdDashboard } from "react-icons/md";


const FeatureService = () => {
    const [hoveredDiv, setHoveredDiv] = useState(null);

    const handleMouseEnter = (divNumber: any) => {
        console.log(divNumber, "divNumber...")
        setHoveredDiv(divNumber);
    };

    const handleMouseLeave = () => {
        setHoveredDiv(null);
    };

    return (
        <Grid className={styles.featureServiceContainer}>
            <HeadingText
                heading={'Our Features Service'}
                subHeading={'Unlocking Potential: Our Comprehensive Features Service for Your Success'}
            />
            <Grid container spacing={2} className={styles.featureService}>
                {featureService.map((item) => {
                    return (
                        <Grid item sm={4} className={styles.featureCard}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={item.img} alt='' />
                            <Grid className={styles.featureCardInfo}>
                                <Typography variant='h4' fontSize={21} fontWeight={700}>{item.heading}</Typography>
                                <Typography variant='h5'>{hoveredDiv === item.id ? item.desc : `${item.desc.slice(0, 120)}...`}</Typography>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default FeatureService