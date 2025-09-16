import React from 'react'
import styles from './JobModal.module.scss'
import { Box, Divider, Grid, Modal, Typography } from '@mui/material'
import { IoMdClose } from "react-icons/io";
import SimpleInputField from '../../SimpleInputField/SimpleInputField';
import CustomButton from '../../customButton/CustomButton';

const CloseIcon = IoMdClose as React.FC<React.SVGProps<SVGSVGElement>>;

export interface IJobModal {
    open: boolean;
    inputVal: any;
    handleChange: any;
    handeClose: () => void;
    handleClick: () => void;
}
const JobModal = ({ open, inputVal, handeClose, handleChange, handleClick }: IJobModal) => {
    return (
        <Modal
            open={open}
            className={styles.jobModalContainer}
        >
            <Grid className={styles.jobModal}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant='h5' fontSize={25} fontWeight={500}>Job Form</Typography>
                    <CloseIcon fontSize={25} cursor={"pointer"} onClick={handeClose} />
                </Box>
                <Divider sx={{ marginBlock: 2 }} />
                <Grid className={styles.fields}>
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
                            type={"email"}
                            placeholder={'Enter your email'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Qualification'}
                            name={'qualification'}
                            value={inputVal.qualification}
                            type={"text"}
                            placeholder={'Enter your qulification'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Current CTC'}
                            name={'current_ctc'}
                            value={inputVal.current_ctc}
                            type={"number"}
                            placeholder={'Enter your current ctc'}
                            handleChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <SimpleInputField
                            label={'Phone'}
                            name={'phone'}
                            value={inputVal.phone}
                            type={"number"}
                            placeholder={'Enter your number'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Experience'}
                            name={'experience'}
                            value={inputVal.experience}
                            type={"number"}
                            placeholder={'Enter your experience'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Expected CTC'}
                            name={'expected_ctc'}
                            value={inputVal.expected_ctc}
                            type={"text"}
                            placeholder={'Enter your expected_ctc'}
                            handleChange={handleChange}
                        />
                        <SimpleInputField
                            label={'Resume'}
                            name={'resume'}
                            type={"file"}
                            placeholder={'Enter your resume'}
                            handleChange={handleChange}
                        />
                    </Box>
                </Grid>
                <Grid className={styles.action}>
                    <CustomButton name={'Close'} handleClick={handeClose} />
                    <CustomButton name={'Submit'} handleClick={handleClick} />
                </Grid>

            </Grid>
        </Modal>
    )
}

export default JobModal