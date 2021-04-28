import React from "react";
import emailjs from "emailjs-com";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    width: "100%",
  },
  form: {
    padding: "6vh 0 6vh 0",
    minHeight: "50vh",

    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    minHeight: "100vh",
    display: "initial",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const EmailForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    errorName: null,
    errorEmail: null,
    errorMessage: null,
    open: false,
  });

  const onNameChange = (e) => {
    e.preventDefault();
    setState((state) => ({ ...state, name: e.target.value }));
    setState((state) => ({ ...state, errorName: null }));
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setState((state) => ({ ...state, email: e.target.value }));
    setState((state) => ({ ...state, errorEmail: null }));
  };

  const onMessageChange = (e) => {
    e.preventDefault();
    setState((state) => ({ ...state, message: e.target.value }));
    setState((state) => ({ ...state, errorMessage: null }));
  };

  const sendMessage = (e) => {
    emailjs
      .sendForm(
        "service_qi5jnpu",
        "contact_form",
        e.target,
        "user_79rHn2iA15Q92JKHGpR5U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    setState((state) => ({ ...state, name: "" }));
    setState((state) => ({ ...state, email: "" }));
    setState((state) => ({ ...state, message: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  const variables = {
      from_name: state.name,
      from_email: state.email,
      message: state.message,
    }; */
    if (state.name === "") {
      setState((state) => ({ ...state, errorName: "Field name is required" }));
    } else {
      if (state.email === "") {
        setState((state) => ({
          ...state,
          errorEmail: "Field email is required",
        }));
      } else {
        if (state.message === "") {
          setState((state) => ({
            ...state,
            errorMessage: "Field message is required",
          }));
        } else {
          sendMessage(e);
          setState((state) => ({
            ...state,
            open: true,
          }));
          resetForm();
        }
        console.log(state.errorEmail);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState((state) => ({
      ...state,
      open: false,
    }));
  };

  return (
    <div className={classes.container}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.form}
        style={{ width: "50%" }}
      >
        <FormControl variant="outlined" error={state.errorName ? true : false}>
          <InputLabel htmlFor="name">Name </InputLabel>
          <OutlinedInput
            type="text"
            id="name"
            name="from_name"
            label="Name"
            value={state.name}
            onChange={onNameChange}
            aria-describedby="error-name"
          />
          {state.errorName && (
            <FormHelperText id="error-name">{state.errorName}</FormHelperText>
          )}
        </FormControl>

        <FormControl variant="outlined" error={state.errorEmail ? true : false}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            type="email"
            id="email"
            name="from_email"
            label="Email"
            value={state.email}
            onChange={onEmailChange}
            aria-describedby="error-email"
          />
          {state.errorEmail && (
            <FormHelperText id="error-email">{state.errorEmail}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          variant="outlined"
          error={state.errorMessage ? true : false}
        >
          <InputLabel htmlFor="message">Message</InputLabel>
          <OutlinedInput
            type="text"
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline={true}
            rows="6"
            rowsMax={"16"}
            value={state.message}
            onChange={onMessageChange}
            aria-describedby="error-message"
          />
          {state.errorMessage && (
            <FormHelperText id="error-message">
              {state.errorMessage}
            </FormHelperText>
          )}
        </FormControl>
        <Button type="submit" size="large" variant="contained" color="primary">
          Contact me
        </Button>
      </form>
      <Snackbar open={state.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Email sended!, thanks a lot.
        </Alert>
      </Snackbar>
    </div>
  );
};
export default function ContactSection() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" id="contact">
      <div className={classes.sectionDesktop}>
        <EmailForm />
        <div style={{ width: "100%" }}>
          <img src="/email1.png" alt="" height="100%" width="100%" />
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div style={{ width: "25%" }} />
        <EmailForm />
        <div style={{ width: "25%" }} />
      </div>
    </Container>
  );
}
