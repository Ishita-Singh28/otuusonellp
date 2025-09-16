import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import styles from './howWeWork.module.css'
import SimpleButton from '../SimpleButton/SimpleButton'

const data = [
    {
        "id": 1,
        "label": "CLIENT MEET "
    },
    {
        "id": 2,
        "label": "Project Initiation & Planning"
    },
    {
        "id": 3,
        "label": "Design Phase"
    },
    {
        "id": 4,
        "label": "Development & Testing"
    },
    {
        "id": 5,
        "label": " Deployment & Maintenance"
    }
]
const HowWeWork = () => {
    return (
        <Grid className={styles.weWork}>
            <Typography variant='h2'>How we works</Typography>
            <Box>
                {data.map((item: any) => {
                    return (
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <SimpleButton name={item.label} />
                        </Box>
                    )
                })}
            </Box>
        </Grid>
    )
}

export default HowWeWork
