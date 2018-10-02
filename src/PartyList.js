import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';

export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (
<<<<<<< HEAD
                <Party key={i} text={party.text} address={party.address} dueDate={party.dueDate}/>
            );
        });

        return (      
                <table>
                    <thead>
                    <tr>
                        <th>Nombre de la Fiesta</th>
                        <th>Dirección</th>
                        <th>Fecha del Evento</th>
                    </tr>
                    </thead>
                    <tbody>
                    {partyList}
                    </tbody>
                </table>
=======
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
            
>>>>>>> b6198b248e11c2ee68cee77f05a393bc1f97ccb9
            

        );


    }

}
