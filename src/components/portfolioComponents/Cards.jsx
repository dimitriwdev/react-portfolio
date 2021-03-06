import React, { useState } from 'react';
import Modal from './Modal';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LinesEllipsis from "react-lines-ellipsis";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: '20px',
    color: '#6BA1B9',
    letterSpacing: '1px',
  },
  cardContent: {
    cursor: 'pointer',
    padding: '20px',
    transition: '0.2s',
    borderRadius: '10px 10px 10px 0px',
    '&:hover': {
      '& $cardImgOverlay': {
        backgroundColor: 'transparent',
      },
      '& $cardTitle': {
        color: 'rgb(240, 240, 240)',
      },
    },
  },
  cardTitle: {
    fontSize: '25px',
    letterSpacing: '2px',
  },

  cardImg: {
    width: '100%',
    height: '150px',
    borderRadius: '5px',
    margin: '10px 0',
    '@media (max-width: 600px)': {
      height: '170px',
    },
  },
  cardImgOverlay: {
    backgroundColor: 'rgba(2, 37, 51, 0.35)',
    transition: '0.3s ease',
  },
  moreBtn: {
    display: 'block',
    fontStyle: 'italic',
    fontSize: '16px',
    padding: '5px',
  },
  ellipsisText: {
    padding: '0 5px',
    fontSize: '20px',
    color: 'rgb(240, 240, 240)',
  },
}))

const Cards = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { card } = props;
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Grid container item xs={12} sm={6} lg={4} className={classes.card}>
      <Box
        display="flex"
        justifyContent="center"
        onClick={() => setToggleModal(true)}
      >
        <Grid container item xs={12} sm={10} lg={10} className={classes.cardContent}>
          <Grid item xs={12}><h2 className={classes.cardTitle}>{card.name}</h2></Grid>
          <Grid item xs={12}>
            <div
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className={classes.cardImg}
            >
              <div className={`${classes.cardImg} ${classes.cardImgOverlay}`}>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} >
            <LinesEllipsis
              className={classes.ellipsisText}
              text={card.desc}
              basedOn="letters"
              maxLine={2}
            />
            <span className={classes.moreBtn}>{t('SeeMore')}</span>
          </Grid>

        </Grid>
      </Box>
      {toggleModal &&
        <Modal
          card={card}
          closeModal={setToggleModal}
        />
      }
    </Grid>
  )
}

export default Cards;