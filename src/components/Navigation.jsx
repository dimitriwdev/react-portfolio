import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import pic from '../assets/pic.png';

const useStyles = makeStyles(() => ({
  sidebar: {
    maxHeight: '100vh',
    minWidth: '300px',
    color: '#6BA1B9',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 1130px)': {
      margin: 0,
    },
    '@media (max-width: 900px)': {
      width: '100vw',
      minHeight: '50px',
      margin: '0 0 20px 0',
      padding: 0,
    },
  },
  idContent: {
    marginTop: '20px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  profileImg: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid rgb(240, 240, 240)',
  },
  profile: {
    marginTop: '10px',
    fontSize: '25px',
    textTransform: 'uppercase',
  },
  navigation: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    listStyle: 'none',
    paddingLeft: '20px',
    '@media (max-width: 900px)': {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '20px 0',
    },
  },
  icon: {
    position: 'relative',
    top: '6px',
    marginRight: '40px',
    transition: '0.2s ease',
    '@media (max-width: 900px)': {
      marginRight: '15px',
    },
    '@media (max-width: 600px)': {
      top: '3px',
    },
  },
  navItem: {
    padding: '15px 0',
    '@media (max-width: 600px)': {
      padding: '0px',
      width: '20px',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#6BA1B9',
    '&:hover': {
      '& $icon': {
        color: 'rgb(240, 240, 240)',
      },
    },
  },
  navigationLink: {
    fontSize: '20px',
    display: 'inline-block',
    transition: '0.2s',
    '&:hover': {
      color: 'rgb(240, 240, 240)',
    },
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  navActive: {
    color: 'rgb(240, 240, 240)',
  },
  socialContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  social: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '70px',
  },
  socialIcon: {
    color: '#6BA1B9',
    fontSize: '50px',
    padding: '7px',
    border: '1px solid #6BA1B9',
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
  visuallyHidden: {
    display: 'none',
  },
  signature: {
    margin: '20px',
    fontSize: '14px',
    textAlign: 'center',
    color: 'rgb(240, 240, 240)',
    letterSpacing: '1px',
  },
}))

const Navigation = () => {
  const classes = useStyles();

  const year = new Date().getFullYear();
  const profile = 'Dimitri Devoille';

  return (
    <div className={classes.sidebar}>
      <header className={classes.idContent}>
        <img className={classes.profileImg} src={pic} alt='profile' />
        <h1 className={classes.profile}>{profile}</h1>
      </header>
      <nav>
        <ul className={classes.navigation}>
          <li className={classes.navItem}>
            <NavLink exact to='/' className={classes.link} activeClassName={classes.navActive}>
              <HomeIcon className={classes.icon} />
              <span className={classes.navigationLink}>Home</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/knowledges' className={classes.link} activeClassName={classes.navActive}>
              <BarChartIcon className={classes.icon} />
              <span className={classes.navigationLink}>Knowledges</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/portfolio' className={classes.link} activeClassName={classes.navActive}>
              <AspectRatioIcon className={classes.icon} />
              <span className={classes.navigationLink}>Portfolio</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/contact' className={classes.link} activeClassName={classes.navActive}>
              <PermContactCalendarIcon className={classes.icon} />
              <span className={classes.navigationLink}>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.socialContent}>
        <div className={classes.social}>
          <a
            href='http://www.linkedin.com/in/dimitridevoille'
            target='_blank'
            rel='noopener noreferrer'
            aria-hidden="true"
          >
            <span className={classes.visuallyHidden}>linkedin</span>
            <LinkedInIcon className={classes.socialIcon} />
          </a>
          <a
            href='https://github.com/dimitriwdev'
            target='_blank'
            rel='noopener noreferrer'
            aria-hidden="true"
          >
            <span className={classes.visuallyHidden}>github</span>
            <GitHubIcon className={classes.socialIcon} />
          </a>
        </div>
        <span className={classes.signature}><i>{profile} - {year}</i></span>
      </div>
    </div >
  )
}

export default Navigation;