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
        this.state = {items: [], text: '', address: '', dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
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
                        Nombre de la Farra:
                    </label>

                
                    
                    <TextField id="text" type="text" onChange={this.handleTextChange} value={this.state.text}/>

                    <br/>
                    <br/>
                    <label htmlFor="address" className="right-margin">
                        Dirección:
                    </label>
                    <TextField id="address" type="text" onChange={this.handleAddressChange} value={this.state.address}/>
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
                    <Button variant="fab" aria-label="Add" color="primary" onClick={this.handleSubmit} >
                        +
                    </Button>
                    </CardActions>

                </Card>
                <br/>
                <br/>
                <Card style={{justifyContent: 'center'}}>
                    <PartyList style={{justifyContent: 'center'}}  partyList={this.state.items}/>
                </Card>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        }); 
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.address.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            address: this.state.address,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: "",
            address: "",
            dueDate: "" })
        );
    }

}

export default FarrApp;
