import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loaderContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dotSpin: {
    marginTop: "50px",
    position: "relative",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "transparent",
    boxShadow:
      "0 -18px 0 0 #fff, 12.72984px -12.72984px 0 0 #fff, 18px 0 0 0 #fff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0)",
    animation: "$dotSpin 1.5s infinite linear",
  },

  "@keyframes dotSpin": {
    "0%": {
      boxShadow:
        "0 -18px 0 0 #fff, 12.72984px -12.72984px 0 0 #fff, 18px 0 0 0 #fff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
    "12.5%": {
      boxShadow:
        "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 0 #fff, 18px 0 0 0 #fff, 12.72984px 12.72984px 0 0 #fff, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
    "25%": {
      boxShadow:
        "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #fff, 12.72984px 12.72984px 0 0 #fff, 0 18px 0 0 #fff, -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
    "37.5%": {
      boxShadow:
        "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #fff, 0 18px 0 0 #fff, -12.72984px 12.72984px 0 0 #fff, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
    "50%": {
      boxShadow:
        "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #fff, -12.72984px 12.72984px 0 0 #fff, -18px 0 0 0 #fff, -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
    "62.5%": {
      boxShadow:
        "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #fff, -18px 0 0 0 #fff, -12.72984px -12.72984px 0 0 #fff",
    },
    "75%": {
      boxShadow:
        "0 -18px 0 0 #fff, 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #fff, -12.72984px -12.72984px 0 0 #fff",
    },
    "87.5%": {
      boxShadow:
        "0 -18px 0 0 #fff, 12.72984px -12.72984px 0 0 #fff, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #fff",
    },
    "100%": {
      boxShadow:
        "0 -18px 0 0 #fff, 12.72984px -12.72984px 0 0 #fff, 18px 0 0 0 #fff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.dotSpin}></div>
    </div>
  );
};

export default Loader;
