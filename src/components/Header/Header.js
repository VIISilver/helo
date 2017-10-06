import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <h2><b>Helo</b></h2>
                <h3>Dashboard</h3>
                <button className="logout">Logout</button>
                </div>

        )
    }
}
