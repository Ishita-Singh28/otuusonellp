import React, { useState } from 'react'
import styles from './SpecialOffer.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { IoMdCheckmark } from "react-icons/io";
import CustomButton from '../customButton/CustomButton';
// import { IoMdCheckmark } from "react-icons/rx";
import OfferCard from '../OfferCard/OfferCard';
import ContactModal from '../modal/ContactModal/ContactModal';

const CheckmarkIcon = IoMdCheckmark as React.FC<React.SVGProps<SVGSVGElement>>;

const SpecialOffer = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [inputVal, setInputVal] = useState({ fullName: "", email: "", service: "", message: "" })
    const data = [
        {
            "id": 1,
            "label": "Basic",
            "num": 6000.00,
            "offer": [
                {
                    "id": 1,
                    "shine": <CheckmarkIcon />,
                    "label": "4 pages in website"
                },
                {
                    "id": 2,
                    "shine": <CheckmarkIcon />,
                    "label": "Free domain for 1 yr"
                },
                {
                    "id": 3,
                    "shine": <CheckmarkIcon />,
                    "label": "Free SSL"
                },
                {
                    "id": 4,
                    "shine": <CheckmarkIcon />,
                    "label": "Free Domain"
                },
                {
                    "id": 5,
                    "shine": <CheckmarkIcon />,
                    "label": "Google Ads"
                },
                {
                    "id": 6,
                    "shine": <CheckmarkIcon />,
                    "label": "3 MonthsWebsite maintenance"
                },
            ],
            "button": "Select Plan"
        },
        {
            "id": 2,
            "label": "Standard",
            "num": 15000.00,
            "offer": [
                {
                    "id": 1,
                    "shine": <CheckmarkIcon />,
                    "label": "6 to 7  pages in website "
                },
                {
                    "id": 2,
                    "shine": <CheckmarkIcon />,
                    "label": "Free SSL"
                },
                {
                    "id": 3,
                    "shine": <CheckmarkIcon />,
                    "label": "Free domain for 1 yr"
                },
                {
                    "id": 4,
                    "shine": <CheckmarkIcon />,
                    "label": "Email integration "
                },
                {
                    "id": 5,
                    "shine": <CheckmarkIcon />,
                    "label": "WhatsApp integration"
                },
                {
                    "id": 6,
                    "shine": <CheckmarkIcon />,
                    "label": "Social media integration "
                },
                {
                    "id": 7,
                    "shine": <CheckmarkIcon />,
                    "label": "API Integration"
                },
                {
                    "id": 8,
                    "shine": <CheckmarkIcon />,
                    "label": "5 MonthsWebsite maintenance"
                }
            ]
        },
        {
            "id": 3,
            "label": "Premium",
            "num": 30000.00,
            "offer": [
                {
                    "id": 1,
                    "shine": <CheckmarkIcon />,
                    "label": "Multiple  pages in website (custom website)"
                },
                {
                    "id": 2,
                    "shine": <CheckmarkIcon />,
                    "label": "Free SSL"
                },
                {
                    "id": 3,
                    "shine": <CheckmarkIcon />,
                    "label": "Free domain for 1 yr"
                },
                {
                    "id": 4,
                    "shine": <CheckmarkIcon />,
                    "label": "Backend Development"
                },
                {
                    "id": 5,
                    "shine": <CheckmarkIcon />,
                    "label": "API Integration"
                },
                {
                    "id": 6,
                    "shine": <CheckmarkIcon />,
                    "label": "Email integration "
                },
                {
                    "id": 7,
                    "shine": <CheckmarkIcon />,
                    "label": "WhatsApp integration"
                },
                {
                    "id": 8,
                    "shine": <CheckmarkIcon />,
                    "label": "Social media integration"
                },
                {
                    "id": 7,
                    "shine": <CheckmarkIcon />,
                    "label": "Payment Gateway integration "
                },
                {
                    "id": 8,
                    "shine": <CheckmarkIcon />,
                    "label": "Website contents writing "
                },
                {
                    "id": 7,
                    "shine": <CheckmarkIcon />,
                    "label": "Admin panel"
                },
                {
                    "id": 8,
                    "shine": <CheckmarkIcon />,
                    "label": "8 MonthsWebsite maintenance "
                }
            ]
        }
    ];
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    };
    console.log(inputVal, "inputVal")
    const handleOfferModal = (idx: any) => {
        setOpen((preStat: any) => ({ ...preStat, [idx]: !preStat[idx] }))
    };
    return (
        <Grid className={styles.SpecialOfferContainer}>
            <Typography textAlign={"center"} variant='h4' fontSize={30} fontWeight={700}>Special offer for you:</Typography>
            <Typography textAlign={"center"}>Take advantage of this special deal tailored to enhance your online presence. Upgrade your website today!</Typography>
            <Grid className={styles.SpecialOffer}>
                {data.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <OfferCard
                                label={item.label}
                                num={item.num}
                                data={item?.offer}
                                handleClick={() => handleOfferModal(item.id)}
                            />
                        </Grid>
                    )
                })}
            </Grid>

            <ContactModal
                open={open}
                inputVal={inputVal}
                handleChange={handleChange}
                handleContact={function (): void {
                    throw new Error('Function not implemented.');
                }}
                handleClose={handleClose}
            />
        </Grid>
    )
}

export default SpecialOffer