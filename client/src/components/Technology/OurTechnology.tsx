
import React from 'react';
import { Grid } from '@mui/material';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './OurTechnology.module.scss';
import HeadingText from '../HeadingText/HeadingText';

import img from '../../asserst/icons/serviceIcon/Group 38592.svg'
import img1 from '../../asserst/icons/serviceIcon/Group 38593.svg'
import img2 from '../../asserst/icons/serviceIcon/Group 38594.svg'
import img3 from '../../asserst/icons/serviceIcon/Group 38595.svg'
import img4 from '../../asserst/icons/serviceIcon/web/Group 38595.png'
import img5 from '../../asserst/icons/serviceIcon/web/Group 38615.png'
import img6 from '../../asserst/icons/serviceIcon/web/Group 38616.png'
import img7 from '../../asserst/icons/serviceIcon/web/Group 38617.png'
import img8 from '../../asserst/icons/serviceIcon/app/Group 38614.png'
import img9 from '../../asserst/icons/serviceIcon/app/Group 38594.png'
import img10 from '../../asserst/icons/serviceIcon/app/Group 38593.png'
import img11 from '../../asserst/icons/serviceIcon/app/Group 38592.png'
import img12 from '../../asserst/icons/serviceIcon/software/Group 38602.png'
import img13 from '../../asserst/icons/serviceIcon/software/Group 38611.png'
import img14 from '../../asserst/icons/serviceIcon/software/Group 38612.png'
import img15 from '../../asserst/icons/serviceIcon/software/Group 38613.png'
import img16 from '../../asserst/icons/serviceIcon/graphics/Group 38606.png'
import img17 from '../../asserst/icons/serviceIcon/graphics/Group 38609.png'
import img18 from '../../asserst/icons/serviceIcon/graphics/Group 38626.png'
import img19 from '../../asserst/icons/serviceIcon/graphics/Group 38633.png'
import img20 from '../../asserst/icons/serviceIcon/video/Group 38627.png'
import img21 from '../../asserst/icons/serviceIcon/video/Group 38628.png'
import img22 from '../../asserst/icons/serviceIcon/video/Group 38629.png'
import img23 from '../../asserst/icons/serviceIcon/video/Group 38630.png'


interface ArrowProps {
    className?: string;
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
    <div className={`${className} ${styles.customArrow} ${styles.leftArrow}`} onClick={onClick}>
        {AiOutlineLeft({ size: 24 })}
    </div>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
    <div className={`${className} ${styles.customArrow} ${styles.rightArrow}`} onClick={onClick}>
        {AiOutlineRight({ size: 24 })}
    </div>
);

const OurTechnology = () => {
    const data = [
       { id: 1, img },
    { id: 2, img: img1 },
    { id: 3, img: img2 },
    { id: 4, img: img3 },
    { id: 5, img: img4 },
    { id: 6, img: img5 },
    { id: 7, img: img6 },
    { id: 8, img: img7 },
    { id: 9, img: img8 },
    { id: 10, img: img9 },
    { id: 11, img: img10 },
    { id: 12, img: img11 },
    { id: 13, img: img12 },
    { id: 14, img: img13 },
    { id: 15, img: img14 },
    { id: 16, img: img15 },
    { id: 17, img: img16 },
    { id: 18, img: img17 },
    { id: 19, img: img18 },
    { id: 20, img: img19 },
    { id: 21, img: img20 },
    { id: 22, img: img21 },
    { id: 23, img: img22 },
    { id: 24, img: img23 },


    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 }
            }
        ]
    };

    return (
        <Grid className={styles.truestedByContainer}>
            <div style={{ marginBottom: '2rem' }}>
                <HeadingText
                    heading={'Technology'}
                    subHeading={'Elevate your business through our cutting-edge technology. We provide solutions that align with your goals and aspirations.'}
                />
            </div>
            
            <Slider {...settings}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={styles.card}
                    >
                        <img src={item.img} alt={`client-${item.id}`} />
                    </div>

                ))}
            </Slider>
            

        </Grid>
    );
};

export default OurTechnology;
