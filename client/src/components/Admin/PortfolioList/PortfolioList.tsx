import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
import axios from 'axios';
import styles from './PortfolioList.module.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import EditPortfolioModal from '../EditPortfolio/EditPortfolio';
import { baseurl } from '../../../baseUrl/baseUrl';



const ArrowForwardIcon = IoIosArrowForward as React.FC<React.SVGProps<SVGSVGElement>>;

interface Portfolio {
    _id: string;
    heading: string;
    desc: string;
    image: string;
    post_image: string;
    frontend: string;
    backend: string;
    database: string;
    cloud_server: string;
}

const formattedHeading = (heading: string) => {
    return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

interface Props {
    refresh: boolean;
}

const PortfolioList: React.FC<Props> = ({ refresh }) => {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [isSeeAll, setIsSeeAll] = useState(false);

    const [editOpen, setEditOpen] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);

    const fetchPortfolios = async () => {
        try {
            const res = await axios.get(`${baseurl}/portfolio`);
            setPortfolios(res.data.portfolio);
        } catch (err) {
            console.error('Failed to fetch portfolios');
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${baseurl}/portfolio/delete/${id}`);
            alert('Portfolio deleted successfully!');
            fetchPortfolios();
        } catch (err) {
            console.error('Failed to delete portfolio');
        }
    };

    const handleEdit = (item: Portfolio) => {
        setSelectedPortfolio(item);
        setEditOpen(true);
    };

    useEffect(() => {
        fetchPortfolios();
    }, [refresh]);

    return (
        <>
            <Grid className={styles.portfolioListWrapper}>
                <Grid className={styles.ourRecentWork}>
                    <Typography variant="h5" fontSize={15} fontWeight={500}>
                        Portfolio
                    </Typography>
                    <Typography variant="h4" fontSize={26} fontWeight={700}>
                        Portfolio Projects
                    </Typography>
                </Grid>

                <Grid container className={styles.recentWorkCard}>
                    {(isSeeAll ? portfolios : portfolios.slice(0, 3)).map((item) => (
                        <Grid item sm={4} key={item._id}>
                            <img src={item.image} alt="Portfolio" />
                            <Typography
                                variant="h4"
                                fontSize={20}
                                fontWeight={600}
                                className={styles.heading}
                            >
                                {item.heading}
                            </Typography>

                            <Typography
                                dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 120) + '...' }}
                            ></Typography>

                            <Link to={`/portfolio/${formattedHeading(item.heading)}`}>
                                <Typography
                                    variant="h5"
                                    fontSize={14}
                                    fontWeight={500}
                                    color="primary"
                                    style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center' }}
                                >
                                    Read more <ArrowForwardIcon style={{ marginLeft: '4px' }} />
                                </Typography>
                            </Link>

                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box className={styles.seeAllBtn}>
                    <Button variant="contained" onClick={() => setIsSeeAll(!isSeeAll)} sx={{ backgroundColor: '#6E1B5D' }}>
                        {!isSeeAll ? 'See All Portfolio' : 'See Less'}
                    </Button>
                </Box>
            </Grid>

            <EditPortfolioModal
                open={editOpen}
                onClose={() => setEditOpen(false)}
                onSave={fetchPortfolios}
                portfolio={selectedPortfolio}
            />
        </>
    );
};

export default PortfolioList;
