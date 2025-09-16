import React from 'react'
import styles from './CounterList.module.scss'
import { Grid, Typography } from '@mui/material'

const CounterList = () => {
    const data = [
        {
            "id": 1,
            "num": "200+",
            "name": "Trusted partner"
        },
        {
            "id": 1,
            "num": "92%",
            "name": "Satisfaction rate comes from our awesome customers."
        },
        {
            "id": 1,
            "num": "4.9/5.0",
            "name": "Average customer ratings we have got all over internet."
        }

    ]
    return (
        <Grid container className={styles.CounterList}>
            {data.map((item) => {
                return (
                    <Grid item sm={4}>
                        <Typography textAlign={"center"} variant='h4' fontSize={28} fontWeight={700}>{item.num}</Typography>
                        <Typography textAlign={"center"}>{item.name}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default CounterList