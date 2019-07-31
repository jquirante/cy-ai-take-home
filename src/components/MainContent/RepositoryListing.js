import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';

class RepositoryListing extends Component {
    render() {
        const { name, description, language, stargazers_count, forks_count } = this.props.repoDetails;

        return(
            <div id={this.props.repoType ? "repository-listing" : ""} className="repository-container col s6">
                <div className="repo-name">{name}</div>
                <div className="repo-description">{description}</div>
                <ul className="repo-stats">
                    {language ? <li>{language}</li> : ''}
                    <li>{stargazers_count}</li>
                    <li>{forks_count}</li>
                </ul>
            </div>
        )
    }
}
    
export default RepositoryListing;