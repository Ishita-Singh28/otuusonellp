import React, { useState } from 'react';
import styles from "./Login.module.scss";
import { Alert, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../asserst/logo/image 1.svg';
import hr from '../../asserst/img/hr.jpg';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInputs = () => {
    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) return;

    if (email === 'admin@otusone.com' && password === 'admin@otusone') {
      dispatch(login());
      navigate('/admin');
    } else {
      setDialogMessage('Invalid email or password');
      setOpenDialog(true);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className={styles.formWrapper}>
        <div className={styles.loginWrapper}>
          <div className={styles.leftPanel}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <img src={hr} alt="sideimg" className={styles.illustration} />
          </div>

          <div className={styles.rightPanel}>
            <div className={styles.formContainer}>
              <Typography variant="h5" className={styles.welcome}>
                Welcome <span>to login!</span>
              </Typography>

              {openDialog && (
                <Alert
                  severity="error"
                  onClose={() => setOpenDialog(false)}
                  style={{ marginBottom: '1rem' }}
                >
                  {dialogMessage}
                </Alert>
              )}


              <TextField
                fullWidth
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Link to="" className={styles.forgotLink}></Link>

              <Button
                variant="contained"
                fullWidth
                className={styles.loginButton}
                type="submit"
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </form>



      {openDialog && (
        <Alert
          severity="error"
          onClose={() => setOpenDialog(false)}
          style={{ margin: '1rem auto', maxWidth: '400px' }}
        >
          {dialogMessage}
        </Alert>
      )}

    </>
  );
};

export default Login;
