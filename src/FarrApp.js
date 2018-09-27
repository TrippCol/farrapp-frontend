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
import "./FarrApp.css";

class FarrApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">

           
                <br/>
                <br/>
                <Card className="todo-form" onSubmit={this.handleSubmit}>
                    <CardContent>
                    <h3>Se armó la rumba!</h3>
                    <label htmlFor="text" className="right-margin">
                        Farra:
                    </label>

                
                    
                    <TextField id="text" type="text" onChange={this.handleTextChange} value={this.state.text}/>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Prioridad:
                    </label>
                    <TextField id="priority" type="number" onChange={this.handlePriorityChange} value={this.state.priority}/>
                    <br/>
                    <br/>
                    <TextField id="date" label="Delivery Date:" type="date" onChange={this.props.handleDateChange} value={this.state.date}
                    InputLabelProps={{
                        shrink: true
                    }}
                    />

                    </CardContent> 
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="fab" aria-label="Add" color="primary" size="large" onClick={this.handleSubmit} >
                        ¡Agregarme a la fiesta!,  eres el #{this.state.items.length + 1}
                    </Button>
                    </CardActions>

                </Card>
                <br/>
                <br/>
                <PartyList style={{justifyContent: 'center'}} color="blue" partyList={this.state.items}/>
                
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

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
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
            text: "",
            priority: "",
            dueDate: "" })
        );
    }

}

export default FarrApp;
