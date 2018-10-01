import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';

export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (
                <Party key={i} text={party.text} priority={party.priority} dueDate={party.dueDate} assistants={party.assistants}/>
            );
        });

        return (   
              
            <table style={{margin:'0 auto;'}} >
                <thead>
                <tr>
                    <th>Evento</th>
                    <th>Dirección</th>
                    <th>Fecha</th>
                </tr>
                </thead>
                <tbody>
                {partyList}
                </tbody>
            </table>
            
            

        );


    }

}
