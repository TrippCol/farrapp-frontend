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
import "./PartyPublisherApp.css";

class PartyPublisherApp extends Component {

    constructor(props) {
        super(props);
        this.state = {parties: [], partyName: '', description:'', eventDate:moment(), eventHour:'', address:'', price: 0, optionalDescription:'', typeOfMusic:'', assistants:[]};
        this.handlePartyNameChange = this.handlePartyNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleEventDateChange = this.handleEventDateChange.bind(this);
        this.handleEventHourChange= this.handleEventHourChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleOptionalDescriptionChange=this.handleOptionalDescription.bind(this);
        this.handleTypeOfMusicChange= this.handleTypeOfMusicChange.bind(this);
        
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
                    InputLabelProps={{shrink: true}}
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
                    <PartyList style={{justifyContent: 'center'}}  partyList={this.state.parties}/>
                </Card>
            </div>
        );
    }

    handlePartyNameChange(e) {
        this.setState({
            partyName: e.target.value
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        }); 
    }

    handleDateChange(date) {
        this.setState({
            eventDate: date
        });
    }
    handleEventHourChange(time) {
        this.setState({
            eventDate: time
        });
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        }); 
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        }); 
    }

    handleOptionalDescriptionChange(e){
        this.setState({
            optionalDescription: e.target.value
        })
    }

    handleTypeOfMusicChange(e){
        this.setState({
            typeOfMusic:e.target.value
        })
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

export default PartyPublisherApp;
