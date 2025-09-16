// import React, { useEffect, useState } from 'react'
// import styles from './ResponsiveAbout.module.scss'
// import { Grid, Typography } from '@mui/material'
// import img1 from '../../../asserst/img/team/team_1.png'
// import img2 from '../../../asserst/img/team/team_2.png'
// import img3 from '../../../asserst/img/team/team_3.png'
// import img4 from '../../../asserst/img/team/team_4.png'
// import img5 from '../../../asserst/img/team/team_5.jpeg'
// import img6 from '../../../asserst/img/team/team_6.png'
// import { FaQuoteLeft } from "react-icons/fa";

// const QuoteLeftIcon = FaQuoteLeft as React.FC<React.SVGProps<SVGSVGElement>>;

// const ResponsiveAbout = () => {
//     const imgSrcList = ["Akanksha Singh", "Aparna Singh", "Ankit Singh", "Aman Shukla", "Narendra Singh", "Abhishek Mishra"];
//     const [selectedImg, setSelectedImg] = useState<any>(null);
//     const [selectedName, setSelectedName] = useState("Akanksha Singh")
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleImageClick = (imgSrc: any) => {
//         setSelectedImg(imgSrc);
//         setSelectedName(imgSrc);
//     };
//     const data = [
//         {
//             "id": 1,
//             "name": "Akanksha Singh",
//             "designation": ' Founder & CEO',
//             "url": "www.otusone.com",
//             "desc": "Akanksha Singh, Founder & CEO of OTUSONE LLP, brings visionary leadership and a passion for innovation to the forefront of our IT company. With a rich background in technology and a commitment to excellence, Akanksha drives our team towards pioneering solutions and client satisfaction. Her strategic foresight and steadfast dedication empower OTUSONE to excel in an ever-evolving digital landscape, consistently delivering cutting-edge services and driving impactful results for our clients. With over 6 years of comprehensive experience in the IT industry, Akanksha's leadership continues to elevate OTUSONE LLP, establishing it as a trusted partner and a beacon of innovation and excellence within the IT community."
//         },
//         {
//             "id": 2,
//             "name": "Aparna Singh",
//             "designation": 'Co -Founder & HR Head',
//             "url": "www.otusone.com",
//             "desc": "Aparna Singh, Co-founder & HR Head at OTUSONE LLP. With over 8+ years of experience brings a blend of expertise in human resources and a deep understanding of the IT industry. With a focus on nurturing talent and fostering a vibrant organizational culture, she plays a pivotal role in driving employee engagement and development. Aparna is dedicated to creating an environment where individuals can thrive, ensuring OTUSONE LLP attracts, retains, and empowers top talent to achieve collective success."
//         },
//         {
//             "id": 3,
//             "name": "Ankit Singh",
//             "designation": 'Director',
//             "url": "www.otusone.com",
//             "desc": "Ankit Singh, Director at OTUSONE LLP. With over 9+ years of diverse experience spanning electrical engineering, education, IT, and management, Ankit brings a unique blend of expertise to the table. His journey reflects a dynamic career trajectory marked by a relentless pursuit of excellence and innovation across various sectors. Ankit's extensive background enables him to bring a holistic perspective to every project, driving impactful solutions that resonate with clients' needs. As a visionary leader, he spearheads strategic initiatives, guiding OTUSONE LLP towards sustainable growth and success. Ankit's leadership fosters a culture of creativity, collaboration, and continuous improvement, making OTUSONE LLP a frontrunner in the IT industry"
//         },
//         {
//             "id": 4,
//             "name": "Aman Shukla",
//             "designation": 'BDM & Graphic Designer',
//             "url": "www.otusone.com",
//             "desc": "Aman Shukla, the dynamic Business Development Manager and talented Graphic Designer at OTUSONE LLP, a premier IT company renowned for innovation. With over 3 years of hands-on experience in the IT sector, Aman brings a unique blend of creativity and strategic acumen to his roles. As a Business Development Manager, he spearheads initiatives to foster strategic partnerships and drive business growth. Simultaneously, Aman's prowess as a Graphic Designer ensures that OTUSONE LLP delivers visually stunning and engaging design solutions to clients. His multidisciplinary expertise and dedication to excellence make him an invaluable asset, driving OTUSONE LLP towards continued success and recognition in the industry"
//         },
//         {
//             "id": 5,
//             "name": "Narendra Singh",
//             "designation": 'Project Manager & Full Stack Developer',
//             "url": "www.otusone.com",
//             "desc": "Narendra Singh, the proficient Project Manager and skilled Full Stack Developer at OTUSONE LLP, an esteemed IT firm leading the way in technological innovation. With over 3 years of extensive experience in the IT industry, Narendra brings a wealth of expertise to his dual role. As a Project Manager, he orchestrates the seamless execution of projects, ensuring timely delivery and client satisfaction. Simultaneously, Narendra's proficiency as a Full Stack Developer enables him to architect robust and scalable solutions that meet the diverse needs of clients. His dedication to excellence and leadership qualities play a pivotal role in driving OTUSONE LLP towards continued success and growth in the competitive IT landscape"
//         },
//         {
//             "id": 5,
//             "name": "Abhishek Mishra",
//             "designation": 'Sr. Mobile Application Developer',
//             "url": "www.otusone.com",
//             "desc": "Abhishek Mishra, the accomplished Senior Mobile Application Developer at OTUSONE LLP, a leading IT enterprise dedicated to technological excellence. With over 3 years of seasoned experience in the IT domain, Abhishek brings a wealth of expertise and innovation to his role. As a Senior Mobile Application Developer, he specializes in crafting intuitive and high-performing mobile solutions that meet and exceed client expectations. Abhishek's proficiency extends across various platforms, ensuring that OTUSONE LLP delivers cutting-edge applications tailored to clients' specific needs. His commitment to quality, coupled with a passion for innovation, solidifies his position as a key contributor to OTUSONE LLP's success and reputation in the industry."
//         }
//     ]
//     useEffect(() => {
//         const interval = setInterval(() => {
//             handleImageClick(imgSrcList[currentIndex]);
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrcList.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [currentIndex]);
//     return (
//         <Grid container className={styles.mobileAbout}>
//             <Grid item sm={7} className={styles.newWorkAboutImg}>
//                 <img alt='' src={img1} width={91} height={100} className={selectedImg === "Akanksha Singh" ? styles.animate1 : ""} />
//                 <img alt='' src={img2} width={91} height={100} className={selectedImg === "Aparna Singh" ? styles.animate5 : ""} />
//                 <img alt='' src={img6} width={91} height={100} className={selectedImg === "Ankit Singh" ? styles.animate3 : ""} />
//                 <img alt='' src={img3} width={91} height={100} className={selectedImg === "Aman Shukla" ? styles.animate2 : ""} />
//                 <img alt='' src={img4} width={91} height={100} className={selectedImg === "Narendra Singh" ? styles.animate4 : ""} />
//                 <img alt='' src={img5} width={91} height={100} className={selectedImg === "Abhishek Mishra" ? styles.animate4 : ""} />
//                 <Grid className={styles.bgStyle}>
//                 </Grid>
//             </Grid>
//             <Grid item sm={5} className={styles.newWorkAboutInfo}>
//                 {data
//                     .filter((item) => item.name === selectedName)
//                     .map((item) => {
//                         return (
//                             <>
//                                 <Typography variant='h4' fontSize={25} fontWeight={600}>
//                                     {item.name},
//                                 </Typography>
//                                 <Typography>{item.designation},</Typography>
//                                 <Typography>{item.url}</Typography>
//                                 <Typography variant='h5' fontSize={14} fontWeight={400}>
//                                     {item.desc}
//                                 </Typography>
//                                 <Grid className={styles.bgStyle}>
//                                     <QuoteLeftIcon />
//                                 </Grid>
//                             </>
//                         )
//                     })}
//             </Grid>
//         </Grid>
//     )
// }

