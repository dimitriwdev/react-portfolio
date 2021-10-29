import React, { useState } from 'react';
import Modal from './Modal';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LinesEllipsis from "react-lines-ellipsis";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: '20px',
    color: '#6BA1B9',
    letterSpacing: '2px',
  },
  cardContent: {
    cursor: 'pointer',
    padding: '20px',
    transition: '0.2s',
    borderRadius: '10px 10px 10px 0px',
    '&:hover': {
      backgroundColor: 'rgba(2, 37, 51, 0.75)',
    },
    '@media (max-width: 600px)': {
      '&:hover': {
        backgroundColor: 'rgba(17, 32, 38, 0)',
      },
    },
  },
  cardTitle: {
    fontSize: '18px',
    letterSpacing: '2px',
  },
  cardImg: {
    width: '100%',
    height: '150px',
    borderRadius: '5px',
    backgroundColor: 'rgba(240, 240, 240, 0.1)',
    margin: '25px 0',
    '@media (max-width: 600px)': {
      height: '170px',
    },
  },
  moreBtn: {
    fontStyle: 'italic',
    fontSize: '12px',
    padding: '5px',
  },
  ellipsisText: {
    padding: '5px',
    fontSize: '16px',
    color: 'rgb(240, 240, 240)',
  },
}))

const Cards = (props) => {
  const classes = useStyles();
  const { card } = props;
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <Grid container item xs={12} sm={6} lg={4} className={classes.card} onClick={handleModalToggle}>
      <Box
        display="flex"
        justifyContent="center"
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
            />
          </Grid>
          <Grid item xs={12} >
            <LinesEllipsis
              className={classes.ellipsisText}
              text={card.desc}
              basedOn="letters"
              maxLine={2}
            />
            <span className={classes.moreBtn}>See more</span>
            {toggleModal &&
              <Modal
                card={card}
                open
                onClick={handleModalToggle}
              />
            }
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default Cards;