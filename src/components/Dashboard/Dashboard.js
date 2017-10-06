import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Dashboard-page'>
                <div className='profile-container'>
                    
                    <button>Edit Profile</button>
                </div>
                <div className='welcome-text'>
                    <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                </div>
                <div className='friend-container'>
                    <h2>Recommended Friends</h2>
                    <h4>Sorted by</h4>
                    <button>dropdown</button>
                </div>




            </div>

        )
    }
}

export default Dashboard;

// function mapStateToProps(state) {
//     console.log("State from private", state)
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps, { getUserInfo })(Private);