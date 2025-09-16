import React from 'react'
import '../../style.css'
import styles from './CommonBanner.module.scss'
import { Box, Divider, Grid, Typography,useMediaQuery } from '@mui/material'
import img from '../../asserst/img/Otusone banner.png'
import CustomSearch from '../CustomSearch/CustomSearch'
import SimpleButton from '../SimpleButton/SimpleButton'
import { PiArrowFatLineRightFill } from "react-icons/pi";
import HowWeWork from '../HowWeWork/HowWeWork'


const CommonBanner = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Grid className={styles.commonBannerContainer}>
            <Grid className={styles.commonBanner}>
                <Grid className={styles.bgImg}>
                    <img src={img} />
                </Grid>
                <Grid className={styles.bgOpicity}>
                </Grid>
                <Grid className={styles.content}>
                    <Box>
                        <Typography variant='h1' sx={{ paddingInline: 20 }}>Let us handle the IT, so you can focus on soaking up the sunshine</Typography>
                        <Typography>"Crafting Cutting-Edge Solutions for Your Business" encapsulates our commitment to delivering innovative and tailored IT services that propel your business forward. At OTUSONE LLP</Typography>
                        <Box>
                            {/* <CustomSearch /> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
           {!isMobile && <HowWeWork />}

            <Divider sx={{ marginBlock: 3 }} />
        </Grid>
    )
}

export default CommonBanner