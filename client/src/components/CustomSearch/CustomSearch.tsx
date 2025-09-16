import React from 'react'
import styles from './CustomSearch.module.scss'
import { Box, Grid, TextField } from '@mui/material'
import CustomButton from '../customButton/CustomButton'

const CustomSearch = () => {
    return (
        <Grid className={styles.customSearchContainer}>
            <TextField placeholder='Insert your post code or adress here' />
            <CustomButton name={'Search'} />
        </Grid>
    )
}

export default CustomSearch