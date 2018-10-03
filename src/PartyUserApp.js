import React, {Component} from 'react';
import './App.css';
import {PartyList} from "./PartyList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "./PartyUserApp.css";
import apimock from './ApiMock';

class PartyUserApp extends Component {

    constructor(props) {
        super(props);


        apimock.getParties(function(response){
            localStorage.setItem("FIESTON", JSON.stringify(response.data));
        })

        this.state = {parties: JSON.parse(localStorage.getItem("FIESTON")) };

        /*this.addTodo= this.addTodo.bind(this);
        this.getTodoList= this.getTodoList.bind(this);*/
    }


    render() {

        return (
            <div className="App">
                <br/>
                <br/>
                <Card className="todo-form">
                    
                    <CardContent style={{justifyContent: 'center'}}>
                    
                    <h3>Fiestas Disponibles:</h3>

                    </CardContent> 
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>

                    <PartyList partyList={this.state.parties}/>
                   
                    </CardActions>

                </Card>
                <br/>
                <br/>
                
                
            </div>
        );
    }

    
  

}

export default PartyUserApp;
