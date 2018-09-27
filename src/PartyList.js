import React from 'react';
import {Party} from './Party'
import { Paper } from '@material-ui/core';

export class PartyList extends React.Component {

    


    render() {
        const partyList = this.props.partyList.map((party, i) => {
            return (
                <Party key={i} text={party.text} priority={party.priority} dueDate={party.dueDate}/>
            );
        });

        return (      
                <table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {partyList}
                    </tbody>
                </table>
            

        );


    }

}
