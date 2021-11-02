import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckIcon from '@material-ui/icons/Check';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  formDetailsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  formContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  formTitle: {
    letterSpacing: '2px',
    width: '100%',
    fontSize: '25px',
    marginBottom: '25px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    fontSize: '16px',
    marginBottom: '10px',
    letterSpacing: '1px',
    paddingLeft: '5px',
    color: 'rgb(240, 240, 240)',
  },
  inputField: {
    fontSize: '18px',
    fontFamily: 'Josefin Sans',
    padding: '15px',
    marginBottom: '25px',
    backgroundColor: 'rgba(2, 37, 51, 0.5)',
    color: 'rgb(240, 240, 240)',
    border: 'none',
    outline: 'none',
    borderRight: '1px solid #6BA1B9',
    borderTop: '1px solid #6BA1B9',
    '&:focus': {
      borderLeft: '1px solid rgb(240, 240, 240)',
      borderBottom: '1px solid rgb(240, 240, 240)',
      borderRight: 'none',
      borderTop: 'none',
    },
  },
  textarea: {
    fontSize: '18px',
    fontFamily: 'Josefin Sans',
    padding: '15px',
    backgroundColor: 'rgba(2, 37, 51, 0.5)',
    color: 'rgb(240, 240, 240)',
    border: 'none',
    resize: 'none',
    outline: 'none',
    borderRight: '1px solid #6BA1B9',
    borderTop: '1px solid #6BA1B9',
    '&:focus': {
      borderLeft: '1px solid rgb(240, 240, 240)',
      borderBottom: '1px solid rgb(240, 240, 240)',
      borderRight: 'none',
      borderTop: 'none',
    },
  },
  recaptchaContainer: {
    padding: '50px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      padding: '25px 0',
    },
  },
  recaptchaInner: {
    width: '50%',
    height: '57px',
    '@media (max-width: 1200px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  recaptcha: {
    transform: 'scale(0.75)',
    transformOrigin: '0 0',
    '@media (max-width: 1200px)': {
      transformOrigin: '50% 0',
    },
  },
  submitBtn: {
    cursor: 'not-allowed',
    width: '20%',
    backgroundColor: 'transparent',
    transition: '0.2s ease',
    '@media (max-width: 1200px)': {
      width: '100%',
      marginTop: '25px',
      height: '57px',
    },
  },
  submitBtnEnabled: {
    cursor: 'pointer',
    color: 'rgb(240, 240, 240)',
    border: '1px solid rgb(240, 240, 240)',
    '&:hover': {
      border: '1px solid rgb(2, 37, 51)',
      backgroundColor: 'rgb(240, 240, 240)',
      color: 'rgb(2, 37, 51)',
    },
  },
  submitBtnDisabled: {
    color: 'orange',
    border: '1px solid orange',
  },
  submitBtnSent: {
    color: 'green',
    border: '1px solid green',
  },
  visuallyHidden: {
    display: 'none',
  },
  errorMessage: {
    color: '#f00',
  },
}))

const Form = () => {
  const classes = useStyles();
  const form = useRef();
  const { t } = useTranslation();

  const [result, setResult] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const userKey = process.env.REACT_APP_EMAILJS_USER_KEY;
  const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY;
  const serviceKey = process.env.REACT_APP_EMAILJS_SERVICEID_KEY;
  const key = process.env.REACT_APP_RECAPTCHA_KEY;

  const handleChangeCaptcha = (value) => {
    if (value !== null) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
      setResult(false);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceKey, templateKey, form.current, userKey)
      .then((result) => {
        console.log(result.text);
        setError('');
      }, (error) => {
        console.log(error.text);
        setError(`${t('ErrorEmailJs')}`);
      });
    form.current.reset();
    setIsVerified(false);
    setResult(true);
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Contact</h2>
      <form className={classes.form} ref={form} onSubmit={sendEmail}>
        <label htmlFor='name' className={classes.label}>{t('Name')}</label>
        <input
          type='text'
          name='name'
          id='name'
          className={classes.inputField}
          required
        />
        <label htmlFor='email' className={classes.label}>{t('Email')}</label>
        <input
          type='email'
          name='email'
          id='email'
          className={classes.inputField}
          required
        />
        <label htmlFor='message' className={classes.label}>{t('Message')}</label>
        <textarea
          name='message'
          rows="5"
          id='message'
          className={classes.textarea}
        >
        </textarea>
        <div className={classes.recaptchaContainer}>
          <label style={{ display: 'none' }} htmlFor="g-recaptcha-response">ReCaptcha</label>
          <div className={classes.recaptchaInner}>
            <ReCAPTCHA
              sitekey={key}
              onChange={handleChangeCaptcha}
              theme='dark'
              className={classes.recaptcha}
              aria-hidden='true'
            />
          </div>
          <button
            type='submit'
            disabled={!isVerified}
            className={
              result
                ? `${classes.submitBtn} ${classes.submitBtnSent}`
                : isVerified
                  ? `${classes.submitBtn} ${classes.submitBtnEnabled}`
                  : `${classes.submitBtn} ${classes.submitBtnDisabled}`
            }
            aria-hidden='true'
          >
            <span className={classes.visuallyHidden}>Submit</span>
            {result ? <CheckIcon /> : <MailOutlineIcon />}
          </button>
        </div>
        {error && <p className={classes.errorMessage}>{error}</p>}
      </form >
    </div>
  )
}

export default Form;