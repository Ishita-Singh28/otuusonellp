import React, { useState } from 'react'
import styles from './OurExpertise.module.scss'
import { Box, Button, Grid, Typography } from '@mui/material'
import { FaArrowRightLong } from "react-icons/fa6";
import { expertise, appService } from './data'
import img from '../../asserst/img/app development.png'
import { FaArrowUpLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ArrowUpLongIcon = FaArrowUpLong as React.FC<React.SVGProps<SVGSVGElement>>;
const ArrowRightLongIcon = FaArrowRightLong as React.FC<React.SVGProps<SVGSVGElement>>;


const OurExpertise = () => {
    const navigation = useNavigate()
    const [serviceName, setServiceName] = useState("Web Development")
    const handleClick = (heading: any) => {
        setServiceName(heading)
    };
    const handleNavigate = () => {
        window.scrollTo(0, 0)
    }


    return (
        <Grid container className={styles.ourExpertiseContainer}>
            <Grid >
                <Typography variant='h2' fontSize={28} fontWeight={700} >Our Expertise</Typography>
                <Typography>Elevate your business through our Service.We provide solutions that align with your goals and aspirations.</Typography>
                <Grid container>
                    {expertise
                        .map((item: any) => {
                            return (
                                <Grid onClick={(() => handleClick(item.label))} className={`${styles.expertiseCard} ${item.label === serviceName ? styles.active : styles.inactive}`} sx={{ cursor: "pointer" }}>
                                    <Typography variant='h2' fontSize={18} fontWeight={600}>{item.label}</Typography>
                                    <Typography><ArrowRightLongIcon fontSize={14} /></Typography>
                                </Grid>
                            )
                        })}
                </Grid>
            </Grid>
            <Grid>
                {expertise.filter((item) => item.label === serviceName)
                    .map((item) => {
                        return (
                            <Grid className={styles.serviceContainer}>
                                <Typography variant='h2' fontSize={28} fontWeight={700}>{item.label}</Typography>
                                <Grid container className={styles.serviceIcon}>
                                    {item?.icons?.map((item) => {
                                        return (
                                            <Grid className={styles.appCard}>
                                                <Box>
                                                    <img alt='' src={item.icon} />
                                                </Box>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid className={styles.serviceInfo}>
                                    <img alt='' src={item.img} />
                                    <Grid className={styles.serviceSpecification}>

                                    </Grid>

                                    <Typography variant='h5'>
                                        {item.desc}
                                    </Typography>
                                    <Box>
                                        <Button variant="outlined" onClick={() => { navigation('/service'); handleNavigate() }}>Learn more</Button>
                                        <Box>
                                            <ArrowUpLongIcon />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        )
                    })}
            </Grid>
        </Grid>
    )
}

export default OurExpertise