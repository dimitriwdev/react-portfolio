import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
library.add(fas, fab);

const useStyles = makeStyles(() => ({
  toolsTitle: {
    letterSpacing: '2px',
    fontSize: '25px',
    marginBottom: '25px',
    padding: '20px 20px 0 20px',
  },
  toolList: {
    padding: '0 20px',
  },
  toolListItem: {
    padding: '10px',
    marginBottom: '20px',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      border: 'none',
    },
  },
  icon: {
    color: 'rgb(240, 240, 240)',
    fontSize: '30px',
  },
  toolSpan: {
    textAlign: 'left',
    fontSize: '23px',
    '@media (max-width: 600px)': {
      textAlign: 'left',
    },
  },
}))

const Tools = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (

    <Grid container className={classes.tools}>
      <Grid item xs={12}>
        <h2 className={classes.toolsTitle}>{t('Tools')}</h2>
      </Grid>
      <Grid container item xs={6} className={classes.toolListContainer}>
        <Grid container item xs={12} lg={8} className={classes.toolList}>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={['fab', 'github']} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>Github</span></Grid>
          </Grid>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={["fab", "node-js"]} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>NodeJs</span></Grid>
          </Grid>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={["fas", "rocket"]} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>Azure</span></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={6} className={classes.toolListContainer}>
        <Grid container item xs={12} lg={8} className={classes.toolList}>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={["fab", "figma"]} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>Figma</span></Grid>
          </Grid>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={["fab", "jira"]} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>Jira</span></Grid>
          </Grid>
          <Grid container item xs={12} className={classes.toolListItem}>
            <Grid item xs={6} sm={3}><FontAwesomeIcon className={classes.icon} icon={["fas", "laptop-code"]} /></Grid>
            <Grid item xs={6} sm={3}><span className={classes.toolSpan}>VSC</span></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Tools;