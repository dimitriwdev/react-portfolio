import React from 'react';
import Navigation from '../components/Navigation';
import bg from '../assets/bg.webp';

import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  home: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bg})`,
    // Photo by Karsten Würth on unsplash
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: '#6BA1B9',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  homeContent: {
    width: '100%',
    padding: '40px',
    '@media (max-width: 600px)': {
      padding: '20px',
    },
  },
  content: {
    padding: '150px 100px',
    fontFamily: 'Caveat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    letterSpacing: '2px',
    '@media (max-width: 1200px)': {
      padding: '150px 60px',
    },
    '@media (max-width: 900px)': {
      padding: '75px 60px',
    },
    '@media (max-width: 600px)': {
      padding: '75px 0px',
    },
  },
  name: {
    fontSize: '50px',
    margin: 0,
    letterSpacing: '3px',
    textShadow: '3px 6px 2px #000',
    '@media (max-width: 1130px)': {
      fontSize: '40px',
    },
    '@media (max-width: 600px)': {
      fontSize: '30px',
    },
    '@media (max-width: 400px)': {
    },
  },
  role: {
    fontSize: '30px',
    padding: '35px 0 120px 0',
    margin: 0,
    letterSpacing: '0.1rem',
    textShadow: '1px 4px 1px #000',
    '@media (max-width: 1130px)': {
      fontSize: '20px',
    },
    '@media (max-width: 600px)': {
      textAlign: 'left',
      padding: '50px 0px 50px 0px',
    },
  },
  pdf: {
    display: 'block',
    fontSize: '20px',
    border: '1px solid rgb(240, 240, 240)',
    padding: '15px 25px',
    boxShadow: '0 5px 1px rgb(15, 15, 15)',
    color: 'rgb(240, 240, 240)',
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover': {
      border: '1px solid rgb(2, 37, 51)',
      backgroundColor: 'rgb(240, 240, 240)',
      color: 'rgb(2, 37, 51)',
    },
  },
}))

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.home}>
      <Navigation />
      <div className={classes.homeContent}>
        <div className={classes.content}>
          <h2 className={classes.name}>
            Dimitri Devoille
          </h2>
          <h3 className={classes.role}>
            {t('Role')}
          </h3>
          <div>
            <a className={classes.pdf} href='./media/CV_Dimitri-Devoille.pdf' target='_blank' rel="noopener noreferrer">{t('CV')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;