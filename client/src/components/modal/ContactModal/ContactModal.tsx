import React from 'react'
import styles from './ContactModal.module.scss'
import { Box, Divider, FormControl, FormControlLabel, Grid, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import ContactForm from '../../ContactForm/ContactForm'
import { IoMdClose } from "react-icons/io";
import SimpleInputField from '../../SimpleInputField/SimpleInputField';
import CustomButton from '../../customButton/CustomButton';


const CloseIcon = IoMdClose as React.FC<React.SVGProps<SVGSVGElement>>;

export interface IContactModal {
    open: boolean;
    inputVal: any;
    handleChange: any;
    handleContact: () => void;
    handleClose: () => void;
}
const ContactModal = ({ open, inputVal, handleChange, handleContact, handleClose }: IContactModal) => {
    return (
        <Modal
            open={open}
            className={styles.contactModalContainer}
        >
            <Grid className={styles.contactModal}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant='h4' fontSize={25} fontWeight={500}>Send Requirment</Typography>
                    <CloseIcon fontSize={25} cursor={"pointer"} onClick={handleClose} />
                </Box>
                <Divider sx={{ marginBlock: 4 }} />
                <Grid className={styles.inputFields}>
                    <Box>
                        <SimpleInputField
                            label={'Name'}
                            name={'name'}
                            value={inputVal.name}
                            type={"text"}
                            placeholder={'Enter your name'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Email'}
                            name={'email'}
                            value={inputVal.email}
                            type={"text"}
                            placeholder={'Enter your email'}
                            handleChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <Typography variant='h4' fontSize={18} marginBlockEnd={1}>What service do you want?</Typography>
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
                        <Typography variant='h4' fontSize={18} marginBlockEnd={1}>What plan do you want?</Typography>
                        <FormControl>
                            <RadioGroup
                                row
                                name="plan"
                                value={inputVal.name}
                                onChange={handleChange}
                            >
                                <FormControlLabel value={"basic"} control={<Radio />} label="Basic" />
                                <FormControlLabel value={"standard"} control={<Radio />} label="Standard" />
                                <FormControlLabel value={"premium"} control={<Radio />} label="Premium" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box>
                        <SimpleInputField
                            placeholder='Write your message'
                            label={'Message'}
                            name={'message'}
                            value={inputVal.message}
                            type={"text"}
                            handleChange={handleChange}
                        />

                    </Box>
                    <Box>
                        <CustomButton name='CLose' handleClick={handleClose} />
                        <CustomButton name='Submit' handleClick={handleContact} />
                    </Box>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default ContactModal