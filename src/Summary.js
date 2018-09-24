import React, { Component } from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Summary.css'
export class Summary extends Component {
    state = {};

    render() {
        return (
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
                                <a role="menuitem"  className="dropdown-item" href="/settings">Settings</a>
                            </li>
                            <li>
                                <a role="menuitem" className="dropdown-item" href="/">Sign Out</a>
                            </li>
                        </ul>
                    </details-menu>
                </details>
            </li>
        );
    }
}