import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  modalContainer: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    color: '#6BA1B9',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'auto',
    zIndex: 1,
  },
  modal: {
    position: 'relative',
    width: '50%',
    fontFamily: 'josefin sans',
    backgroundColor: 'rgba(2, 37, 51, 0.99)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  closeIcon: {
    position: 'absolute',
    color: 'rgb(240, 240, 240)',
    top: '40px',
    right: '40px',
    padding: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    transition: '0.2s',
    '&:hover': {
      color: '#6BA1B9',
      cursor: 'pointer',
    },
  },
  modalTopRow: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px',
    '@media (max-width: 1200px)': {
      height: '40vh',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column-reverse',
      padding: '0',
    },
  },
  modalTopLeft: {
    width: '40%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '@media (max-width: 1200px)': {
      width: '100%',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'center',
      margin: '20px',
    },
  },
  modalTitle: {
    width: '100%',
    letterSpacing: '2px',
    fontWeight: 300,
    fontSize: '20px',
    '@media (max-width: 1200px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: 0,
    },
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    },
  },
  link: {
    width: '30%',
    border: '1px solid rgb(240, 240, 240)',
    padding: '15px',
    color: 'rgb(240, 240, 240)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.2s',
    '&:nth-child(1)': {
      marginRight: '20px',
    },
    '&:hover': {
      border: '1px solid rgb(2, 37, 51)',
      backgroundColor: 'rgb(240, 240, 240)',
      color: 'rgb(2, 37, 51)',
    },
    '@media (max-width: 600px)': {
      width: '30%',
    },
  },
  visuallyHidden: {
    display: 'none',
  },
  imageContainer: {
    width: '60%',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  modalImg: {
    width: '100%',
    height: '250px',
    '@media (max-width: 1200px)': {
      height: '150px',
    },
  },
  modalBottomRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 40px',
    '@media (max-width: 900px)': {
      padding: '20px 40px',
    },
    '@media (max-width: 600px)': {
      padding: '0',
    },
  },
  modalDesc: {
    fontSize: '18px',
    fontWeight: 300,
    color: 'rgb(240, 240, 240)',
    lineHeight: 2,
  },
}))

const Modal = (props) => {
  const classes = useStyles();
  const { card, closeModal } = props;

  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal}>
        <button className={classes.closeIcon} onClick={() => closeModal(false)}><CloseIcon /></button>
        <div className={classes.modalTopRow}>
          <div className={classes.modalTopLeft}>
            <h2 className={classes.modalTitle}>{card.name}</h2>
            <div className={classes.linkContainer}>
              <Link
                to={{ pathname: `${card.github}` }}
                target="_blank"
                rel='noopener noreferrer'
                className={classes.link}
              >
                <span className={classes.visuallyHidden}>github</span>
                <GitHubIcon className={classes.icon} />
              </Link>
              <Link
                to={{ pathname: `${card.app}` }}
                target="_blank"
                rel='noopener noreferrer'
                className={classes.link}
              >
                <span className={classes.visuallyHidden}>app</span>
                <LaptopMacIcon className={classes.icon} />
              </Link>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <div style={{
              backgroundImage: `url(${card.img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
              className={classes.modalImg}
            >
            </div>
          </div>
        </div>
        <div className={classes.modalBottomRow}>
          <p className={classes.modalDesc}>{card.desc}</p>
        </div>
      </div>
    </div >
  )
}

export default Modal;