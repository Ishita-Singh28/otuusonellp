import React, { useState } from 'react'
import styles from './WeProvides.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import data from './data.json'
import CustomButton from '../../customButton/CustomButton'
import ContactModal from '../../modal/ContactModal/ContactModal'

const WeProvides = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false)
    const [inputVal, setInputVal] = useState({ fullName: "", email: "", service: "", message: "" })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    };
    const handleModal = (idx: any) => {
        setOpen((preState: any) => ({ ...preState, [idx]: !preState[idx] }))
    }

    return (
        <Grid className={styles.weProvidesContainer}>
            <HeadingText
                heading={'We Provide Outsourced IT Services'}
                span=' For your business'
                subHeading={'We understand that projects come in all shapes and sizes'}
            />
            <Grid container className={styles.weProvides}>
                {data.map((item) => {
                    return (
                        <Grid className={styles.provides}>
                            <Box>
                                <Typography variant='h4' fontSize={18} fontWeight={700} sx={{ color: "#6E1B5D" }}>{item.label}</Typography>
                                <Typography variant='h5'>{item.desc}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h2' fontSize={25} fontWeight={700}>Rs.{item.value}</Typography>
                                <CustomButton name='START' handleClick={() => handleModal(item.id)} />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <ContactModal
                open={open}
                inputVal={inputVal}
                handleChange={handleChange}
                handleContact={function (): void {
                    throw new Error('Function not implemented.')
                }}
                handleClose={handleClose}
            />
        </Grid>
    )
}

export default WeProvides