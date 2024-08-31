import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import routeLink from 'public/text/link';
import logo from 'public/images/saas-logo.png';
import { useText } from 'theme/common';
import Link from '../Link';
import Checkbox from './Checkbox';
import linkRouter from "public/text/link";
import useStyles from './form-style';


function Contact() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation("common");

  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [openNotif, setNotif] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (check) {
      setNotif(true);
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    setNotif(false);
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
    setError(false); // Reset error state when checkbox is toggled
  };

const handleButtonClick = () => {
  if (check) {
    window.open("https://users.freeweb3.com", "_blank");
  } else {
    setError(true);
  }
};

  return (
    <div className={classes.pageWrap}>
      {!isTablet && (
        <div className={classes.background}>
        </div>
      )}
      <div className={classes.parallax}>
      </div>


      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          {/* <Link href={linkRouter.sass.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">{brand.sass.projectName}</Typography>
          </Link> */}
        </div>
      )}


      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton component={Link} href={routeLink.saas.home} className={classes.backtohome} size="large">
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>




        <div className={classes.decoration}>
          <svg
            className={classes.leftDeco}
          >
            <use xlinkHref="/images/saas/deco-bg-left.svg#main" />
          </svg>
          <svg
            className={classes.rightDeco}
          >
            <use xlinkHref="/images/saas/deco-bg-right.svg#main" />
          </svg>
        </div>
        <Paper className={cx(classes.formBox, "fragment-fadeUp")}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={classes.title}
              gutterBottom
            >
              {t("contact_title")}
            </Typography>
            <br />
            <Typography className={classes.desc}>
              {t("contact_subtitle3")}
            </Typography>
            <br />
            <Typography className={classes.desc}>
              {t("contact_subtitle4")}
            </Typography>
            <br />
            <Typography className={classes.desc}>
              {t("contact_subtitle5")}
            </Typography>

            <div className={classes.form}>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <Grid container spacing={4}>
                </Grid>
                <div className={classes.btnArea}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        validators={["isTruthy"]}
                        errorMessages="This field is required"
                        checked={check}
                        onChange={handleCheck}
                        color="primary"
                      />
                    }
                    label={
                      <span>
                        {t("form_terms")}
                        <br />
                        <a href="https://terms.freeweb3.com" target="_blank">
                          {t("form_privacy")}
                        </a>
                      </span>
                    }
                  />
                  {error && <div style={{ color: 'red' }}>Please accept terms to proceed</div>}
                  <Button
                    variant="contained"
                    type="button"
                    color="secondary"
                    size="large"
                    onClick={handleButtonClick}
                  >
                    {t("form_send")}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </Paper>

      </Container>
    </div>
  );
}

export default Contact;
