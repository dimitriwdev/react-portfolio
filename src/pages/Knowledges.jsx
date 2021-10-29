import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
}))

const Knowledges = () => {
  const classes = useStyles();

  return (
    <div className={classes.knowledges}>
      Knowledges
    </div>
  );
};

export default Knowledges;