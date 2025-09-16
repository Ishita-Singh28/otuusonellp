import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from '@mui/material';
import styles from './EditProfile.module.scss';
import { baseurl } from '../../../baseUrl/baseUrl';


interface PortfolioItem {
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

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: () => void;
    portfolio: PortfolioItem | null;
}

const EditPortfolio: React.FC<Props> = ({ open, onClose, onSave, portfolio }) => {
    const [form, setForm] = useState({
        heading: '',
        desc: '',
        image: '' as string | File,
        post_image: '' as string | File,
        frontend: '',
        backend: '',
        database: '',
        cloud_server: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (portfolio) {
            setForm({
                heading: portfolio.heading,
                desc: portfolio.desc,
                image: portfolio.image,
                post_image: portfolio.post_image,
                frontend: portfolio.frontend,
                backend: portfolio.backend,
                database: portfolio.database,
                cloud_server: portfolio.cloud_server
            });
        }
    }, [portfolio]);

    const handleChange = (field: keyof typeof form, value: string | File) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('heading', form.heading);
        formData.append('desc', form.desc);
        formData.append('frontend', form.frontend);
        formData.append('backend', form.backend);
        formData.append('database', form.database);
        formData.append('cloud_server', form.cloud_server);

        if (form.image instanceof File) formData.append('image', form.image);
        else formData.append('image', form.image);

        if (form.post_image instanceof File) formData.append('post_image', form.post_image);
        else formData.append('post_image', form.post_image);

        try {
            await axios.patch(
                `${baseurl}/portfolio/update/${portfolio?._id}`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            alert('Portfolio updated successfully!');
            onSave();
            onClose();
        } catch (err: any) {
            console.error('Failed to update portfolio', err);
            if (err.response) {
                console.error('Error response:', err.response.data);
                alert(`Failed to update portfolio: ${err.response.data.message || 'Unknown error'}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle className={styles.dialogTitle} sx={{ fontSize: '24px', fontWeight: 'bold', color: '#6E1B5D', textAlign: 'center' }}>Edit Portfolio</DialogTitle>

            <DialogContent className={styles.dialogContent} sx={{ paddingTop: '24px !important' }}>
                <TextField
                    label="Heading"
                    value={form.heading}
                    onChange={(e) => handleChange('heading', e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Description"
                    value={form.desc}
                    onChange={(e) => handleChange('desc', e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                />

                <div className={styles.imageUploadWrapper}>
                    <div className={styles.imageField}>
                        <label>Main Image</label>
                        <input title="img"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleChange('image', file);
                            }}
                        />
                        {form.image && (
                            <img
                                src={form.image instanceof File ? URL.createObjectURL(form.image) : form.image}
                                alt="Preview"
                            />
                        )}
                    </div>

                    <div className={styles.imageField}>
                        <label>Post Image</label>
                        <input title="img"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleChange('post_image', file);
                            }}
                        />
                        {form.post_image && (
                            <img
                                src={form.post_image instanceof File ? URL.createObjectURL(form.post_image) : form.post_image}
                                alt="Post Preview"
                            />
                        )}
                    </div>
                </div>


                <TextField
                    label="Frontend"
                    value={form.frontend}
                    onChange={(e) => handleChange('frontend', e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Backend"
                    value={form.backend}
                    onChange={(e) => handleChange('backend', e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Database"
                    value={form.database}
                    onChange={(e) => handleChange('database', e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Cloud Server"
                    value={form.cloud_server}
                    onChange={(e) => handleChange('cloud_server', e.target.value)}
                    fullWidth
                />
            </DialogContent>
            < DialogActions className={styles.dialog}>
                <DialogActions className={styles.dialogActions}>
                    <Button onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? 'Updating…' : 'Update'}
                    </Button>
                </DialogActions>
            </DialogActions>
        </Dialog>
    );
};

export default EditPortfolio;
