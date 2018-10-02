import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../img/logo.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ "background-color": "black" }}>
          <Toolbar>
            <a href="/">
              <img src={logo} alt="logo" width="150" />
            </a>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            />
            <Button color="inherit" href="/login">
              Entrar
            </Button>
            <Button color="inherit" href="/register">
              Registrarme
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(LandingHeader);
