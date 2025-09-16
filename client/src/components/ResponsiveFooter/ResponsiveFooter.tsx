import React from 'react'
import styles from './ResponsiveFooter.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import logo from '../../asserst/logo/image 1.svg'
import fb from '../../asserst/icons/social/Facebook.png'
import twiter from '../../asserst/icons/social/Twitter.png'
import insta from '../../asserst/icons/social/Instagram.png'
import linkedin from '../../asserst/icons/social/image 68.png'
import youtube from '../../asserst/icons/social/Youtube.png'
import { useNavigate } from 'react-router-dom'

const ResponsiveFooter = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0)
    };

    return (
        <Grid className={styles.responsiveFooterContainer}>
            <Box>
                <img src={logo} />
                <Typography>Outstanding software development company! Exceptional expertise, timely delivery, and seamless communication. Highly recommended for all your software needs.</Typography>
            </Box>
            <Box>
                <Typography variant='h5' fontSize={21} fontWeight={500}>Useful Links</Typography>
                <Box>
                    <Box>
                        <Typography onClick={() => { navigation('/'); handleClick() }} >Home</Typography>
                        <Typography onClick={() => { navigation('/about'); handleClick() }}>About</Typography>
                        <Typography onClick={() => { navigation('/service'); handleClick() }}>Services</Typography>
                    </Box>
                    <Box>
                        <Typography onClick={() => { navigation('/portfolio'); handleClick() }}>Portfolio</Typography>
                        <Typography onClick={() => { navigation('/career'); handleClick() }}>Career</Typography>
                        <Typography onClick={() => { navigation('/contact'); handleClick() }}>Contact Us</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant='h5' fontSize={21} fontWeight={500}>Follow Us</Typography>
                <Box>
                    <img src={fb} width={30} onClick={() => window.location.href = 'https://www.facebook.com/otusone.in'} />
                    <img src={twiter} width={30} onClick={() => window.location.href = 'https://twitter.com/otusonellp'} />
                    <img src={insta} width={30} onClick={() => window.location.href = 'https://www.instagram.com/otusonellp/'} />
                    <img src={linkedin} width={30} onClick={() => window.location.href = 'https://www.linkedin.com/company/otusone/'} />
                    <img src={youtube} width={30} onClick={() => window.location.href = 'https://www.youtube.com/channel/UCr-LBe5OxmrgslzkMGJjcpw'} />
                </Box>

            </Box>
        </Grid>
    )
}

export default ResponsiveFooter