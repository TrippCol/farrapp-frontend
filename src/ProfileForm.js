import React, { Component } from "react";
import './ProfileForm.css'
import { Paper, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import apimock from './ApiMock'
export class ProfileForm extends Component {

    profile = JSON.parse(localStorage.getItem('profileInfo'));


    state = {
        name: this.profile.name, lastName: this.profile.lastName, id: this.profile.id,
        email: this.profile.email,
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

    handleUpdateInfo = () => {
        apimock.modifyUserInfo(JSON.parse(localStorage.getItem('profileInfo')).email, this.state.name, this.state.lastName, this.state.id, this.state.email,
        function(){
            console.log("YA SE MODIFICO EL USUARIO");
        });
    }

    handleUpdatePassword = () => {
        if(this.state.oldPassword === this.profile.password && 
            this.state.newPasswordOne === this.state.newPasswordTwo){
                apimock.modifyUserPassword(this.state.newPasswordOne, JSON.parse(localStorage.getItem('profileInfo')).email, function(){
                    console.log("YA SE MODIFICO LA CONTRASEÑA");
                });
            }
    };

    render() {
        return (
            <main className="layout">
                <Paper className="paper">
                    <Typography variant="headline">Update info</Typography>
                    <form className="form">
                        <ul className="listInput">
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <Input
                                        id="name"
                                        autoComplete="name"
                                        autoFocus
                                        onChange={this.handleNameChange}
                                        defaultValue={this.profile.name}
                                    />
                                </FormControl>
                            </li>
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        autoComplete="lastName"
                                        onChange={this.handleLastNameChange}
                                        defaultValue={this.profile.lastName}
                                    />
                                </FormControl>
                            </li>
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="id">Id</InputLabel>
                                    <Input
                                        id="id"
                                        name="id"
                                        autoComplete="id"
                                        onChange={this.handleIdChange}
                                        defaultValue={this.profile.id}
                                    />
                                </FormControl>
                            </li>
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.handleEmailChange}
                                        defaultValue={this.profile.email}
                                    />
                                </FormControl>
                            </li>
                            <li className="buttonUpdateLi">
                                <Button
                                    type="reset"
                                    color="secondary"
                                    variant="raised"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="button"
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    onClick={this.handleUpdateInfo}
                                >
                                    Update
                                </Button>
                            </li>
                        </ul>


                    </form>
                    <br />
                    <br />
                    <Typography variant="headline">Update password</Typography>
                    <form className="form">
                        <ul className="listInput">
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="oldPassword">Old password</InputLabel>
                                    <Input
                                        id="oldPassword"
                                        type={this.state.showOldPassword ? 'text' : 'password'}
                                        onChange={this.handleOldPasswordChange}
                                    />
                                </FormControl>
                            </li>
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="newPasswordOne">New password</InputLabel>
                                    <Input
                                        id="newPasswordOne"
                                        type={this.state.showNewPasswordOne ? 'text' : 'password'}
                                        onChange={this.handleNewPasswordOneChange}

                                    />
                                </FormControl>
                            </li>
                            <li>
                                <FormControl margin="normal" className="formInput">
                                    <InputLabel htmlFor="newPasswordTwo">Confirm new password</InputLabel>
                                    <Input
                                        id="newPasswordTwo"
                                        type={this.state.showNewPasswordTwo ? 'text' : 'password'}
                                        onChange={this.handleNewPasswordTwoChange}
                                    />
                                </FormControl>
                            </li>
                            <li className="buttonUpdateLi">
                                <Button
                                    type="button"
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    onClick={this.handleUpdatePassword}
                                >
                                    Save
                                </Button>
                            </li>
                        </ul>







                    </form>
                </Paper>
            </main>
        );
    }
}