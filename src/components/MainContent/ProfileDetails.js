import React, { Component } from 'react';
import axios from 'axios';

class ProfileDetails extends Component {

    state = {
        profileInfo: undefined
    }

    componentDidMount() {
        axios.get("http://api.github.com/users/octocat").then((response)=>{
           this.setState({profileInfo: response.data})
        })
    }

    render() {
        return(
            <div className="main-page-profile-container col s1">
                <div className="profile-image-container">
                    <img alt='profile_image' src={this.state.profileInfo ? this.state.profileInfo.avatar_url : '../../assets/profile_image.png'} className="profile-image"></img>
                </div>
                <div className="profile-name">
                    {this.state.profileInfo ? this.state.profileInfo.login : ''}
                </div>
            </div>
        )
    }
}

export default ProfileDetails;