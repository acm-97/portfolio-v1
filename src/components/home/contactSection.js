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
import { useFormik } from "formik";
import * as Yup from "yup";

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

export default function ContactSection({ closeDialog }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
  });

  const resetForm = () => {
    setState((state) => ({ ...state, name: "" }));
    setState((state) => ({ ...state, email: "" }));
    setState((state) => ({ ...state, message: "" }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState((state) => ({
      ...state,
      open: false,
    }));

    closeDialog();
  };

  const sendMessage = (values) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EmailJS_SERVICE,
        process.env.NEXT_PUBLIC_EmailJS_TEPMLATE,
        // e.target,
        {
          from_name: values.from_name,
          message: values.message,
          from_email: values.from_email,
        },
        process.env.NEXT_PUBLIC_EmailJS_USER
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

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      from_name: Yup.string().required("Field name is required, check it out"),
      from_email: Yup.string()
        .email("Invalid email, check it out")
        .required("Field email is required, check it out"),
      message: Yup.string().required("Please write a message to send"),
    }),
    onSubmit: (values) => {
      sendMessage(values);
      setState((state) => ({
        ...state,
        open: true,
      }));
      resetForm();
    },
  });

  return (
    <Container maxWidth="lg" id="contact">
      <div className={classes.container}>
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className={classes.form}
          style={{ width: "50%" }}
        >
          <FormControl
            variant="outlined"
            error={formik.errors.from_name ? true : false}
          >
            <InputLabel htmlFor="from_name">Name </InputLabel>
            <OutlinedInput
              type="text"
              id="from_name"
              name="from_name"
              label="Name"
              value={formik.values.from_name}
              onChange={formik.handleChange}
              aria-describedby="error-name"
            />
            {formik.errors.from_name && (
              <FormHelperText id="error-name">
                {formik.errors.from_name}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            variant="outlined"
            error={formik.errors.from_email ? true : false}
          >
            <InputLabel htmlFor="from_email">Email</InputLabel>
            <OutlinedInput
              type="email"
              id="from_email"
              name="from_email"
              label="Email"
              value={formik.values.from_email}
              onChange={formik.handleChange}
              aria-describedby="error-email"
            />
            {formik.errors.from_email && (
              <FormHelperText id="error-email">
                {formik.errors.from_email}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            variant="outlined"
            error={formik.errors.message ? true : false}
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
              value={formik.values.message}
              onChange={formik.handleChange}
              aria-describedby="error-message"
            />
            {formik.errors.message && (
              <FormHelperText id="error-message">
                {formik.errors.message}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Contact me
          </Button>
        </form>
        <Snackbar
          open={state.open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Email sended!, thanks a lot.
          </Alert>
        </Snackbar>
      </div>
      );
    </Container>
  );
}
