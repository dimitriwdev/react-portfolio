import React from 'react';
import Navigation from '../components/Navigation';
import bg from '../assets/bg.webp';
import weatherApp from '../assets/portfolioImages/weatherApp.webp';
import nasaApp from '../assets/portfolioImages/nasaApp.webp';
import chatApp from '../assets/portfolioImages/chatApp.webp';
import countdownApp from '../assets/portfolioImages/countdownApp.webp';
import todoApp from '../assets/portfolioImages/todoApp.webp';
import movieDb from '../assets/portfolioImages/movieDb.webp';
import Cards from '../components/portfolioComponents/Cards';

import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  portfolio: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bg})`,
    // Photo by Karsten Würth on unsplash
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    fontFamily: 'Caveat',
    color: '#6BA1B9',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  content: {
    padding: '80px 20px 20px 20px',
    '@media (max-width: 900px)': {
      padding: '20px 20px 20px 20px',
    },
  },
}))

const Portfolio = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      name: `${t('WeatherApp')}`,
      desc: `${t('WeatherAppDesc')}`,
      img: `${weatherApp}`,
      github: 'https://github.com/dimitriwdev/react-weather-app',
      app: 'https://youthful-boyd-82c6e3.netlify.app/'
    },
    {
      id: 2,
      name: `${t('ChatApp')}`,
      desc: `${t('ChatAppDesc')}`,
      img: `${chatApp}`,
      github: 'https://github.com/dimitriwdev/react-chat-app',
      app: 'https://compassionate-poitras-eec308.netlify.app/'
    },
    {
      id: 3,
      name: `${t('NasaApp')}`,
      desc: `${t('NasaAppDesc')}`,
      img: `${nasaApp}`,
      github: 'https://github.com/dimitriwdev/react-nasa-app',
      app: 'https://pensive-mahavira-7a814d.netlify.app/'
    },
    {
      id: 4,
      name: `${t('CountdownApp')}`,
      desc: `${t('CountdownAppDesc')}`,
      img: `${countdownApp}`,
      github: 'https://github.com/dimitriwdev/react-countdown',
      app: 'https://hungry-engelbart-834cad.netlify.app/'
    },
    {
      id: 5,
      name: `${t('TodoApp')}`,
      desc: `${t('TodoAppDesc')}`,
      img: `${todoApp}`,
      github: 'https://github.com/dimitriwdev/react-todo-app',
      app: 'https://friendly-gates-5170e3.netlify.app/'
    },
    {
      id: 6,
      name: `${t('MovieDB')}`,
      desc: `${t('MovieDbAppDesc')}`,
      img: `${movieDb}`,
      github: 'https://github.com/dimitriwdev/react-movie-db',
      app: 'https://confident-roentgen-9f6e2f.netlify.app/'
    },
  ];

  return (
    <div className={classes.portfolio}>
      <Navigation />
      <Grid container className={classes.content}>
        {cards.map((card) => (
          <Cards
            key={card.id}
            card={card}
          />
        ))}
      </Grid>
    </div >
  )
}

export default Portfolio;