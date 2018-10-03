import React, {Component} from 'react';
import './App.css';
import {PartyList} from "./PartyList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AccountCircle from '@material-ui/icons/AccountCircle';
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

    handleLogOut = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("profileInfo");
        localStorage.removeItem("isLoggedIn");
    }


    render() {

        return (
            <div className="App">
                
                <br/>
                <br/>

                <Card className="todo-form">

                    <li className='onclick-menu'>
                        <details className="">
                            <summary>
                                <AccountCircle />
                                <span className="dropdown-caret">

                                </span>
                            </summary>
                            <details-menu className="dropdown-menu">
                                <ul>
                                    <li>
                                        <a role="menuitem" className="dropdown-item" href="/settings">Configuración</a>
                                    </li>
                                    <li>
                                        <a role="menuitem" className="dropdown-item" href="/login" onClick={this.handleLogOut}>Desconectar</a>
                                    </li>
                                </ul>
                            </details-menu>
                        </details>
                    </li>

                    
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
