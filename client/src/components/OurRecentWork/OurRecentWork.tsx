import React, { useState } from 'react'
import styles from './OurRecentWork.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from '../customButton/CustomButton';
import { Link } from 'react-router-dom';

const ArrowForwardIcon = IoIosArrowForward as React.FC<React.SVGProps<SVGSVGElement>>;


export interface IOurRecentWork {
    portfolio: any
}
const OurRecentWork = ({ portfolio }: IOurRecentWork) => {
    const [isSeeAll, setIsSeeAll] = useState(false)

    const formattedHeading = (heading: any) => {
        return heading.toLowerCase().replace(/\s+/g, '-')
    }
    const handleSeeAll = () => {
        setIsSeeAll(!isSeeAll)
    }
    return (
        <Grid className={styles.ourRecentWorkContainer}>
            <Grid className={styles.ourRecentWork}>
                <Typography variant='h5' fontSize={15} fontWeight={500}>Portfolio</Typography>
                <Typography variant='h4' fontSize={26} fontWeight={700}>Our recent works</Typography>
                <Typography>Here are some of our recent works at OTUSONE LLP, showcasing our commitment to excellence and innovation: </Typography>
            </Grid>
            <Grid container className={styles.recentWorkCard}>
                {portfolio && portfolio?.slice(0, 3).map((item: any) => {
                    return (
                        <Grid item sm={4} key={item._id}>
                            <img src={item.image} />
                            <Typography variant='h4' fontSize={20} fontWeight={600}>{item.heading}</Typography>
                            <Typography dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 120) + `...` }}></Typography>

                            <Box display={"flex"}>
                                <Link to={`/portfolio/${formattedHeading(item.heading)}`}>
                                    <Typography variant='h5' fontSize={15} fontWeight={500}>Read more</Typography>
                                </Link>
                                <ArrowForwardIcon fontSize={20} />
                            </Box>
                        </Grid>
                    )
                })}
                {isSeeAll &&
                    <>
                        {portfolio && portfolio?.slice(3, 20).map((item: any) => {
                            return (
                                <Grid item sm={4} key={item._id}>
                                    <img src={item.image} />
                                    <Typography variant='h4' fontSize={20} fontWeight={600}>{item.heading}</Typography>
                                    <Typography dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 120) + `...` }}></Typography>

                                    <Box display={"flex"}>
                                        <Link to={`/portfolio/${formattedHeading(item.heading)}`}>
                                            <Typography variant='h5' fontSize={15} fontWeight={500}>Read more</Typography>
                                        </Link>
                                        <ArrowForwardIcon fontSize={20} />
                                    </Box>
                                </Grid>
                            )
                        })}
                    </>
                }
            </Grid>
            <CustomButton name={!isSeeAll ? "See All Portfolio" : "See less"} handleClick={handleSeeAll} />
        </Grid>
    )
}

export default OurRecentWork