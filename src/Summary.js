import React, { Component } from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
export class Summary extends Component {
    state = {};

    render() {
        return (
            <details>
                <summary>
                    <AccountCircle />
                    <span></span>
                </summary>
                <details>
                    <ul>
                        <li>
                            <a href="/settings/profile">Settings</a>
                        </li>
                        <li>
                            <a href="/">Sign Out</a>
                        </li>
                    </ul>
                </details>
            </details>
        );
    }
}