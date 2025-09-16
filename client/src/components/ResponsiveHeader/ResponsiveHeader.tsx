import React, { useState } from 'react'
import styles from './ResponsiveHeader.module.scss'
import logo from '../../asserst/logo/image 1.svg'
import { Grid, List, ListItemButton, ListItemText } from '@mui/material'
import { IoReorderThreeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ReorderThreeSharpIcon = IoReorderThreeSharp as React.FC<React.SVGProps<SVGSVGElement>>;

const ResponsiveHeader = () => {
    const navigation = useNavigate()
    const [show, setShow] = useState(false);
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
    const handleMenu = () => setShow(!show)
    return (
        <Grid className={styles.responsiveHeader}>
            <Grid className={styles.header}>
                <img src={logo} />
                <ReorderThreeSharpIcon fontSize={45} cursor={"pointer"} onClick={handleMenu} />
            </Grid>
            {show && <List className={styles.menus}>
                {data.map((item, idx) => {
                    return (
                        <ListItemButton key={idx} onClick={() => { navigation(item.path); handleMenu() }}>
                            <ListItemText>{item.label}</ListItemText>
                        </ListItemButton>
                    )
                })}
            </List>}
        </Grid>
    )
}

export default ResponsiveHeader