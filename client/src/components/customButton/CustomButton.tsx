import React from 'react'
import styles from './CustomButton.module.scss'
import { Box, Button, Grid } from '@mui/material'
import { GrSearch } from "react-icons/gr";

export interface ICustomButton {
    icon?: string; 
    handleClick?:any;
    name: string;

}
const CustomButton = ({ icon, name, handleClick }: ICustomButton) => {
    return (
        <Grid className={styles.customButtonContainer}>
            <Button onClick={handleClick} variant='contained'><Box>{icon}</Box>{name}</Button>
        </Grid>
    )
}

export default CustomButton