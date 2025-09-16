import React from 'react'
import styles from './Header.module.scss'
import { Grid, Typography } from '@mui/material'
import logo from '../../asserst/logo/image 1.svg'
import { useNavigate } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";


const Header = () => {
    const navigation = useNavigate()
    const data = [
        {
            "label": "HOME",
            "path": "/"
        },
        {
            "label": "ABOUT",
            "path": "/about"
        },
        {
            "label": "SERVICES",
            "path": "/service"
        },
        {
            "label": "PORTFOLIO",
            "path": "/portfolio"
        },
        {
            "label": "CAREER",
            "path": "/career"
        },
        {
            "label": "CONTACT US",
            "path": "/contact"
        }
    ]
    return (
        <Grid container className={styles.headerContainer}>
            <Grid item sm={5}>
                <img src={logo} alt='logo' onClick={()=>navigation("/")} />
            </Grid>
            <Grid item sm={7}>
                {
                    data && data.map((item: any) => {
                        return (
                            <Typography onClick={() => navigation(item.path)}>{item.label}</Typography>
                        )
                    })
                }

            </Grid>
        </Grid>
    )
}

export default Header