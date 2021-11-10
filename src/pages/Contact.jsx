import React from "react";
import Navigation from "../components/Navigation";
import bg from "../assets/bg.webp";
import Form from "../components/contactComponents/Form";
import FormDetails from "../components/contactComponents/FormDetails";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  contact: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bg})`,
    // Photo by Karsten Würth on unsplash
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "#6BA1B9",
    fontFamily: "Caveat",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  content: {
    width: "100%",
    marginLeft: "300px",
    padding: "40px 40px 40px 80px",
    display: "flex",
    "@media (max-width: 1200px)": {
      padding: "20px",
    },
  },
  formDetailsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Navigation />
      <div className={classes.content}>
        <div className={classes.formDetailsContainer}>
          <Form />
          <FormDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
