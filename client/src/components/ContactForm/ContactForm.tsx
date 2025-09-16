import React from 'react'
import styles from './ContactForm.module.scss'
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import CustomButton from '../customButton/CustomButton'

export interface IContactForm {
    inputVal: any;
    handleChange: any;
    handleContact: () => void;
}
const ContactForm = ({ inputVal, handleChange, handleContact }: IContactForm) => {
    return (
        <Grid className={styles.contactFormContainer}>
            <Box>
                <Typography variant='h4' >Full Name</Typography>
                <TextField variant="standard" placeholder='Enter your name' name='name' value={inputVal.name} onChange={handleChange} />
            </Box>
            <Box>
                <Typography variant='h4'>Email</Typography>
                <TextField variant="standard" placeholder='Enter your email' name='email' value={inputVal.email} onChange={handleChange} />
            </Box>
            <Box>
                <Typography variant='h4'>What service do you want?</Typography>
                <FormControl>
                    <RadioGroup
                        row
                        name="service"
                        value={inputVal.service}
                        onChange={handleChange}
                    >
                        <FormControlLabel value={"web"} control={<Radio />} label="Web Development" />
                        <FormControlLabel value={"app"} control={<Radio />} label="App Development" />
                        <FormControlLabel value={"software"} control={<Radio />} label="Software Development" />
                        <FormControlLabel value={"ui"} control={<Radio />} label="UI/UX Design" />
                        <FormControlLabel value={"graphic"} control={<Radio />} label="Graphic Designing" />
                        <FormControlLabel value={"video"} control={<Radio />} label="Video Editing" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box>
                <Typography variant='h4'>What plan do you want?</Typography>
                <FormControl>
                    <RadioGroup
                        row
                        name="row-radio-buttons-group"
                        value={inputVal.name}
                        onChange={handleChange}
                    >
                        <FormControlLabel value={"basic"} name='basic' control={<Radio />} label="Basic" />
                        <FormControlLabel value={"standard"} name='standard' control={<Radio />} label="Standard" />
                        <FormControlLabel value={"premium"} name='premium' control={<Radio />} label="Premium" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box>
                <Typography variant='h4'>Message</Typography>
                <TextField variant="standard" placeholder='Enter your message' name='message' value={inputVal.message} onChange={handleChange} />
            </Box>
            <CustomButton name="Send message" handleClick={handleContact} />
        </Grid>
    )
}

export default ContactForm