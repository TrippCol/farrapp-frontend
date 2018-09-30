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
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import apimock from './ApiMock'
export class ProfileForm extends Component {
    state = { newName: '', newLastName: '' };

    render() {
        return (
            <div>
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
            </Paper>

            <Paper>
                <Typography variant="headline">Password</Typography>
                <form className="form">

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="adornment-password">Current password</InputLabel>
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
                        type=""
                        fullWidth
                        variant="raised"
                        color="primary"
                        className="submit"
                        onClick={this.handleUpdatePassword}
                    >
                        Submit
                        </Button>
                </form>
            </Paper>
            </div>
        
        );
    }
}