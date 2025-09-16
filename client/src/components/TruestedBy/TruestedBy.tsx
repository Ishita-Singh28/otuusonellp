
import React from 'react';
import { Grid } from '@mui/material';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './TruestedBy.module.scss';
import HeadingText from '../HeadingText/HeadingText';

import img from '../../asserst/img/client/creditpedia  1.png';
import img2 from '../../asserst/img/client/intgrow 1.png';
import img3 from '../../asserst/img/client/labile  1.png';
import img4 from '../../asserst/img/client/labile -2 1.png';
import img5 from '../../asserst/img/client/vidura  1.png';
import img6 from '../../asserst/img/client/image 49.png';
import img7 from '../../asserst/img/client/image 50.png';
import img8 from '../../asserst/img/client/img51.png';
import img9 from '../../asserst/img/client/img52.png';
import img10 from '../../asserst/img/client/img53.png';
import img11 from '../../asserst/img/client/img54.png';
import img12 from '../../asserst/img/client/img55.webp';
import img13 from '../../asserst/img/client/img56.jpeg';
import img14 from '../../asserst/img/client/img57.png';
import img15 from '../../asserst/img/client/img58.png';
import img16 from '../../asserst/img/client/img59.png';
import img17 from '../../asserst/img/client/img60.png';
import img18 from '../../asserst/img/client/img61.png';


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

const TruestedBy = () => {
    const data = [
       { id: 1, img },
    { id: 2, img: img2 },
    { id: 3, img: img13 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img7 },
    { id: 7, img: img12 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 },
    { id: 12, img: img6 },
    { id: 13, img: img18 },
    { id: 14, img: img14 },
    { id: 15, img: img15 },
    { id: 16, img: img16 },
    { id: 17, img: img17 },
    { id: 18, img: img3 },

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
                    heading={'Our Clients'}
                    subHeading={'At OTUSONE LLP, our clients are at the heart of everything we do...'}
                />
            </div>
            
            <Slider {...settings}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.card} ${[7, 12, 15, 17].includes(item.id) ? styles.noPadding : ''} ${[1, 4, 5, 14].includes(item.id) ? styles.extraPadding : ''}`}
                    >
                        <img src={item.img} alt={`client-${item.id}`} />
                    </div>

                ))}
            </Slider>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <button
                    onClick={() => window.location.href = '/our-clients'}
                    className={styles.viewMoreBtn}
                >
                    View More
                </button>
            </div>

        </Grid>
    );
};

export default TruestedBy;
