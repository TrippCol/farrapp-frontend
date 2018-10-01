import React, {Component} from 'react';
import './App.css';
import {PartyList} from "./PartyList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "./PartyApp.css";

class PartyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], assistants:[] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">

           
                <br/>
                <br/>
                <Card className="todo-form" onSubmit={this.handleSubmit}>
                    
                    <CardContent style={{justifyContent: 'center'}}>
                    
                    <h3>Fiestas Disponibles:</h3>
                    

                    
                    </CardContent> 
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>

                    <PartyList partyList={this.state.items}/>
                    <Button variant="fab" aria-label="Add" color="primary" size="large" onClick={this.handleSubmit} >
                        ¡Agregarme a la fiesta!,  eres el #{this.state.items.length + 1}
                    </Button>
                    </CardActions>

                </Card>
                <br/>
                <br/>
                
                
            </div>
        );
    }

    
    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            }
        ));
        
    }

}

export default PartyApp;
