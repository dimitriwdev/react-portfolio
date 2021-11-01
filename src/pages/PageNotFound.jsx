import React from 'react';
import Navigation from '../components/Navigation';
import bgMin from '../assets/bgMin.jpg';

import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(() => ({
  pageNotFound: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bgMin})`,
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
  content: {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft: '150px',
    '@media (max-width: 900px)': {
      paddingLeft: '60px',
      paddingTop: '160px',
    },
    '@media (max-width: 600px)': {
      alignItems: 'center',
    },
  },
  returnButton: {
    marginTop: '30px',
    width: '50px',
    height: '50px',
    color: 'rgb(240, 240, 240)',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    border: '1px solid rgb(240, 240, 240)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.2s',
    '&:hover': {
      border: '1px solid rgb(2, 37, 51)',
      backgroundColor: 'rgb(240, 240, 240)',
      color: 'rgb(2, 37, 51)',
    },
  },
  text: {
    fontSize: '35px',
    '@media (max-width: 600px)': {
      fontSize: '25px',
    },
  },
}))

const PageNotFound = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const result = Math.random() * 10;
  let randomPage;
  if (result < 2) {
    randomPage = '/';
  } else if (result < 4) {
    randomPage = '/knowledges';
  } else if (result < 6) {
    randomPage = '/portfolio';
  } else if (result <= 10) {
    randomPage = '/contact';
  }

  return (
    <div className={classes.pageNotFound}>
      <Navigation />
      <div className={classes.content}>
        <h2 className={classes.text}>{t('PageNotFound')}</h2>
        <NavLink exact to={randomPage} className={classes.returnButton}><ArrowBackIcon className={classes.icon} /></NavLink>
      </div>
    </div >
  )
}

export default PageNotFound;