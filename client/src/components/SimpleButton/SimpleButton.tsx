import { Button, Grid } from '@mui/material'
import styles from './SimpleButton.module.scss'
import React from 'react'

export interface ISimpleButton {
    name: string;
}
const SimpleButton = ({ name }: ISimpleButton) => {
    return (
        <Grid className={styles.simpleButtonContainer}>
            <Button variant='contained'>{name}</Button>
        </Grid>
    )
}

export default SimpleButton