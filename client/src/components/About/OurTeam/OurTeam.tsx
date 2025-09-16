import React from 'react'
import styles from './OurTeam.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { team } from '../data'
import { FaFacebookF, FaPinterestP, FaDribbble, FaInstagram } from "react-icons/fa";

const FacebookIcon = FaFacebookF as React.FC<React.SVGProps<SVGSVGElement>>;
const PinterestIcon = FaPinterestP as React.FC<React.SVGProps<SVGSVGElement>>;
const DribbbleIcon = FaDribbble as React.FC<React.SVGProps<SVGSVGElement>>;
const InstagramIcon = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;

const OurTeam = () => {
    return (
        <Grid className={styles.ourTeamContainer}>
            <Typography textAlign={"center"} fontSize={12} fontWeight={600} sx={{ color: "#ffffff" }}>Meet Our Team</Typography>
            <HeadingText
                heading={'Our Expert Members '}
                subHeading={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet.'}
            />
            <Grid className={styles.ourTeam}>
                {team.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <Grid className={styles.image}>
                                <img src={item.img} />
                            </Grid>
                            <Grid className={styles.name}>
                                <Box>
                                    <FacebookIcon fontSize={16} style={{ marginInlineEnd: 8 }} />
                                    <PinterestIcon fontSize={18} style={{ marginInlineEnd: 8 }} />
                                    <DribbbleIcon fontSize={18} style={{ marginInlineEnd: 8 }} />
                                    <InstagramIcon fontSize={18} style={{ marginInlineEnd: 8 }} />
                                </Box>
                                <Typography textAlign={"left"} variant='h4' fontSize={18} fontWeight={600}>{item.name}</Typography>
                                <Typography textAlign={"left"} fontSize={14}>{item.designation}</Typography>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default OurTeam