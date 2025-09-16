import React, { useState, useRef  } from 'react'
import styles from './Career.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import CareerBanner from '../../components/CareerBanner/CareerBanner'
import { about, jobs } from './data'
import HeadingText from '../../components/HeadingText/HeadingText'
import img from '../../asserst/icons/jobs.png'
import JobModal from '../../components/modal/JobModal/JobModal'
import { baseurl } from '../../baseUrl/baseUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import carrer_1 from '../../asserst/img/career_1.png'

export interface ICareer {
    handleClick: () => void;
}
const Career = () => {
    //const [open, setOpen] = useState(false);
    //const handeClose = () => setOpen(false);
    const [inputVal, setInputVal] = useState({ name: "", email: "", phone: "", qualification: "", experience: "", current_ctc: "", expected_ctc: "", position: "", message: "", resume: "" })
    // const handleModal = (idx: any) => {
    //     setOpen((preState: any) => ({ ...preState, [idx]: !preState[idx] }))
    // };
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: any) => {
        const { name, value, type, files } = e.target;
        const val = type === 'file' ? files[0] : value
        setInputVal({ ...inputVal, [name]: val })
    };

    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});


    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!inputVal.name.trim()) errors.name = "Name is required";
        if (!inputVal.email.trim()) errors.email = "Email is required";
        if (!inputVal.phone.trim()) errors.phone = "Phone number is required";
        if (!inputVal.qualification.trim()) errors.qualification = "Qualification is required";
        if (!inputVal.experience.trim()) errors.experience = "Experience is required";
        if (!inputVal.current_ctc.trim()) errors.current_ctc = "Current CTC is required";
        if (!inputVal.expected_ctc.trim()) errors.expected_ctc = "Expected CTC is required";
        if (!inputVal.position.trim()) errors.position = "Please select a position";
        if (!inputVal.resume) errors.resume = "Resume file is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleClick = async () => {
        if (!validateForm()) {
            toast.error("Please fill all required fields.");
            return;
        }

        try {
            const formData = new FormData();
            Object.entries(inputVal).forEach(([key, value]) =>
                formData.append(key, value as string | Blob)
            );

            const response = await axios.post(`${baseurl}/job/post`, formData);
            if (response.status === 201) {
                toast.success(response.data.message);
                setInputVal({
                    name: "",
                    email: "",
                    phone: "",
                    qualification: "",
                    experience: "",
                    current_ctc: "",
                    expected_ctc: "",
                    position: "",
                    message: "",
                    resume: ""
                });
                 if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
                setFormErrors({});
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong.");
        }
    };


    return (
        <Grid className={styles.careerContainer}>
            <CareerBanner />
            <Grid className={styles.careerAbout}>
                {about.map((item) => {
                    return (
                        <Grid className={styles.card}>
                            <Typography variant='h2' fontSize={25} fontWeight={600}>{item.heading}</Typography>
                            <Typography fontSize={14}>{item.subHeading}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid className={styles.joinUs}>
                <HeadingText
                    heading={'COME AND JOIN US!'}
                    subHeading={'We at OTUSONE understand the state-of-the-business-art technologies that define the future and can serve as an efficient services transformation catalyst for the clients!'}
                />
                {/* <Grid container className={styles.jobsCard}>
                    {jobs.map((item) => {
                        return (
                            <Grid item sm={4} className={styles.card} onClick={() => handleModal(item.id)}>
                                <img alt='img' src={item.icon} width={65} height={65} />
                                <Box>
                                    <Typography variant='h2' fontSize={17} fontWeight={600}>{item.label}</Typography>
                                    <Typography fontSize={13}>{item.desc}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid> */}
                <Grid className={styles.formContainerOuter}>
                    <Grid className={styles.formContainer}>
                        <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#6E1B5D', textAlign: 'center' }}>
                            Apply for a Position at OTUSONE
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor="name" className={styles.label}>Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={inputVal.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={inputVal.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="phone" className={styles.label}>Phone</label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={inputVal.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="qualification" className={styles.label}>Qualification</label>
                                <input
                                    id="qualification"
                                    type="text"
                                    name="qualification"
                                    value={inputVal.qualification}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="experience" className={styles.label}>Experience</label>
                                <input
                                    id="experience"
                                    type="text"
                                    name="experience"
                                    value={inputVal.experience}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="current_ctc" className={styles.label}>Current CTC</label>
                                <input
                                    id="current_ctc"
                                    type="text"
                                    name="current_ctc"
                                    value={inputVal.current_ctc}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="expected_ctc" className={styles.label}>Expected CTC</label>
                                <input
                                    id="expected_ctc"
                                    type="text"
                                    name="expected_ctc"
                                    value={inputVal.expected_ctc}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="position" className={styles.label}>Applying For</label>
                                <select
                                    id="position"
                                    name="position"
                                    value={inputVal.position}
                                    onChange={handleChange}
                                    className={styles.input}
                                >
                                    <option value="">Select a position</option>
                                    <option value="Business Development Manager">Business Development Manager</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Flutter Developer">Flutter Developer</option>
                                    <option value="MERN Developer">MERN Developer</option>
                                    <option value="JAVA Developer">JAVA Developer</option>
                                    <option value="JAVA Developer">.NET Developer</option>
                                    <option value="JAVA Developer">React Native Developer</option>
                                    <option value="Website Developer">Website Developer</option>
                                    <option value="Graphic Designer">Graphic Designer</option>
                                    <option value="UI/UX Designer">UI/UX Designer</option>

                                </select>
                            </Grid>

                            <Grid item xs={12}>
                                <label htmlFor="message" className={styles.label}>Message (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Write a short message..."
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label htmlFor="resume" className={styles.label}>Upload Resume</label>
                                <input
                                    id="resume"
                                    type="file"
                                    name="resume"
                                    ref={fileInputRef}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 3 }}>
                                <button disabled={isLoading} className={styles.submitBtn} onClick={handleClick}>
                                    {isLoading ? "Submitting..." : "Submit Application"}
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
            {/* <JobModal
                open={open}
                inputVal={inputVal}
                handleChange={handleChange}
                handeClose={handeClose}
                handleClick={handleClick}
            /> */}
            <ToastContainer />
        </Grid>
    )
}

export default Career