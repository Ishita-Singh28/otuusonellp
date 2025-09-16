import React, { useState } from 'react'
import styles from './CustomerSays.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { customerSays } from '../data'
import star from '../../../asserst/icons/Star.svg'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const StarIcon = FaStar as React.FC<React.SVGProps<SVGSVGElement>>;


const CustomerSays = () => {
    const navigation = useNavigate()
    const [serviceName, setServiceName] = useState("Intgrow")
    const handleClick = (heading: any) => {
        setServiceName(heading)
    };
    const handleNavigate = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Grid className={styles.customerSaysContainer}>
            <HeadingText
                heading={'Customer says about Otusone LLP'}
                subHeading={`Here's what a customer  say about their experience with us:`}
            />
            <Grid className={styles.customerSays}>
                <Grid className={styles.cardContainer}>
                    {customerSays.map((item) => {
                        return (
                            <Grid onClick={(() => handleClick(item.label))} className={styles.card} >
                                <img src={item.image} />
                                <Typography variant='h4' fontSize={16} fontWeight={700}>{item.label}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid className={styles.mesContainer}>
                    {customerSays.filter((item) => item.label === serviceName)
                        .map((item) => {
                            return (
                                <Grid>
                                    <Typography variant='h4' fontSize={16} fontWeight={700}>{item.label}</Typography>
                                    <Box display={"flex"} sx={{ marginBlock: 1.8 }}>
                                        <StarIcon style={{ color: "#FFE234" }} />
                                        <StarIcon style={{ color: "#FFE234" }} />
                                        <StarIcon style={{ color: "#FFE234" }} />
                                        <StarIcon style={{ color: "#FFE234" }} />
                                        <StarIcon style={{ color: "#FFE234" }} />
                                    </Box>

                                    <Box>{item?.mes?.map((item) => {
                                        return (
                                            <Typography>{item.message}</Typography>
                                        )
                                    })}</Box>
                                </Grid>
                            )
                        })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomerSays