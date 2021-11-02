import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles(() => ({
  social: {
    width: '100%',
    '@media (max-width: 900px)': {
      display: 'flex',
      margin: '80px 0 30px 0',
      justifyContent: 'space-between',
    },
  },
  visuallyHidden: {
    display: 'none',
  },
  socialIcon: {
    color: '#6BA1B9',
    transform: 'scale(1.5)',
    transition: '0.2s ease',
    '&:hover': {
      color: 'rgb(240, 240, 240)',
    },
  },
}))

const SocialContact = () => {
  const classes = useStyles();

  return (
    <div className={classes.social}>
      <a
        href='./media/CV_Dimitri-Devoille.pdf'
        target='_blank'
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <span className={classes.visuallyHidden}>cv</span>
        <AccountBoxIcon className={classes.socialIcon} />
      </a>
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
        <GitHubIcon className={classes.socialIcon} style={{ fontSize: '22px', }} />
      </a>
      <a
        href='https://github.com/dimitriwdev/react-portfolio'
        target='_blank'
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <span className={classes.visuallyHidden}>code</span>
        <CodeIcon className={classes.socialIcon} />
      </a>
    </div>
  )
}

export default SocialContact;