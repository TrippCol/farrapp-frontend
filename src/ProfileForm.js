import React, { Component } from "react";
import './ProfileForm.css'
import { Paper, TextField } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import apimock from './ApiMock'
export class ProfileForm extends Component {

    constructor(){
        super();
        this.state.name = localStorage.getItem('profileInfo').name;
        console.log(localStorage.getItem('profileInfo'));
    }
    state = {
        name: localStorage.getItem('profileInfo').name, lastName: localStorage.getItem('profileInfo').lastName, id: '',
        email: '',
        showOldPassword: false, oldPassword: '',
        showNewPasswordOne: false, newPasswordOne: '',
        showNewPasswordTwo: false, newPasswordTwo: ''
    };

    handleClickShowOldPassword = () => {
        this.setState(state => ({ showOldPassword: !state.showOldPassword }));
    };

    handleClickShowNewPasswordOne = () => {
        this.setState(state => ({ showNewPasswordOne: !state.showNewPasswordOne }));
    };

    handleClickShowNewPasswordTwo = () => {
        this.setState(state => ({ showNewPasswordTwo: !state.showNewPasswordTwo }));
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

    handleIdChange = event => {
        this.setState({
            id: event.target.value
        });
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handleOldPasswordChange = event => {
        this.setState({
            oldPassword: event.target.value
        });
    };

    handleNewPasswordOneChange = event => {
        this.setState({
            newPasswordOne: event.target.value
        });
    };

    handleNewPasswordTwoChange = event => {
        this.setState({
            newPasswordTwo: event.target.value
        });
    };

    render() {
        return (
            <Paper className="paper">
                <Typography variant="headline">Update info</Typography>
                <form className="form">
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                            id="name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={this.handleNameChange}
                            defaultValue={this.state.name}
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
                        <InputLabel htmlFor="id">Id</InputLabel>
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
                            autoFocus
                            onChange={this.handleEmailChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Button
                        type=""
                        fullWidth
                        variant="raised"
                        color="primary"
                        className="submit"
                        onClick={this.handleUpdate}
                    >
                        Update
                        </Button>
                </form>
                <br/>
                <br/>
                <Typography variant="headline">Update password</Typography>
                <form className="form">
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="oldPassword">Old password</InputLabel>
                        <Input
                            id="oldPassword"
                            type={this.state.showOldPassword ? 'text' : 'password'}
                            onChange={this.handleOldPasswordChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowOldPassword}
                                    >
                                        {this.state.showOldPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="newPasswordOne">New password</InputLabel>
                        <Input
                            id="newPasswordOne"
                            type={this.state.showNewPasswordOne ? 'text' : 'password'}
                            onChange={this.handleNewPasswordOneChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowNewPasswordOne}
                                    >
                                        {this.state.showNewPasswordOne ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="newPasswordTwo">Confirm new password</InputLabel>
                        <Input
                            id="newPasswordTwo"
                            type={this.state.showNewPasswordTwo ? 'text' : 'password'}
                            onChange={this.handleNewPasswordTwoChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowNewPasswordTwo}
                                    >
                                        {this.state.showNewPasswordTwo ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Button
                        type=""
                        fullWidth
                        variant="raised"
                        color="primary"
                        className="submit"
                        onClick={this.handleUpdate}
                    >
                        Save
                        </Button>
                </form>
            </Paper>

        );
    }
}