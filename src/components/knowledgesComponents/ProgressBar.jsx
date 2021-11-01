import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  progress: {
    padding: '20px',
  },
  progressTitle: {
    letterSpacing: '2px',
    whiteSpace: 'nowrap',
    marginTop: 0,
    marginBottom: '25px',
    fontSize: '25px',
  },
  years: {
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgb(240, 240, 240)',
    position: 'relative',
  },
  yearsExp: {
    minWidth: '36%',
  },
  yearsColumn: {
    textAlign: 'center',
    '&::before': {
      content: '""',
      background: 'rgba(107, 161, 185, 0.5)',
      position: 'absolute',
      height: '203px',
      width: '1px',
      transform: 'translate(9px, 19px)',
    },
  },
  yearsOne: {
    minWidth: '20%',
  },
  yearsTwo: {
    minWidth: '44%',
    textAlign: 'right',
  },
  skillList: {
    padding: 0,
  },
  skillItem: {
    listStyle: 'none',
    paddingTop: '10px',
    fontSize: '20px',
  },
  progressBarStyle: {
    height: '4px',
    borderRadius: '2px',
    marginTop: '10px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50px',
      height: '4px',
      background: 'rgb(240, 240, 240)',
      width: 0,
      animation: '$line 1.5s ease-out forwards',
    }
  },
  '@keyframes line': {
    to: {
      width: '100%',
    },
  },
}))

const ProgressBar = (props) => {
  const { title, skillLists } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid item xs={12} lg={8} className={classes.progress}>
      <h2 className={classes.progressTitle}>{title}</h2>
      <div className={classes.years}>
        <span className={classes.yearsExp}>{t('ExperienceYears')}</span>
        <span className={`${classes.yearsColumn} ${classes.yearsOne}`}>1 {t('yr')}</span>
        <span className={`${classes.yearsColumn} ${classes.yearsTwo}`}>2 {t('yrs')}</span>
      </div>
      <ul className={classes.skillList}>
        {skillLists.map((skillList) => {
          const xpYears = 2;
          const progressBar = (skillList.xp / xpYears) * 100 + "%";

          return (
            <div key={skillList.value}>
              <li className={classes.skillItem}><span className={classes.skillValue}>{skillList.value}</span>
                <div
                  className={classes.progressBarStyle}
                  style={{ width: progressBar }}
                ></div>
              </li>
            </div>
          );
        })}
      </ul>
    </Grid >
  );
};

export default ProgressBar;