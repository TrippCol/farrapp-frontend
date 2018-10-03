import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import apimock from '../ApiMock'

import './SignUp.css';

export class SignUp extends React.Component {
    state = { showPasswordOne: false, passwordOne: '', showPasswordTwo: false, passwordTwo: '', name: '', lastName: '', email:'', id:''};

    handleClickShowPasswordOne = () => {
        this.setState(state => ({ showPasswordOne: !state.showPasswordOne }));
    };

    handleClickShowPasswordTwo = () => {
        this.setState(state => ({ showPasswordTwo: !state.showPasswordTwo }));
    };

    handleSubmit = () => {
        if (this.state.passwordOne === this.state.passwordTwo) {
            apimock.addNewUser(this.state.name, this.state.lastName, this.state.email, this.state.passwordOne)
        }
    };

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordOneChange = event => {
        this.setState({
            passwordOne: event.target.value
        });
    };

    handlePasswordTwoChange = event => {
        this.setState({
            passwordTwo: event.target.value
        });
    };

    handleIdChange = event => {
        this.setState({
            id: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">

                        <Typography variant="headline">Create Account</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={this.handleNameChange}

                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="lastName"
                                    onChange={this.handleLastNameChange}

                                />
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="id">Cedula</InputLabel>
                                <Input
                                    id="id"
                                    name="id"
                                    autoComplete="id"
                                    onChange={this.handleIdChange}

                                />
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleEmailChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>



                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password1">Password</InputLabel>
                                <Input
                                    id="password1"
                                    type={this.state.showPasswordOne ? 'text' : 'password'}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    }

                                    onChange={this.handlePasswordOneChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPasswordOne}
                                                onMouseDown={this.handleMouseDownPasswordOne}
                                            >
                                                {this.state.showPasswordOne ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                                <Input
                                    id="password2"
                                    type={this.state.showPasswordTwo ? 'text' : 'password'}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    }
                                    onChange={this.handlePasswordTwoChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPasswordTwo}
                                                onMouseDown={this.handleMouseDownPasswordTwo}
                                            >
                                                {this.state.showPasswordTwo ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>



                            <Button
                                type="submit"
                                href="/"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleSubmit}
                            >
                                Sign Up
                            </Button>
                        </form>
                        <a href="/login"> Already have an account?</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}