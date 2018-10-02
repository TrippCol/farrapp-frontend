import React from 'react';

export class Party extends React.Component {

   

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.address}</td>
                <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
            </tr>
        );
    }

}