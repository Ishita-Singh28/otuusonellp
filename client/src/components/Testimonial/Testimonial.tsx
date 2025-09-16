import React from 'react'
import styles from './Testimonial.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import star from '../../asserst/icons/Vector.svg'
import star3 from '../../asserst/icons/Vector (2).svg'
import creditpedia from '../../asserst/img/testimonial/creditpedia  1.png'
import cng from '../../asserst/img/testimonial/launcher_icon.png'
import vidura from '../../asserst/img/testimonial/vidura  1.png'
import { FaStar } from "react-icons/fa";

const StarIcon = FaStar as React.FC<React.SVGProps<SVGSVGElement>>;


const Testimonial = () => {
    const rating = [
        {
            "id": 1,
            "star": <StarIcon style={{ color: "#ffe234", fontSize: 20 }} />
        },
        {
            "id": 2,
            "star": <StarIcon style={{ color: "#ffe234", fontSize: 20 }} />
        },
        {
            "id": 3,
            "star": <StarIcon style={{ color: "#ffe234", fontSize: 20 }} />
        },
        {
            "id": 4,
            "star": <StarIcon style={{ color: "#ffe234", fontSize: 20 }} />
        },
        {
            "id": 5,
            "star": <StarIcon style={{ color: "#ffe234", fontSize: 20 }} />
        }
    ]
    const data = [
        {
            "id": 1,
            "message": "Exceptional IT Services Company! Their expertise, dedication, and professionalism surpassed our expectations. They seamlessly transformed our vision into reality, delivering innovative solutions on time and within budget. Highly recommended!",
            "name": "Sumanta Mandal",
            "image": creditpedia,
            "department": "TechnoFino & CreditPedia"
        },
        {
            "id": 2,
            "message": "It was a great experience working with OTUSONE, they are on time, precise, technical, and the most important dedicated, they have solutions for all your IT issues. Highly recommended.",
            "name": "Jaideep Singh Rathore",
            "image": vidura,
            "department": "VIDURA INTERNATIONAL LLP"
        },
        {
            "id": 3,
            "message": `Outstanding IT services company! Their expertise, responsiveness, and dedication exceeded our expectations. Highly recommended for any tech needs.","name": "Robert Fox`,
            "name": "Krishna Das Didige",
            "image": cng,
            "department": "CNG Finder By TimeTech"
        }
    ]
    return (
        <Grid className={styles.testimonialsContainer}>
            <Typography variant='h4' fontSize={30} fontWeight={600}>Customer testimonials</Typography>
            <Typography fontSize={14}>Empowering dreams, crafting success: Hear what our clients have to say.</Typography>
            <Grid container>
                {data.map((item) => {
                    return (
                        <Grid className={styles.testimonials}>
                            <Grid className={styles.testimonialsRate}>
                                <Box>
                                    <img src={item.image} alt={item.name} />
                                </Box>
                                <Box>{rating.map((item) => {
                                    return (
                                        <Box>{item.star}</Box>
                                    )
                                })}</Box>
                            </Grid>
                            <Typography>{item.message}</Typography>
                            <Grid className={styles.testimonialsReviewer}>
                                <Box>
                                    {/* <img src={item.image} /> */}
                                </Box>
                                <Box>
                                    <Typography variant='h5' fontSize={14} fontWeight={500}>{item.name}</Typography>
                                    <Typography>Director: {item.department}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>

        </Grid>
    )
}

export default Testimonial