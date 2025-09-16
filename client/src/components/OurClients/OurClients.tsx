import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import styles from './OurClients.module.scss';

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

const OurClients = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleClients = showAll ? data : data.slice(0, 16);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.banner}>
                <Typography variant="h3">Our Clients</Typography>
                <Typography>
                    At OTUSONE LLP, our clients are at the heart of everything we do. We prioritize understanding their unique needs, challenges, and goals to deliver tailored solutions that drive tangible results.
                </Typography>
            </div>

            <Grid container columnSpacing={3} rowSpacing={5} justifyContent="center" className={styles.logoGrid}>
                {visibleClients.map((item) => {
                    const cardClasses = [
                        styles.logoCard,
                        [7, 12, 15, 17].includes(item.id) ? styles.noPadding : '',
                        [1, 4, 5, 14].includes(item.id) ? styles.extraPadding : '',
                    ].join(' ');

                    return (
                        <Grid item xs={6} sm={4} md={2} key={item.id} display="flex" justifyContent="center">
                            <div className={cardClasses}>
                                <img src={item.img} alt={`client-${item.id}`} />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button
                    onClick={() => setShowAll((prev) => !prev)}
                    sx={{
                        padding: '0.6rem 1.5rem',
                        marginBottom: '2rem',
                        backgroundColor: '#6E1B5D',
                        color: '#fff',
                        borderRadius: '4px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#B3125E',
                        }
                    }}
                >
                    {showAll ? 'View Less' : 'View More'}
                </Button>
            </div>

        </div>
    );
};

export default OurClients;