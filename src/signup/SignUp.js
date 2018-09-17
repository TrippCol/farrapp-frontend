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
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';

import './SignUp.css';

export class SignUp extends React.Component {
    state = { showPasswordOne: false, passwordOne: '', showPasswordTwo: false, passwordTwo: '' };

    handleClickShowPasswordOne = () => {
        this.setState(state => ({ showPasswordOne: !state.showPasswordOne }));
    };

    handleClickShowPasswordTwo = () => {
        this.setState(state => ({ showPasswordTwo: !state.showPasswordTwo }));
    };

    handleLogin = () => {
        if(this.state.passwordOne !== this.state.passwordTwo){
            alert("Both of the passwords should be equal");
        }
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
                                    onChange={this.props.handleNameChange}
                                    
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="lastName"
                                    onChange={this.props.handleLastNameChange}
                                    
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    onChange={this.props.handleUsernameChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircleOutlined />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.props.handleEmailChange}
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
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleLogin}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}