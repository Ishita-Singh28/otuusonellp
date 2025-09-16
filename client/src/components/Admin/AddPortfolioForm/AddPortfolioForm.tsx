import React, { useState, useRef } from 'react';
import { Button, TextField, Grid, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import styles from './AddPortfolioForm.module.scss';
import { baseurl } from '../../../baseUrl/baseUrl';

interface Props {
    onSave: () => void;
}

const AddPortfolioForm: React.FC<Props> = ({ onSave }) => {
    const [formData, setFormData] = useState<Record<string, string | File | null>>({
        heading: '',
        desc: '',
        frontend: '',
        backend: '',
        database: '',
        cloud_server: '',
        image: null,
        post_image: null
    });

    const [loading, setLoading] = useState(false);

    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const postImageInputRef = useRef<HTMLInputElement | null>(null);


    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value as any);
        });

        try {
            const res = await axios.post(`${baseurl}/portfolio/post`, data);
            alert('Portfolio created successfully');
            if (imageInputRef.current) imageInputRef.current.value = '';
            if (postImageInputRef.current) postImageInputRef.current.value = '';
            setFormData({
                heading: '',
                desc: '',
                frontend: '',
                backend: '',
                database: '',
                cloud_server: '',
                image: null,
                post_image: null
            });


            onSave();
        } catch (err) {
            alert('Error uploading portfolio');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper elevation={3} className={styles.formWrapper}>
            <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
                Add New Portfolio
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {['heading', 'frontend', 'backend', 'database', 'cloud_server', 'desc'].map((field) => (
                        <Grid item xs={12} sm={field === 'desc' ? 12 : 6} key={field}>
                            <TextField
                                fullWidth
                                multiline={field === 'desc'}
                                rows={field === 'desc' ? 4 : undefined}
                                label={field.charAt(0).toUpperCase() + field.slice(1)}
                                name={field}
                                value={formData[field] as string}
                                onChange={handleChange}
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12} sm={6}>
                        <Box className={styles.fileInput}>
                            <label htmlFor="image">Upload Image:</label>
                            <input title='img' type="file" name="image" ref={imageInputRef} onChange={handleChange} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box className={styles.fileInput}>
                            <label htmlFor="post_image">Upload Post Image:</label>
                            <input title='post_img' type="file" name="post_image" ref={postImageInputRef} onChange={handleChange} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" type="submit" sx={{
                            background: '#6E1B5D',
                            marginTop: '0.75rem',
                            padding: '0.75rem',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                background: '#6E1B5D',
                            },
                        }}>
                            
                            {loading ? 'Uploading...' : 'Add Portfolio'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddPortfolioForm;
