import React from 'react';
import styles from './AdminHeader.module.scss';
import { Grid, Typography } from '@mui/material';

const AdminHeader = () => {
    return (
        <Grid className={styles.adminBanner}>
            <Typography textAlign={"center"} variant='h2' fontSize={36} fontWeight={600}>Portfolio Admin Panel</Typography>
            <Typography textAlign={"center"}>
                Manage all your portfolio entries, upload new projects, and keep your content up to date.
            </Typography>
        </Grid>
    );
};

export default AdminHeader;
