import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addUserToParty } from "../../api/RestController";

class PartyReserve extends Component {
  state = { open: true };

  handleClose = () => {
    this.setState({ open: false });
  };

  reserveHandler = () => {
    var user = JSON.parse(localStorage.getItem("profileInfo"));
    user["lastName"] = "";
    var callback = {
      onSuccess: function(response) {
        console.log(response);
        this.handleClose();
      },
      onFailed: function(error) {
        console.log(error);
      }
    };
    addUserToParty(this.props.partyId, user, callback);
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Reserva la Fiesta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Resever la fiesta para empezar a disfrutar
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            type="primary"
            onClick={this.reserveHandler}
            style={{ backgroundColor: "#fe4234", borderColor: "#fe4234" }}
          >
            Reservar
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PartyReserve;
