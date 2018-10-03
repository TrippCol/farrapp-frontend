import React from 'react';

export class Party extends React.Component {

   

    render() {
        return (

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

                 
            );
            </tr>
        );
    }
    
}