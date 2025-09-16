import React, { useState } from 'react'
import styles from './Contact.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import phone from '../../asserst/icons/akar-icons_phone.png'
import email from '../../asserst/icons/carbon_email-new.png'
import map from '../../asserst/icons/Group.png'
import ContactForm from '../../components/ContactForm/ContactForm'
import { FaFacebookF, FaPinterestP, FaDribbble, FaInstagram } from "react-icons/fa";
import fb from '../../asserst/icons/social/Facebook.png'
import twiter from '../../asserst/icons/social/Twitter.png'
import insta from '../../asserst/icons/social/Instagram.png'
import linkedin from '../../asserst/icons/social/image 68.png'
import youtube from '../../asserst/icons/social/Youtube.png'
import axios from 'axios'
import { baseurl } from '../../baseUrl/baseUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [inputVal, setInputVal] = useState({ name: "", email: "", service: "", plan: "", message: "" })
    const social = [
        {
            "id": 1,
            "icon": fb,
            "path": "https://www.facebook.com/otusone.in"
        },
        {
            "id": 1,
            "icon": twiter,
            "path": "https://twitter.com/otusonellp "
        },
        {
            "id": 1,
            "icon": insta,
            "path": "https://www.instagram.com/otusonellp/"
        },
        {
            "id": 1,
            "icon": linkedin,
            "path": "https://www.linkedin.com/company/otusone/ "
        },
        {
            "id": 1,
            "icon": youtube,
            "path": "https://www.youtube.com/channel/UCr-LBe5OxmrgslzkMGJjcpw"
        }
    ];
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    }
    console.log(inputVal, "inputVainputVall//")
    const handleContact = async () => {
        try {
            const response = await axios.post(`${baseurl}/requirment/create`, inputVal)
            if (response.status === 201) {
                toast.success(response.data.message)
                setInputVal({ name: "", email: "", service: "", plan: "", message: "" })
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <Grid className={styles.contactContainer}>
            <Grid container className={styles.contactus}>
                <Grid item sm={6} className={styles.details}>
                    <Box>
                        <Typography variant='h4' fontSize={30} fontWeight={600}>Now Start Your project</Typography>
                        <Typography>Fill up the from and our Team will get back to you within 24 hours.</Typography>
                        <Box>
                            <img src={phone} width={18} height={22} />
                            <Typography>+91-9340312713</Typography>
                        </Box>
                        <Box>
                            <img src={email} width={18} height={22} />
                            <Typography>info@otusone.com</Typography>
                        </Box>
                        <Box>
                            <img src={map} width={18} height={22} />
                            <Typography>H-112, Sector 63, Noida, Uttar Pradesh-201301</Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        {social.map((item) => {
                            return (
                                <img onClick={() => {
                                    if (item.path) {
                                        window.location.href = item.path;
                                    } else {
                                        console.error("Social networking site URL not provided.");
                                    }
                                }} src={item.icon} width={20} style={{ marginInlineEnd: 13, cursor: "pointer" }} />
                            )
                        })}
                    </Box>
                </Grid>
                <Grid item sm={6} className={styles.form}>
                    <ContactForm
                        inputVal={inputVal}
                        handleChange={handleChange}
                        handleContact={handleContact}
                    />
                </Grid>
            </Grid>
            <ToastContainer />
        </Grid>
    )
}

export default Contact