import React, { Component } from "react";
import "./App.css";
import { PartyList } from "./PartyList";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { addNewParty, getParties } from "./AxiosConnection";
import ApiMock from "./api/ApiMock";
import "./PartyPublisherApp.css";

class PartyPublisherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      partyName: "",
      description: "",
      eventDate: moment(),
      eventHour: "09:30",
      address: "",
      place: "",
      price: 0,
      optionalDescription: "",
      typeOfMusic: "",
      assistants: []
    };
    this.handlePartyNameChange = this.handlePartyNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleEventDateChange = this.handleEventDateChange.bind(this);
    this.handleEventHourChange = this.handleEventHourChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleOptionalDescriptionChange = this.handleOptionalDescriptionChange.bind(
      this
    );
    this.handleTypeOfMusicChange = this.handleTypeOfMusicChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    ApiMock.getParties(function(response) {
      localStorage.setItem("FIESTON", JSON.stringify(response.data));
    });

    this.state = { parties: JSON.parse(localStorage.getItem("FIESTON")) };
  }

  render() {
    return (
      <div className="App">
        <br />
        <br />
        <Card className="todo-form" onSubmit={this.handleSubmit}>
          <CardContent>
            <h2>Se armó la Farra!</h2>
            <label htmlFor="text" className="right-margin">
              Nombre:
            </label>

            <TextField
              id="text"
              type="text"
              onChange={this.handlePartyNameChange}
              value={this.state.partyName}
              autoFocus
            />
            <br />
            <br />
            <label htmlFor="text" className="right-margin">
              Descripción:
            </label>
            <TextField
              id="text"
              type="text"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
            <br />
            <br />
            <TextField
              id="date"
              label="Día de la fiesta:"
              type="date"
              onChange={this.handleEventDateChange}
              value={this.state.eventDate}
              InputLabelProps={{ shrink: true }}
            />
            <br />
            <TextField
              id="hour"
              label="Hora de la fiesta:"
              type="time"
              defaultValue="09:30"
              InputLabelProps={{ shrink: true }}
              inputProps={{
                step: 300 // 5 min
              }}
              onChange={this.handleEventHourChange}
              value={this.state.eventHour}
            />
            <br />
            <br />

            <label htmlFor="address" className="right-margin">
              Dirección:
            </label>
            <TextField
              id="address"
              type="text"
              onChange={this.handleAddressChange}
              value={this.state.address}
            />
            <br />
            <br />
            <label htmlFor="place" className="right-margin">
              Lugar:
            </label>
            <TextField
              id="place"
              type="text"
              onChange={this.handlePlaceChange}
              value={this.state.place}
            />
            <br />
            <br />

            <label htmlFor="price" className="right-margin">
              Precio:
            </label>
            <TextField
              id="price"
              type="number"
              onChange={this.handlePriceChange}
              value={this.state.price}
            />
            <br />
            <br />
            <label htmlFor="text" className="right-margin">
              Info (opcional):
            </label>
            <TextField
              id="text"
              type="text"
              onChange={this.handleOptionalDescriptionChange}
              value={this.state.optionalDescription}
            />
            <br />
            <br />
            <label htmlFor="typeOfMusic" className="right-margin">
              Género:
            </label>
            <TextField
              id="typeOfMusic"
              type="text"
              onChange={this.handleTypeOfMusicChange}
              value={this.state.typeOfMusic}
            />
            <br />
            <br />
          </CardContent>
          <br />
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              variant="fab"
              aria-label="Add"
              color="primary"
              onClick={this.handleSubmit}
            >
              +
            </Button>
          </CardActions>
        </Card>
        <br />
        <br />
        <Card style={{ justifyContent: "center" }}>
          <PartyList
            style={{ justifyContent: "center" }}
            partyList={this.state.parties}
          />
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

  handleEventDateChange(e) {
    this.setState({
      eventDate: e.target.value
    });
  }
  handleEventHourChange(time) {
    this.setState({
      eventHour: time.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }
  handlePlaceChange(e) {
    this.setState({
      place: e.target.value
    });
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    });
  }

  handleOptionalDescriptionChange(e) {
    this.setState({
      optionalDescription: e.target.value
    });
  }

  handleTypeOfMusicChange(e) {
    this.setState({
      typeOfMusic: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      !this.state.partyName.length ||
      !this.state.eventDate.length ||
      !this.state.address.length ||
      !this.state.place.length ||
      !this.state.typeOfMusic.length
    )
      return;

    const newParty = {
      partyName: this.state.partyName,
      description: this.state.description,
      eventDate: this.state.eventDate,
      eventHour: this.state.eventHour,
      address: this.state.address,
      place: this.state.place,
      price: this.state.price,
      optionalDescription: this.state.optionalDescription,
      typeOfMusic: this.state.typeOfMusic,
      assistants: this.state.assistants
    };
    this.addParty(newParty);
  }

  addParty(party) {
    /*var self= this;
        var callback={
            onSuccess: function(){
                self.getPartyList();
            },
            onFailed: function(error){
                console.log(error);
            }
        };
        addNewParty(party,callback);
        */
    ApiMock.addNewParty(
      party.partyName,
      party.description,
      party.eventDate,
      party.eventHour,
      party.address,
      party.place,
      party.price,
      party.optionalDescription,
      party.typeOfMusic,
      party.assistants
    );
    this.getPartyList();
  }

  getPartyList() {
    /*
        var self = this;
        var callback = {
            onSuccess: function(response){
                self.setState({
                    parties: response.data.mockedParties, partyName: '', description:'', eventDate:moment(), eventHour:'09:30', address:'',place:'', price: 0, optionalDescription:'', typeOfMusic:'', assistants:[]
                });
            },
            onFailed: function(error){
                console.log(error);
            }
        };*/
    var self = this;
    ApiMock.getParties(function(response) {
      self.setState({
        parties: response.data,
        partyName: "",
        description: "",
        eventDate: moment(),
        eventHour: "09:30",
        address: "",
        place: "",
        price: 0,
        optionalDescription: "",
        typeOfMusic: "",
        assistants: []
      });
    });
  }
}

export default PartyPublisherApp;
