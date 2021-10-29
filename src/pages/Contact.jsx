import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
}))

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      Contact
    </div>
  );
};

export default Contact;