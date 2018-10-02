import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {addNewTodo , getTodos} from './AxiosConnection';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [], text: "", priority: 1, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo= this.addTodo.bind(this);
        this.getTodoList= this.getTodoList.bind(this);
    }


    render() {

        return (
            <div className="App">
                <br/>
                <br/>
                <Card onSubmit={this.handleSubmit} >
                    <CardContent>
                        <h3>New TODO</h3>
                        <label htmlFor="text" className="right-margin">
                            Task:
                        </label>

                    
                        
                        <TextField id="text" type="text" onChange={this.handleTextChange} value={this.state.text}/>

                        <br/>
                        <br/>
                        <label htmlFor="priority" className="right-margin">
                            Priority:
                        </label>
                        <TextField id="priority" type="number" onChange={this.handlePriorityChange} value={this.state.priority}/>
                        <br/>
                        <br/>
                        <TextField id="date" label="Delivery Date:" type="date" onChange={this.handleDateChange} value={this.state.dueDate}/>

                    </CardContent> 
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        
                        <Button variant="fab" aria-label="Add" color="primary" size="large" onClick={this.handleSubmit} >
                            Add task #{this.state.todos.length + 1}
                        </Button>
                    </CardActions>
                    <TodoList todoList={this.state.todos}/>
                </Card>
                <br/>
                <br/>
                
                
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        }); 
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        
        const newTodo = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };
        this.addTodo(newTodo);
    }


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






}

export default TodoApp;
