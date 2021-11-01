import React, { useEffect, useState } from 'react';
import useMediaQuery from "../customHooks/useMediaQuery";

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import profilePicture from '../assets/profile.png';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

const useStyles = makeStyles(() => ({
  sidebar: {
    maxHeight: '100vh',
    minWidth: '300px',
    color: '#6BA1B9',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Caveat',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
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
    fontSize: '30px',
  },
  languagesContainer: {
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '10px',
    '@media (max-width: 900px)': {

    },
  },
  languagesContainerMobile: {
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '20px',
    '@media (max-width: 900px)': {
      width: '20%',
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
    },
    '@media (max-width: 600px)': {
      width: '30%',
      marginRight: '0px',
    },
    '@media (max-width: 400px)': {
      marginRight: '15px',
    },
  },
  languages: {
    margin: '0 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      color: 'rgb(240, 240, 240)',
    },
  },
  navigation: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    listStyle: 'none',
    paddingLeft: '40px',
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
    cursor: 'pointer',
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
    fontSize: '25px',
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
  let isPageWide = useMediaQuery("(max-width:900px)");
  const [languageToggle, setLanguageToggle] = useState(false);
  const language = useSelector((state) => state.languageReducers);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageToggle = () => {
    setLanguageToggle(!languageToggle);
  }


  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);


  return (
    <div className={classes.sidebar}>
      <header className={classes.idContent}>
        <img className={classes.profileImg} src={profilePicture} alt='profile' />
        <h1 className={classes.profile}>{profile}</h1>
        <div className={classes.languagesContainer}>
          <div className={classes.languages} style={{ color: language === 'en' && 'rgba(240, 240, 240)' }}>
            <span className={classes.spanLanguages} onClick={() => dispatch(allActions.languageActions.setEnglish("en"))}>en</span>
          </div>
          <div className={classes.languages} style={{ color: language === 'fr' && 'rgba(240, 240, 240)' }}>
            <span className={classes.spanLanguages} onClick={() => dispatch(allActions.languageActions.setFrench("fr"))}>fr</span>
          </div>
        </div>
      </header >
      <nav>
        <ul className={classes.navigation}>
          <li className={classes.navItem}>
            <NavLink exact to='/' className={classes.link} activeClassName={classes.navActive}>
              <HomeIcon className={classes.icon} />
              <span className={classes.navigationLink}>{t('Home')}</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/knowledges' className={classes.link} activeClassName={classes.navActive}>
              <BarChartIcon className={classes.icon} />
              <span className={classes.navigationLink}>{t('Knowledges')}</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/portfolio' className={classes.link} activeClassName={classes.navActive}>
              <AspectRatioIcon className={classes.icon} />
              <span className={classes.navigationLink}>{t('Portfolio')}</span>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact to='/contact' className={classes.link} activeClassName={classes.navActive}>
              <PermContactCalendarIcon className={classes.icon} />
              <span className={classes.navigationLink}>{t('Contact')}</span>
            </NavLink>
          </li>
          {isPageWide &&
            <div className={classes.link} onClick={handleLanguageToggle}>
              <li className={classes.navItem}>
                <LanguageIcon className={classes.icon} />
              </li>
            </div>
          }
        </ul>
        {
          languageToggle && <div className={classes.languagesContainerMobile}>
            <div className={classes.languages} style={{ color: language === 'en' && 'rgba(240, 240, 240)' }}>
              <span className={classes.spanLanguages} onClick={() => { setLanguageToggle(false); dispatch(allActions.languageActions.setEnglish("en")) }}>en</span>
            </div>
            <div className={classes.languages} style={{ color: language === 'fr' && 'rgba(240, 240, 240)' }}>
              <span className={classes.spanLanguages} onClick={() => { setLanguageToggle(false); dispatch(allActions.languageActions.setFrench("fr")) }}>fr</span>
            </div>
          </div>
        }
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