import React from 'react'
import styles from './WorkAbout.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import img1 from '../../asserst/img/1.png'
import img2 from '../../asserst/img/2.png'
import img3 from '../../asserst/img/3.png'
import fill from '../../asserst/img/Fill 1.png'

const WorkAbout = () => {
    const data = [
        {
            "id": 1,
            "number": "200",
            "name": 'Trusted partner'
        },
        {
            "id": 1,
            "number": "200",
            "name": 'Trusted partner'
        }, {
            "id": 1,
            "number": "200",
            "name": 'Trusted partner'
        },
    ]
    return (
        <Grid className={styles.WorkAboutContainer}>
            <Typography variant='h5' fontSize={16} fontWeight={500}>WORKS ABOUT</Typography>
            <Typography variant='h4' fontSize={22} fontWeight={400}>We understand the workings behind repeated business failures and can help identify the root causes. Let's improve your business together.</Typography>
            <Grid container>
                <Grid >
                    <img alt='' src={img1} />
                </Grid>
                <Grid >
                    <Box>
                        <Box><img alt='' src={img2} /></Box>
                        <Box><img alt='' src={img3} /></Box>
                    </Box>
                    <Box>
                        <img alt='' src={fill} />
                    </Box>
                    <Typography>We possess insight into the operational dynamics contributing to recurring business failures. Our expertise allows us to discern underlying issues and devise strategies for improvement. Let's collaborate to diagnose the challenges and implement effective solutions, ensuring sustained success and growth for your business endeavors.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WorkAbout