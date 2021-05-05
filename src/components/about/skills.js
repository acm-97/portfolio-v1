import React from "react";
import { v4 as uuid } from "uuid";
import { Grid, Paper, Typography } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disablegutters="true" elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.8rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
}));

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "60",
  lineHeight: "60px",
}));

const frontEnd = {
  type: "Front End",
  items: [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Redux",
    "Angular",
    "Next.js",
    "Bootstrap",
    "Angular Material",
    "Material UI",
    "Syled Components",
  ],
};

const backEnd = { type: "Back End", items: ["Node.js", "Python"] };

const dataBase = {
  type: "Database",
  items: ["MongoDB", "PostgreSQL"],
};

const others = {
  type: "Others",
  items: ["GitHub", "Git", "GitLab"],
};

const skills = [frontEnd, backEnd, dataBase, others];

const useStyles = makeStyles((theme) => ({
  resalted: {
    color: theme.palette.warning.main,
  },
}));

export default function Skills() {
  const [expanded, setExpanded] = React.useState("Languajes");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Item elevation={6}>
        <Typography variant="h3" component="h2">
          <span className={classes.resalted}>Skills</span>
        </Typography>
        {skills.map((skillType) => (
          <div key={skillType.type}>
            <Accordion
              key={skillType.type}
              expanded={expanded === skillType.type}
              onChange={handleChange(skillType.type)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h6" component="h2">
                  <span className={classes.resalted}>{skillType.type}</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {skillType.items.map((skill) => (
                    <Grid item xs={6} key={uuid()}>
                      <Item elevation={6}>{skill}</Item>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Item>
    </>
  );
}
