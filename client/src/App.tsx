import { Box, Grid } from '@mui/material';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResponsiveFooter from './components/ResponsiveFooter/ResponsiveFooter';
import ResponsiveHeader from './components/ResponsiveHeader/ResponsiveHeader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioDetails from './pages/portfolioDetails/PortfolioDetails';
import ServicePage from './pages/service/ServicePage';
import Contact from './pages/contact/Contact';
import Career from './pages/career/Career';
import PortfolioAdmin from './pages/admin/portfolioAdmin';
import Login from './pages/login/Login';
import OurClients from './components/OurClients/OurClients';




import styles from './App.module.scss';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Grid className={styles.appContainer}>
      <Box>
        <Header />
        <ResponsiveHeader />
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/admin" element={<ProtectedRoute><PortfolioAdmin /></ProtectedRoute>} />
      </Routes>

      {window.innerWidth > 480 ? <Footer /> : <ResponsiveFooter />}
    </Grid>
  );
};


export default App;
