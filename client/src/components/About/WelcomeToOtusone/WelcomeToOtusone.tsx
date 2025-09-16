import React from 'react'
import styles from './WelcomeToOtusone.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../../HeadingText/HeadingText'
import { card } from '../data'

const WelcomeToOtusone = () => {
    return (
        <Grid className={styles.welcomeToOtusoneContainer}>
            <HeadingText
                heading={'WELCOME TO OTUSONE'}
                subHeading={`Welcome to OTUSONE LLP, your trusted IT service provider. With a commitment to excellence and innovation, we offer comprehensive solutions tailored to meet your business needs. Our team of skilled professionals is dedicated to delivering reliable and cutting-edge technology solutions. Whether you require software development, IT consulting services, we are here to support your organization's success. Welcome aboard, and let's embark on a journey of digital transformation together.`}
            />
            <Grid className={styles.cardContainer}>
                {card.map((item) => {
                    return (
                        <Grid>
                            <img src={item.img} />
                            <Typography textAlign={"center"} variant='h4' fontSize={22} fontWeight={700}>{item.heading}</Typography>
                            <Typography textAlign={"center"}>{item.description}</Typography>

                        </Grid>
                    )
                })}
            </Grid>

        </Grid>
    )
}

export default WelcomeToOtusone