import React from 'react'
import styles from './SimpleInputField.module.scss'
import { Grid, TextField, Typography } from '@mui/material'

export interface ISimpleInputField {
    label: string;
    name: string;
    value?: string;
    type: string;
    placeholder: string;
    handleChange: any;
}
const SimpleInputField = ({ label, name, value, type, placeholder, handleChange }: ISimpleInputField) => {
    return (
        <Grid className={styles.simpleInputFieldContainer}>
            <Typography>{label}</Typography>
            <TextField
                variant="standard"
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </Grid>
    )
}

export default SimpleInputField