// export default ResponsiveAbout

import React, { useEffect, useState } from 'react'
import styles from './ResponsiveAbout.module.scss'
import { Grid, Typography } from '@mui/material'
import img1 from '../../../asserst/icons/serviceIcon/Group 38595.svg'
import img2 from '../../../asserst/icons/serviceIcon/web/Group 38615.png'
import img3 from '../../../asserst/icons/serviceIcon/web/Group 38617.png'
import img4 from '../../../asserst/icons/serviceIcon/app/Group 38614.png'
import img5 from '../../../asserst/icons/serviceIcon/app/Group 38594.png'
import img6 from '../../../asserst/icons/serviceIcon/app/Group 38593.png'
import { FaQuoteLeft } from "react-icons/fa";

const QuoteLeftIcon = FaQuoteLeft as React.FC<React.SVGProps<SVGSVGElement>>;

const ResponsiveAbout = () => {
    const imgSrcList = ["MERN", "WordPress", "MEAN", "Flutter", "React Native", "Android App"];
    const [selectedImg, setSelectedImg] = useState<any>(null);
    const [selectedName, setSelectedName] = useState("MERN")
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (imgSrc: any) => {
        setSelectedImg(imgSrc);
        setSelectedName(imgSrc);
    };
    const data = [
        {
            id: 1,
            name: "MERN",
            desc: "The MERN stack is a powerful full-stack JavaScript framework composed of MongoDB, Express.js, React, and Node.js. It allows developers to build robust, scalable, and maintainable web applications using a single programming language — JavaScript — across both the front-end and back-end.",
            benefits: [
                "End-to-end JavaScript development",
                "Fast performance and scalability",
                "Modular architecture with React",
                "Seamless integration of technologies",
                "Strong developer community",
                "Cross-platform development capabilities"
            ]
        },
        {
            id: 2,
            name: "WordPress",
            desc: "WordPress is a powerful content management system (CMS) used to build dynamic websites and blogs with ease. It offers a wide range of plugins and themes to customize any website for businesses, portfolios, and eCommerce.",
            benefits: [
                "User-friendly interface",
                "Thousands of free and premium themes and plugins",
                "SEO-optimized structure",
                "Robust community support",
                "Cost-effective website development",
                "Frequent updates and improvements"
            ]
        },
        {
            id: 3,
            name: "MEAN",
            desc: "The MEAN stack is a popular full-stack JavaScript solution composed of MongoDB, Express.js, Angular, and Node.js. It enables developers to build dynamic and high-performance web applications using a single language across the stack.",
            benefits: [
                "Full-stack JavaScript with MongoDB, Express, Angular, and Node.js",
                "Efficient performance and maintainability",
                "Real-time application support",
                "Open-source and widely supported",
                "Reusability and modularity with Angular",
                "Easier collaboration across front-end and back-end teams"
            ]
        },
        {
            id: 4,
            name: "Flutter",
            desc: "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
            benefits: [
                "Single codebase for multiple platforms",
                "High-performance rendering engine",
                "Rich widget library for expressive UIs",
                "Hot reload for faster development",
                "Strong community and Google support",
                "Growing ecosystem of plugins and tools"
            ]
        },
        {
            id: 5,
            name: "React Native",
            desc: "React Native is a popular framework developed by Meta (Facebook) for building cross-platform mobile applications using React and JavaScript.",
            benefits: [
                "Cross-platform mobile app development",
                "Reusable components and logic",
                "Native performance and responsiveness",
                "Fast refresh for improved development workflow",
                "Large community and third-party libraries",
                "Integration with native modules when needed"
            ]
        },
        {
            id: 6,
            name: "Android App",
            desc: "Android app development focuses on building applications for devices running the Android operating system using tools like Java, Kotlin, or Flutter.",
            benefits: [
                "Wide market reach and user base",
                "Customizable and open ecosystem",
                "Seamless integration with Google services",
                "Extensive development tools (Android Studio, etc.)",
                "Multiple distribution channels (Play Store, OEMs)",
                "Flexible UI and hardware capabilities"
            ]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleImageClick(imgSrcList[currentIndex]);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrcList.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <Grid container className={styles.mobileAbout}>
            <Grid item sm={7} className={styles.newWorkAboutImg}>
                <img alt='' src={img1} width={71} height={80} className={selectedImg === "MERN" ? styles.animate1 : ""} />
                <img alt='' src={img2} width={71} height={80} className={selectedImg === "WordPress" ? styles.animate5 : ""} />
                <img alt='' src={img6} width={71} height={80} className={selectedImg === "MEAN" ? styles.animate3 : ""} />
                <img alt='' src={img3} width={71} height={80} className={selectedImg === "Flutter" ? styles.animate2 : ""} />
                <img alt='' src={img4} width={71} height={80} className={selectedImg === "React Native" ? styles.animate4 : ""} />
                <img alt='' src={img5} width={71} height={80} className={selectedImg === "Android App" ? styles.animate4 : ""} />

                <Grid className={styles.bgStyle}>
                </Grid>
            </Grid>
            <Grid item sm={5} className={styles.newWorkAboutInfo}>
                {data
                    .filter((item) => item.name === selectedName)
                    .map((item) => {
                        return (
                            <>
                                <Typography variant="h4" fontSize={25} fontWeight={600}>
                                    {item.name}
                                </Typography>

                                <Typography variant="h5" fontSize={14} fontWeight={400}>
                                    {item.desc}
                                </Typography>

                                {item.benefits && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            fontSize={16}
                                            fontWeight={600}
                                            style={{ marginTop: '1rem', color: 'black' }}
                                        >
                                            Benefits:
                                        </Typography>

                                        <ul style={{ paddingLeft: '1.2rem', color: 'black' }}>
                                            {item.benefits.map((benefit: string, index: number) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        fontSize: '14px',
                                                        marginBottom: '12px',
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    <Typography fontSize={14} fontFamily="inherit">
                                                        {benefit}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <Grid className={styles.bgStyle}>
                                    <QuoteLeftIcon />
                                </Grid>
                            </>
                        );
                    })}
            </Grid>

        </Grid>
    )
}

export default ResponsiveAbout