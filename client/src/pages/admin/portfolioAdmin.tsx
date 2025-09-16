import React, { useState } from 'react';
import { Grid } from '@mui/material';
import styles from './Admin.module.scss';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import AddPortfolioForm from '../../components/Admin/AddPortfolioForm/AddPortfolioForm';
import PortfolioList from '../../components/Admin/PortfolioList/PortfolioList';

const Admin = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => setRefresh(prev => !prev);

    return (
        <Grid>
            <AdminHeader />
            <AddPortfolioForm onSave={handleRefresh} />
            <PortfolioList refresh={refresh} />
        </Grid>
    );
};

export default Admin;
