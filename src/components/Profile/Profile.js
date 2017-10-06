import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
import { getUserInfo } from '../../ducks/users';
import { connect } from 'react-redux';
import  Header  from '../Header/Header';
import profileImage from '../../profile-image.png';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }
    render() {
        return (
            <div className='update-Profile'>
                <Header />
                <div className='profile-head'>
                 <img className='profile-Image' src= 'profileImage' alt= 'profileImage' /> 
                <p> Erin</p>
                <p> Schull</p>
                <button className='update-button'>Update</button>
                <button className='cancel-button'>Cancel</button>
                </div>
            `   <div className='update-Input' >
                <input className='first-Name-Input' />
                <input className='last-Name-Input' />
                <select>
                    <option>Gender</option>
                </select>
                <select>
                    <option>Hair Color</option>
                </select>
                <select>
                    <option>Eye Color</option>
                </select>
                <select>
                    <option>Hobby</option>
                </select>
                <select>
                    <option>Birthday Day</option>
                </select>
                <select>
                    <option>Birthday Month</option>
                </select>
                <select>
                    <option>Birthday Year</option>
                </select>
                </div>`
            </div>
        )
    }
}
// function mapStateToProps(state){
//     console.log('state from profile', state)
//     return{
//         user: state.user
//     }
// }
// export default connect(mapStateToProps, { getUserInfo })(Profile);