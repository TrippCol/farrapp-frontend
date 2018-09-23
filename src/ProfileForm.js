import React, { Component } from "react";
import './ProfileForm.css'
import { Paper, TextField } from "@material-ui/core";
export class ProfileForm extends Component {
    state = {};

    render() {
        return (
            <div>
                <Paper className="data-form">
                    <label>Modify data</label>
                    <TextField label="Nombre" defaultValue="Juan David"></TextField>
                    <TextField label="Apellidos" defaultValue="Ramirez Mendoza"></TextField>
                    <TextField label="Email" defaultValue="juan.ramirez-me@mail.escuelaing.edu.co"></TextField>
                </Paper>

                <Paper>
                    <TextField label="Contraseña antigua"></TextField>
                    <TextField label="Contraseña nueva"></TextField>
                </Paper>
            </div>
        );
    }
}