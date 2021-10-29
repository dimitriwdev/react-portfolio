import React from 'react';
import Navigation from '../components/Navigation';
import Skills from "../components/Skills";
import Tools from '../components/Tools';
import bgMin from '../assets/bgMin.jpg';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  knowledges: {
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
    padding: '20px 20px 20px 80px',
    '@media (max-width: 1200px)': {
      padding: '20px ',
    },
    '@media (max-width: 900px)': {
      padding: '20px',
    },
    '@media (max-width: 400px)': {
      padding: '20px',
    },
  },
}))

const Knowledges = () => {
  const classes = useStyles();

  return (
    <div className={classes.knowledges}>
      <Navigation />
      <Grid container alignItems='center' className={classes.content}>
        <Grid container item xs={12}><Skills className={classes.skills} /></Grid>
        <Grid container item xs={12}><Tools className={classes.tools} /></Grid>
      </Grid>
    </div >
  )
}

export default Knowledges;