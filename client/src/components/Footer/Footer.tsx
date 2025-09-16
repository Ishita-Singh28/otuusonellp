import React, { Fragment } from 'react'
import styles from './Footer.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import img from '../../asserst/img/image 47.png'
// import fb from '../../asserst/icons/Facebook Social Icon.svg'
// import likedin from '../../asserst/icons/Linked In Social Icon.svg'
// import twiter from '../../asserst/icons/Twitter Social icon.svg'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import fb from '../../asserst/icons/social/Facebook.png'
import linke from '../../asserst/icons/social/image 68.png'
import twiter from '../../asserst/icons/social/Twitter.png'
import insta from '../../asserst/icons/social/Instagram.png'
import youtube from '../../asserst/icons/social/Youtube.png'
import whatsApp from '../../asserst/img/whatsapp-873316_1280.png'

import { IoLogoYoutube } from "react-icons/io";



const Footer = () => {
    const navigation = useNavigate()
    const data = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "About",
            "path": "/about"
        },
        {
            "id": 3,
            "path": "#",
            "name": "Follow us"
        },
        {
            "id": 4,
            "name": "Services",
            "path": "/service"
        },
        {
            "id": 5,
            "name": "Portfolio",
            "path": "/portfolio"
        },
        {
            "id": 6,
            "icon": [
                {
                    "id": 1,
                    "path": "https://www.facebook.com/otusone.in",
                    "img": fb
                },
                {
                    "id": 2,
                    "path": "https://twitter.com/otusonellp ",
                    "img": twiter
                },

                {
                    "id": 3,
                    "path": "https://www.linkedin.com/company/otusone/ ",
                    "img": linke
                },
                {
                    "id": 4,
                    "path": "https://www.instagram.com/otusonellp/ ",
                    "img": insta
                },
                {
                    "id": 6,
                    "path": "https://wa.me/9340312713",
                    "img": whatsApp
                },
                {
                    "id": 6,
                    "path": "https://www.youtube.com/channel/UCr-LBe5OxmrgslzkMGJjcpw",
                    "img": youtube
                },
            ]
        },
        {
            "id": 7,
            "name": "Carreer",
            "path": "/career"
        },
        {
            "id": 8,
            "name": "Contact Us",
            "path": "/contact"
        }
    ]
    const handleclick = () => {
        window.scrollTo(0, 0)
    }
    const handleClickWhatsApp = () => {

    }
    return (
        <Fragment>
            <Grid container className={styles.footerContainer}>
                <Grid item sm={6}>
                    <img src={img} alt="footer-logo" onClick={() => navigation("/")} />
                    <Typography>Outstanding software development company! Exceptional expertise, timely delivery, and seamless communication. Highly recommended for all your software needs.</Typography>
                </Grid>
                <Grid item sm={6}>
                    <Grid container>
                        {data.map((item) => {
                            return (
                                <Grid item sm={4}>
                                    <Typography onClick={() => { item?.path && navigation(item.path); handleclick() }} textAlign={"center"} fontSize={13} fontWeight={600} sx={{ color: "#545454", marginBlock: 0.8, cursor: "pointer" }}>{item.name}</Typography>
                                    {item.icon && (
                                        <Grid container justifyContent="center" spacing={1}>
                                            {item.icon.map((icon) => (
                                                <Grid item key={icon.id}>
                                                    <Box onClick={() => {
                                                        if (icon.path) {
                                                            window.location.href = icon.path;
                                                        } else {
                                                            console.error("Social networking site URL not provided.");
                                                        }
                                                    }}>
                                                        <img alt="image" src={icon.img} width={20} style={{ cursor: "pointer" }} />
                                                    </Box>
                                                </Grid>
                                            ))}

                                        </Grid>
                                    )}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Typography fontSize={12} sx={{ color: '#BFBFBF' }}>Powered by OTUSONE LLP</Typography>
            </Grid>
        </Fragment>
    )
}

export default Footer