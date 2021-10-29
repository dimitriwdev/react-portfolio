import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
}))

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageNotFound}>
      page not found
    </div>
  );
};

export default PageNotFound;