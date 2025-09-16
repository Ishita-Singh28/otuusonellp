import React from 'react'
import styles from './CareerBanner.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import img from '../../asserst/img/career.png'
import CustomSearch from '../CustomSearch/CustomSearch'
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { TfiArrowCircleDown } from "react-icons/tfi";


const PlayCircleIcon = FaRegPlayCircle as React.FC<React.SVGProps<SVGSVGElement>>;
const ArrowCircleDown = TfiArrowCircleDown as React.FC<React.SVGProps<SVGSVGElement>>;


const CareerBanner = () => {
    return (
        <Grid className={styles.careerBannerContainer}>
            <Grid className={styles.bgImage}>
                <img alt="img" src={img} />
            </Grid>
            <Grid className={styles.content}>
                <Typography variant='h2' fontSize={55} fontWeight={600}>Career</Typography>
                <Typography fontSize={12} sx={{ color: "#ff0000", marginBlock: 1 }}>JOIN WITH US...</Typography>
                <Typography variant='h2' fontSize={38} fontWeight={700} lineHeight={1.5}>Building OTUSONE LLP  Together</Typography>
                {/* <CustomSearch /> */}
                <Box display={"flex"} justifyContent={"center"}>
                    {/* <FaRegPlayCircle fontSize={14} style={{ marginInlineEnd: 6, color: "#6E1B5D" }} /> */}
                    <PlayCircleIcon fontSize={14} style={{ marginInlineEnd: 6, color: "#6E1B5D" }} />
                    <Typography fontSize={13} sx={{ color: "#6E1B5D" }}>Find Your Dream Job</Typography>
                </Box>
            </Grid>
            <ArrowCircleDown fontSize={25} style={{ color: "#6E1B5D" }} />
        </Grid>
    )
}

export default CareerBanner