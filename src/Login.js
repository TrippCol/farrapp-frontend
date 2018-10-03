import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import apimock from './ApiMock'
import './Login.css';

export class Login extends React.Component {
    state = { showPassword: false, email: '', password: '' };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleLogin = () => {
        let self = this;
        apimock.enterLogin(this.state.email, this.state.password,
            function (response) {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("isLoggedIn", true);
            });
        apimock.getUserByEmail(this.state.email,
            function(response){
                localStorage.setItem("profileInfo", JSON.stringify(response.data));
            });
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Log in</Typography>
                        <form className="form">


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleEmailChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>



                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                <Input
                                    id="adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    onChange={this.handlePasswordChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>


                            <Button
                                type="button"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleLogin}
                                href="/"
                            >
                                Log in
                            </Button>
                        </form>
                        <a href="/signup"> Create new account</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}