import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <h2><b>Helo</b></h2>
                <h3>Dashboard</h3>
                <a href='http://localhost:3005/auth/logout'> <button className="logout">Logout</button></a>
                </div>

        )
    }
}
