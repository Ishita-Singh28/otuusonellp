import React from 'react'
import styles from './OfferCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import CustomButton from '../customButton/CustomButton'

export interface IOfferCard {
    label: string;
    num: any;
    data: any;
    handleClick: () => void;
}
const OfferCard = ({ label, num, data, handleClick }: IOfferCard) => {
    return (
        <Grid className={styles.offerCard}>
            <Typography textAlign={"center"} variant='h3' fontSize={17} fontWeight={600}>{label}</Typography>
            <Typography textAlign={"center"} variant='h2' fontSize={28} fontWeight={700}>Rs.{num}</Typography>
            <Box>
                {data?.map((item: any) => {
                    return (
                        <Typography>{item.shine}<span>{item.label}</span></Typography>
                    )
                })}
            </Box>
            <Box>
                <CustomButton name={'Select Plan'} handleClick={handleClick} />
            </Box>
        </Grid>
    )
}

export default OfferCard