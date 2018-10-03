import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';


export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (
                
                <Party key={i} partyName={party.partyName} description={party.description} eventDate={party.eventDate} eventHour={party.eventHour} 
                address={party.address} place={party.place}price={party.price} optionalDescription={party.optionalDescription}
                typeOfMusic={party.typeOfMusic} assistants={party.assistants}/>                   
                
            );
        });


        return (     
            
            <table>
                <thead>
                <tr>
                    <th>Nombre Evento</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Dirección</th>
                    <th>Lugar</th>
                    <th>Precio</th>
                    <th>Info</th>
                    <th>Género</th>  
                </tr>
                </thead>
                <tbody>
                {partyList}
                </tbody>
            </table>   
     
        );


    }

}
