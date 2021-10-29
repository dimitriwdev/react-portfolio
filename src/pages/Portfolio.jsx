import React, { useState } from 'react';
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
  const appDetails = {
    weatherDetails: {
      appLink: 'https://youthful-boyd-82c6e3.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-weather-app',
      description: 'Weather application built with react, openweatherapi, geolocation feature, custom hooks, material-ui and hidden variables.',
    },
    chatDetails: {
      appLink: 'https://compassionate-poitras-eec308.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-chat-app',
      description: 'Chat application created with react, react-chat-engine and axios.',
    },
    nasaDetails: {
      appLink: 'https://pensive-mahavira-7a814d.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-nasa-app',
      description: 'React app built using nasa api, axios, react-lines-ellipsis, modal box and material-ui.',
    },
    countdownDetails: {
      appLink: 'https://hungry-engelbart-834cad.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-countdown',
      description: 'Countdown application created with react, react-datepiker and dayjs.',
    },
    todoDetails: {
      appLink: 'https://friendly-gates-5170e3.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-todo-app',
      description: 'Todo application built with react and local storage.',
    },
    movieDetails: {
      appLink: 'https://confident-roentgen-9f6e2f.netlify.app/',
      githubLink: 'https://github.com/dimitriwdev/react-movie-db',
      description: 'React movie application using tmdb api and react-router-dom',
    },
  }

  const [cards, setCards] = useState([
    { id: 1, name: 'Weather App', desc: `${appDetails.weatherDetails.description}`, img: `${weatherApp}`, github: `${appDetails.weatherDetails.githubLink}`, app: `${appDetails.weatherDetails.appLink}` },
    { id: 2, name: 'Chat App', desc: `${appDetails.chatDetails.description}`, img: `${chatApp}`, github: `${appDetails.chatDetails.githubLink}`, app: `${appDetails.chatDetails.appLink}` },
    { id: 3, name: 'Nasa App', desc: `${appDetails.nasaDetails.description}`, img: `${nasaApp}`, github: `${appDetails.nasaDetails.githubLink}`, app: `${appDetails.nasaDetails.appLink}` },
    { id: 4, name: 'Countdown App', desc: `${appDetails.countdownDetails.description}`, img: `${countdownApp}`, github: `${appDetails.countdownDetails.githubLink}`, app: `${appDetails.countdownDetails.appLink}` },
    { id: 5, name: 'Todo App', desc: `${appDetails.todoDetails.description}`, img: `${todoApp}`, github: `${appDetails.todoDetails.githubLink}`, app: `${appDetails.todoDetails.appLink}` },
    { id: 6, name: 'MovieDB', desc: `${appDetails.movieDetails.description}`, img: `${movieDb}`, github: `${appDetails.movieDetails.githubLink}`, app: `${appDetails.movieDetails.appLink}` },
  ]);

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