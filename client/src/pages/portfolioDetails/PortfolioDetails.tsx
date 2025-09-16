import React, { useEffect, useState } from 'react'
import styles from './PortfolioDetails.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import img from '../../asserst/img/portfolioDetails/Jobs 1.png'
import CustomButton from '../../components/customButton/CustomButton'
import { portfolio } from '../../components/OurRecentWork/data'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom';
import { portfolioData } from '../../pages/portfolioDetails/data'
import axios from 'axios'
import { baseurl } from '../../baseUrl/baseUrl'

const ArrowForwardIcon = IoIosArrowForward as React.FC<React.SVGProps<SVGSVGElement>>;


const PortfolioDetails = () => {
    const { id } = useParams();
    const [portfolioItem, setPortfolioItem] = useState<any>(null);
    const [portfolio, setPortfolio] = useState<any>(null);

    const formattedHeading = (heading: any) => {
        return heading.toLowerCase().replace(/\s+/g, '-')
    }
    const fetchPortfolioDetails = async () => {
        try {
            const res = await axios.get(`${baseurl}/portfolio`);
            const portfolioData = res.data.portfolio;
            console.log(portfolioData, "portfolioData")
            if (!portfolioData) {
                return console.log("not data found")

            }
            setPortfolio(portfolioData);
            const selectedPortfolio = portfolioData.filter((item: any) => formattedHeading(item.heading) === id);
            setPortfolioItem(selectedPortfolio);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPortfolioDetails();
    }, [id]);
    useEffect(() => {
        fetchPortfolioDetails();
    }, [id]);

    return (
        <Grid>
            {portfolioItem?.map((item: any) => {
                return (
                    <Grid container className={styles.portfolioDetailsContainer}>
                        <Grid item sm={7} className={styles.image}>
                            <img src={item.post_image} alt='img' width={"100%"} />
                        </Grid>
                        <Grid item sm={5} className={styles.details}>
                            <Typography variant='h4' fontSize={25} fontWeight={600}>{item?.heading}</Typography>
                            <Typography fontSize={13} dangerouslySetInnerHTML={{ __html: item.desc }}></Typography>
                            <Typography variant='h4' fontSize={20} fontWeight={600} marginBlock={2}>Technology Used:</Typography>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography>FrontEnd :</Typography>
                                <Typography sx={{ color: "#494949" }}>{item?.frontend}</Typography>
                            </Box>
                            <Divider />
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography>Backend :</Typography>
                                <Typography sx={{ color: "#494949" }}>{item?.backend}</Typography>
                            </Box>
                            <Divider />
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography>Database :</Typography>
                                <Typography sx={{ color: "#494949" }}>{item?.database}</Typography>
                            </Box>
                            <Divider />
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography>Cloud Server:</Typography>
                                <Typography sx={{ color: "#494949" }}>{item?.cloud_server}</Typography>
                            </Box>
                            <Divider />
                            {/* <CustomButton name='View Live Site' /> */}
                        </Grid>
                        <Grid className={styles.moreProduct}>
                            <Typography variant='h2' fontSize={28} fontWeight={600}>More Product</Typography>
                            <Grid className={styles.recentWorkCard}>
                                {portfolio.slice(0, 3).map((item: any) => {
                                    return (
                                        <Grid>
                                            <img alt='' src={item.image} />
                                            <Typography marginBlock={2} variant='h4' fontSize={20} fontWeight={600}>{item.heading}</Typography>
                                            <Typography dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 120) + `...` }}></Typography>
                                            <Box display={"flex"}>
                                                <Link to={`/portfolio/${formattedHeading(item.heading)}`}>
                                                    <Typography variant='h5' fontSize={15} fontWeight={500}>Read more</Typography>
                                                </Link>
                                                <ArrowForwardIcon fontSize={20} />
                                            </Box>
                                        </Grid>
                                    )
                                })
                                }
                            </Grid>

                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default PortfolioDetails