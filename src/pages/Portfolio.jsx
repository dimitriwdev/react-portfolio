import React from 'react';
import Navigation from '../components/Navigation';
import bgMin from '../assets/bgMin.jpg';
import weatherApp from '../assets/portfolioImages/weatherApp.png';
import nasaApp from '../assets/portfolioImages/nasaApp.png';
import chatApp from '../assets/portfolioImages/chatApp.png';
import countdownApp from '../assets/portfolioImages/countdownApp.png';
import todoApp from '../assets/portfolioImages/todoApp.png';
import movieDb from '../assets/portfolioImages/movieDb.png';
import Cards from '../components/portfolioComponents/Cards';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  portfolio: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bgMin})`,
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

  const cards = [
    {
      id: 1,
      name: 'Weather App',
      desc: 'Weather application built with React, openWeatherApi, geolocation based on custom hook, Material-ui and hidden variables.',
      img: `${weatherApp}`,
      github: 'https://github.com/dimitriwdev/react-weather-app',
      app: 'https://youthful-boyd-82c6e3.netlify.app/'
    },
    {
      id: 2,
      name: 'Chat App',
      desc: 'Chat application created with React, React-chat-engine and Axios.',
      img: `${chatApp}`,
      github: 'https://github.com/dimitriwdev/react-chat-app',
      app: 'https://compassionate-poitras-eec308.netlify.app/'
    },
    {
      id: 3,
      name: 'Nasa App',
      desc: 'React app built using Nasa Api, Axios, React-lines-ellipsis, modal box and Material-ui.',
      img: `${nasaApp}`,
      github: 'https://github.com/dimitriwdev/react-nasa-app',
      app: 'https://pensive-mahavira-7a814d.netlify.app/'
    },
    {
      id: 4,
      name: 'Countdown App',
      desc: 'Countdown application created with React, React-datepiker and DayJs.',
      img: `${countdownApp}`,
      github: 'https://github.com/dimitriwdev/react-countdown',
      app: 'https://hungry-engelbart-834cad.netlify.app/'
    },
    {
      id: 5,
      name: 'Todo App',
      desc: 'Todo application built with React and local storage.',
      img: `${todoApp}`,
      github: 'https://github.com/dimitriwdev/react-todo-app',
      app: 'https://friendly-gates-5170e3.netlify.app/'
    },
    {
      id: 6,
      name: 'MovieDB',
      desc: 'React movie application using TMDB Api and React-router-dom.',
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