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

class PartyUserApp extends Component {

    constructor(props) {
        super(props);
        this.state = {parties: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        /*this.addTodo= this.addTodo.bind(this);
        this.getTodoList= this.getTodoList.bind(this);*/
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
                   
                    </CardActions>

                </Card>
                <br/>
                <br/>
                
                
            </div>
        );
    }

    
    handleSubmit(e) {

        e.preventDefault();

        
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
    /*
    addTodo(todo){
        var self = this;
        var callback = {
            onSuccess: function(){
                self.getTodoList();
            },
            onFailed: function(error){
                console.log(error);
            }
        };
        addNewTodo(todo, callback);
    }

    getTodoList(){
        var self = this;
        var callback = {
            onSuccess: function(response){
                self.setState({
                    todos: response.data.todos, text: "", priority: 1, dueDate: ""
                });
            },
            onFailed: function(error){
                console.log(error);
            }
        };
        getTodos(callback);
    }
    */

}

export default PartyUserApp;
