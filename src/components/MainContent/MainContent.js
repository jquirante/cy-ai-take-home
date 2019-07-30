import './MainContent.css';
import React, { Component } from 'react';
import axios from 'axios';
import TabMenu from '../TabMenu/TabMenu';
import RepositoryContainer from './RepositoryContainer';

class MainContent extends Component {
    // state = {
    //     repositories: [],
    // }

    // componentDidMount() {
    //     axios.get("https://api.github.com/users/octocat/repos").then((response) => {
    //         console.log("RESPONSE: ", response);
    
    //         this.setState({repositories: [...response.data]});
        
    //     });
    // }
    
    render() {
        return(
            <div className="container">
                <TabMenu>
                    <div label="Overview">
                        <div>Popular Repositories</div>
                        <RepositoryContainer/>
                        {/* See ya later, <em>Alligator</em>! */}
                    </div>
                    <div label="Repositories">
                        <RepositoryContainer/>
                        {/* After 'while, <em>Crocodile</em>! */}
                    </div>
                </TabMenu>
            </div>
        )
    }
}

export default MainContent;