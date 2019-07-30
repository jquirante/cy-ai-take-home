import React, { Component } from 'react';
import axios from 'axios';
import RepositoryListing from './RepositoryListing';

class RepositoryContainer extends Component {
    state = {
        repositories: [],
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/octocat/repos").then((response) => {
            console.log("RESPONSE: ", response);
    
            this.setState({repositories: [...response.data]});
        
        });
    }
    render() {

        const { repositories } = this.state;

        var repositoryCard = repositories.map((card) => {
            return (
                <div>card</div>
            )
        })

        return(
            <div>
                <RepositoryListing/>
            </div>
        )
    }
}

export default RepositoryContainer;