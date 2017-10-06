import React, { Component } from 'react';
import './Login.css';
export default class Login extends  Component {
    render() {
        return (
            <div className ='background'>
                <div className = 'box'>
                     <img className = 'logo' src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/logo.png" alt = 'smiley'></img>                    
                    <p>Helo</p>
                    <a href={ process.env.REACT_APP_LOGIN }><button className = 'loginButton'>Login/Register</button></a>
                </div>
            </div>
        )

    }
}