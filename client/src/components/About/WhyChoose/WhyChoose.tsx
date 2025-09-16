import React, { useState } from 'react'
import styles from './WhyChoose.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { whyChoose, whyChoose2 } from '../data'
import CustomButton from '../../customButton/CustomButton'
import ContactModal from '../../modal/ContactModal/ContactModal'
import { baseurl } from '../../../baseUrl/baseUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WhyChoose = () => {
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
        <Grid className={styles.whyChooseContainer}>
            <HeadingText
                heading={'Why choose us'}
                subHeading={'People choose us because we serve the best for everyone'}
            />
            <Grid className={styles.card}>
                {
                    whyChoose.map((item) => {
                        return (
                            <Grid>
                                <Box>
                                    <img src={item.img} />
                                </Box>
                                <Box>
                                    <Typography variant='h4' fontSize={18} fontWeight={500}>{item.label}</Typography>
                                    <Typography>{item.desc}</Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
            <Divider sx={{ marginBlock: 8 }} />
            <Grid container className={styles.action}>
                <Grid item sm={6}>
                    <Typography variant='h4' fontSize={23} fontWeight={600}>Ready to launch your next project?</Typography>
                    <Typography>Let's collaborate and turn your ideas into reality. Get in touch with OTUSONE today and let's take your business to new heights!</Typography>
                </Grid>
                <Grid item sm={6}>
                    <CustomButton name='Get start a project' handleClick={handleOfferModal} />
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
        </Grid>
    )
}

export default WhyChoose