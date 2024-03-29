import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Axios from "axios";
import fileDownload from "js-file-download";

function download() {
  Axios.get("/Alejandro Cabrera Mena - CV.pdf", {
    responseType: "blob",
  }).then((res) => {
    fileDownload(res.data, "Alejandro Cabrera Mena - CV.pdf");
  });
}

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  textAlign: "justify",
  lineHeight: "60px",
  padding: "4vh",
}));

const useStyles = makeStyles((theme) => ({
  resalted: {
    color: theme.palette.warning.main,
  },
}));

export default function Description() {
  const classes = useStyles();
  return (
    <>
      <Item elevation={6}>
        <Container maxWidth="lg">
          <Typography variant="h6" component="h2">
            My name is{" "}
            <span className={classes.resalted}>Alejandro Cabrera Mena</span>, I
            am an enthusiast of we programming, willing to learn new
            technologies and skills. In the last years I have done some personal
            projects and some as freelancer. My main works are done with the{" "}
            <span className={classes.resalted}> MERN stack</span> as well as
            with the <span className={classes.resalted}>MEAN stack</span> . I am
            always looking for projects where I can test my knowledge and skills
            and of course where I can improve myself as a professional.
          </Typography>
          <Typography variant="h6" component="h2">
            If you are interested in having more information about me, you can
            check my resume.
          </Typography>
          <Button variant="contained" color="primary" onClick={download}>
            <Icon> sim_card_download </Icon> Curriculum Vitae
          </Button>
        </Container>
      </Item>
    </>
  );
}
