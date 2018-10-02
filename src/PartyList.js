import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (

                <Party key={i} text={party.text} address={party.address} dueDate={party.dueDate}/>
            );
        });

        return (     
            <Paper>
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
                <Button variant="fab" aria-label="Add" color="primary" size="large"  >
                <h1>¡Ir!</h1>
                </Button>
            </Paper>       
        );


    }

}
