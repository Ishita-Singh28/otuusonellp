import React from 'react'
import styles from './WhyUs.module.scss'
import { Grid, Typography } from '@mui/material'
import HeadingText from '../HeadingText/HeadingText'
import img from '../../asserst/img/service/1.png'
import { VscDebugBreakpointLog } from "react-icons/vsc";

const DebugBreakpointLogIcon = VscDebugBreakpointLog as React.FC<React.SVGProps<SVGSVGElement>>;

const WhyUs = () => {
    return (
        <Grid className={styles.whyUsContainer}>
            <HeadingText
                heading={'Why Us'}
                subHeading={''}
            />
            <Grid className={styles.whyUs}>
                <Grid>
                    <Typography variant='h4' fontSize={28} fontWeight={600} sx={{ color: "#2E2E2E" }}>Focus on Strengths:</Typography>
                    <Typography fontSize={16} sx={{ color: "#2E2E2E", lineHeight: 1.6, marginBlock: 2.5 }}><DebugBreakpointLogIcon style={{ color: "#6E1B5D" }} /> Highlight your unique selling proposition (USP): What sets OTUSONE apart from other software development companies? Do you specialize in a specific industry or technology? Do you offer a unique development approach or methodology? Emphasize this in your messaging.</Typography>
                    <Typography fontSize={16} sx={{ color: "#2E2E2E", lineHeight: 1.6, marginBlock: 2.5 }}><DebugBreakpointLogIcon style={{ color: "#6E1B5D" }} />Expertise and Experience: Do you have a proven track record of success? Showcase your team's qualifications and client testimonials to build trust and credibility.</Typography>
                </Grid>
                <Grid>
                    <img src={img} />
                </Grid>
            </Grid>
            <Grid className={styles.whyUs}>
                <Grid>
                    <Typography variant='h4' fontSize={28} fontWeight={600} sx={{ color: "#2E2E2E" }}>Value Proposition:</Typography>
                    <Typography fontSize={16} sx={{ color: "#2E2E2E", lineHeight: 1.6, marginBlock: 2.5 }}><DebugBreakpointLogIcon style={{ color: "#6E1B5D" }} />Quality and Reliability: Focus on the quality and reliability of the applications you build. Do you have a rigorous testing process? Do you use the latest technologies and best practices?</Typography>

                    <Typography fontSize={16} sx={{ color: "#2E2E2E", lineHeight: 1.6, marginBlock: 2.5 }}><DebugBreakpointLogIcon style={{ color: "#6E1B5D" }} />Customer Focus: Do you offer excellent customer service and support? Do you go the extra mile to understand client needs and deliver results?</Typography>
                    <Typography fontSize={16} sx={{ color: "#2E2E2E", lineHeight: 1.6, marginBlock: 2.5 }}><DebugBreakpointLogIcon style={{ color: "#6E1B5D" }} />Cost-Effectiveness: Are your prices competitive? Do you offer flexible pricing models that fit client budgets?</Typography>
                </Grid>
                <Grid>
                    <img src={img} />
                </Grid>
            </Grid>
            <Typography variant='h5' fontSize={18} fontWeight={500}>"At OTUSONE, we don't just build mobile apps and websites, we craft solutions that elevate your business.  Our team of passionate developers leverages cutting-edge technologies to deliver high-quality, reliable applications that meet your specific needs.  We provide exceptional customer service throughout the entire development process, ensuring your project's success.  Why choose OTUSONE? Because we offer a unique combination of expertise, value, and dedication to your success."</Typography>
        </Grid>
    )
}

export default WhyUs