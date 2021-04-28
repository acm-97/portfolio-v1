import React from "react";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disablegutters="true" elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
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
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const languajes = {
  type: "Languajes",
  items: ["HTML5", "CSS3", "Javascript", "Python"],
};

const frameworks = { type: "Frameworks", items: ["Angular", "Next.js"] };

const frameworksCSS = {
  type: "Frameworks CSS",
  items: ["Bootstrap", "Angular Material", "Material UI", "React Semantic UI"],
};

const others = {
  type: "Others",
  items: ["React.js", "GitHub", "Git", "GitLab"],
};

const skills = [languajes, frameworks, frameworksCSS, others];

export default function Skills() {
  const [expanded, setExpanded] = React.useState("Languajes");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item elevation={1}>
          <Typography variant="h3" component="h2">
            Skills
          </Typography>
          {skills.map((skillType) => (
            <div key={skillType.type}>
              <Accordion
                expanded={expanded === skillType.type}
                onChange={handleChange(skillType.type)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h6" component="h2">
                    {skillType.type}
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
      </Grid>
    </Grid>
  );
}
