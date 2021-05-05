import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { Dialog, DialogContent, Fab } from "@material-ui/core";
import ContactSection from "../home/contactSection";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  dialog: {
    width: "100%",
  },
}));

export default function DialogContact() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        aria-label="email"
        className={classes.fab}
        color="primary"
        onClick={handleClickOpen}
      >
        <EmailIcon />
      </Fab>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent className={classes.dialog}>
          <ContactSection closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
