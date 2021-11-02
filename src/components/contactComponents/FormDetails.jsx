import React, { useState } from 'react';
import SocialContact from './SocialContact';
import useMediaQuery from "../../customHooks/useMediaQuery";

import CopyToClipboard from 'react-copy-to-clipboard';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles(() => ({
  formDetailsColumn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 37, 51, 0.5)',
    padding: '20px',
    marginLeft: '60px',
    '@media (max-width: 1200px)': {
      marginLeft: '40px',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      marginLeft: '0px',
      backgroundColor: 'transparent',
      padding: '0px 20px 50px 20px',
    },
  },
  formDetails: {
    position: 'relative',
  },
  details: {
    width: '100%',
    display: 'flex',
    margin: '40px 0',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  detailsContent: {
    letterSpacing: '1px',
    fontSize: '25px',
    '@media (max-width: 1200px)': {
      fontSize: '20px',
    },
  },
  detailsCopyEmail: {
    transition: '0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(240, 240, 240)',
      '& $tooltip': {
        display: 'block',
      },
    },
  },
  detailsIcon: {
    marginRight: '20px',
    color: 'rgb(240, 240, 240)',
    transform: 'scale(1.8)',
    '@media (max-width: 1200px)': {
      marginRight: 0,
      marginBottom: '20px',
    },
  },
  tooltip: {
    padding: '5px 10px',
    backgroundColor: 'rgb(0, 0, 0)',
    position: 'absolute',
    top: '40%',
    left: '50%',
    display: 'none',
    fontFamily: 'Josefin sans',
    fontSize: '10px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      top: '10%',
      left: '60%',
      padding: '5px',
    },
  },
}))

const FormDetails = () => {
  const classes = useStyles();
  const initialValue = 'Copy to Clipbaord';
  let isModileSize = useMediaQuery("(max-width:900px)");
  const [tooltip, setTooltip] = useState(initialValue)

  const handleTooltip = (e) => {
    setTooltip('Copied!')

    setTimeout(() => {
      setTooltip(initialValue)
    }, 5000)
  }

  return (
    <div className={classes.formDetailsColumn}>
      <div className={classes.formDetails}>
        <div className={classes.details}>
          <AlternateEmailIcon className={classes.detailsIcon} />
          <CopyToClipboard text='dimitridevoille@gmail.com'>
            <p className={`${classes.detailsContent} ${classes.detailsCopyEmail}`} onClick={(e) => { handleTooltip(e); new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }}>
              dimitridevoille@gmail.com<span className={classes.tooltip}>{tooltip}</span>
            </p>
          </CopyToClipboard>
        </div>
        <div className={classes.details}>
          <RoomOutlinedIcon className={classes.detailsIcon} />
          <p className={classes.detailsContent}>
            Dublin
          </p>
        </div>
        {isModileSize && <SocialContact />}
      </div>
    </div >
  )
}

export default FormDetails;