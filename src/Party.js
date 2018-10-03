import React from 'react';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import apimock from './ApiMock';

export class Party extends React.Component {


    constructor(props) {
        super(props);
        this.state = {user:{}};

        apimock.getParties(function(response){
            localStorage.setItem("FIESTON", JSON.stringify(response.data));
        })

        this.state = {user: JSON.parse(localStorage.getItem("profileInfo")) };

        this.handlePartyInscription=this.handlePartyInscription.bind(this);
    }
   

    render() {

        

        return (
            <Paper>
                <th>
                    <td>{this.props.partyName}</td>
                </th>
                <th>
                    <td>{this.props.description}</td>
                </th>
                <th>
                    <td>{this.props.eventDate}</td>
                </th>
                <th>
                    <td>{this.props.eventHour}</td>
                </th>
                <th>
                    <td>{this.props.address}</td>
                </th>
                <th>
                    <td>{this.props.place}</td>
                </th>
                <th>
                    <td>{this.props.price}</td>
                </th>
                <th>
                    <td>{this.props.optionalDescription}</td>
                </th>
                <th>
                    <td>{this.props.typeOfMusic} </td>
                </th>
                <th>
                    <td>{this.props.assistants}</td>
                </th>
                <th>
                    <Button variant="fab" aria-label="Add" color="primary" size="small" onClick={this.handlePartyInscription}>
                    <h1>¡Ir!</h1>
                    </Button>
                </th>
                
               
            </Paper>
        );
    }


    handlePartyNameChange(e) {
        this.setState({
            partyName: e.target.value
        });
    }
    handlePartyInscription(e) {
        e.preventDefault();
        if(this.props.assistants.indexOf(this.state.user)<0){ 
            this.props.assistants.push(this.state.user);
            localStorage.setItem("Agregados a la fiesta", JSON.stringify(this.props.assistants));
        }

        
    }


    
}