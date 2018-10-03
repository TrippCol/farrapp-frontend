import React from 'react';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class Party extends React.Component {

   

    render() {
        return (
            <Paper>
                <tr>
                    <td>{this.props.partyName}</td>
                    <td>{this.props.description}</td>
                    <td>{this.props.eventDate}</td>
                    <td>{this.props.eventHour}</td>
                    <td>{this.props.address}</td>
                    <td>{this.props.place}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.optionalDescription}</td>
                    <td>{this.props.typeOfMusic} </td>
                    <td>{this.props.assistants}</td>
                    <td>
                        <Button variant="fab" aria-label="Add" color="primary" size="large">
                        <h1>¡Ir!</h1>
                        </Button></td>
                </tr>
               
            </Paper>
        );
    }
    
}