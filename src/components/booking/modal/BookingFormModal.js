import React from "react";

import { compose } from "redux";

import Dialog from "@material-ui/core/Dialog";
import withMobileDialog from "@material-ui/core/withMobileDialog";

import BookingForm from "../BookingForm";

import { withStyles } from "@material-ui/core/styles";

const styles = ({ spacing }) => ({
  root: {
    minHeight: 500 * spacing.unit,
    minWidth: 300 * spacing.unit,
    maxHeight: "100%"
  }
});

const BookingFormModal = ({ classes, open, onCloseModal, bookingProps }) => {
  return (
    <Dialog
      classes={{ paper: classes.root }}
      open={open}
      onClose={onCloseModal}
      className={classes.container}
    >
      <BookingForm {...bookingProps} closeModal={onCloseModal} />
    </Dialog>
  );
};

export default compose(
  withMobileDialog(),
  withStyles(styles, { withTheme: true })
)(BookingFormModal);
