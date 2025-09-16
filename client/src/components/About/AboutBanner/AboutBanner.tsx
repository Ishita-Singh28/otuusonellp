import React, { Fragment, useState } from 'react'
import styles from './AboutBanner.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import CustomButton from '../../customButton/CustomButton'
import img from '../../../asserst/img/about/Image.png'
import ContactModal from '../../modal/ContactModal/ContactModal'
import { baseurl } from '../../../baseUrl/baseUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutBanner = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [inputVal, setInputVal] = useState({ name: "", email: "", service: "", plan: "", message: "" })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    };
    console.log(inputVal, "inputVal")
    const handleOfferModal = (idx: any) => {
        setOpen((preStat: any) => ({ ...preStat, [idx]: !preStat[idx] }))
    };
    const handleContact = async () => {
        try {
            const response = await axios.post(`${baseurl}/requirment/create`, inputVal)
            if (response.status === 201) {
                toast.success(response.data.message)
                setInputVal({ name: "", email: "", service: "", plan: "", message: "" })
                setOpen(false)
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <Fragment>
            <Grid container className={styles.aboutBannerContainer}>
                <Grid item sm={6} className={styles.content}>
                    <Box>
                        <Typography variant='h5' fontSize={15} fontWeight={400}>Let’s shift your business</Typography>
                        <Typography variant='h4' fontSize={35} fontWeight={400}>We're your extended team, not a vendor</Typography>
                        <Typography>Discover how we're revolutionizing technology solutions at OTUSONE LLP, delivering innovation and expertise to meet your IT services needs. </Typography>
                        <CustomButton name={'Let’s get start'} handleClick={handleOfferModal} />
                    </Box>
                </Grid>
                <Grid item sm={6} className={styles.image}>
                    <Box>
                        <img src={img} />
                    </Box>
                </Grid>
            </Grid>
            <ContactModal
                open={open}
                inputVal={inputVal}
                handleChange={handleChange}
                handleContact={handleContact}
                handleClose={handleClose}
            />
            <ToastContainer />
        </Fragment>
    )
}

export default AboutBanner