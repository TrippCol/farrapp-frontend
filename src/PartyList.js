import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (

                <Party key={i} partyName={party.partyName} description={party.description} eventDate={party.eventDate} eventHour={party.eventHour} address={party.address} 
                price={party.price} optionalDescription={party.optionalDescription} typeOfMusic={party.typeOfMusic} assistants={party.assistants}/>
            );
        });


        return (     
            <Paper>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre Evento:</th>
                        <th>Descripción:</th>
                        <th>Fecha:</th>
                        <th>Hora:</th>
                        <th>Dirección:</th>
                        <th>Precio:</th>
                        <th>Descr2:</th>
                        <th>Género:</th>
                        <th>assistants:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {partyList}
                    </tbody>
                </table>   
                <Button variant="fab" aria-label="Add" color="primary" size="large"  >
                <h1>¡Ir!</h1>
                </Button>
            </Paper>       
        );


    }

}
