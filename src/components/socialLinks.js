import { Avatar, Container, IconButton, useTheme } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";

export default function SocialLinks() {
  const theme = useTheme();
  return (
    <Container>
      <IconButton
        onClick={() =>
          window.open("https://www.facebook.com/alejandro9703/", "_blank")
        }
      >
        <Avatar>
          <Facebook
            // style={{ color: theme.palette.primary.light, fontSize: "4.5vh" }}
            color="primary"
          />
        </Avatar>
      </IconButton>

      <IconButton
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/alejandro-cabrera-mena-2210381b8/",
            "_blank"
          )
        }
      >
        <Avatar>
          <LinkedIn
            // style={{ color: theme.palette.primary.light, fontSize: "4.5vh" }}
            color="primary"
          />
        </Avatar>
      </IconButton>

      <IconButton
        onClick={() =>
          window.open("https://github.com/acm-97?tab=projects", "_blank")
        }
      >
        <Avatar>
          <GitHub
            color="primary"
            // style={{ color: theme.palette.primary.light, fontSize: "4.5vh" }}
          />
        </Avatar>
      </IconButton>
    </Container>
  );
}
