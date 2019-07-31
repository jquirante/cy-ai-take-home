import React, { Component } from 'react';

class RepositoryListing extends Component {
    render() {
        const { name, description, language, stargazers_count, forks_count, updated_at } = this.props.repoDetails;

        return(
            <div id={this.props.repoType ? "repository-listing" : "overview-listing"} className={this.props.repoType ? "repository-container col s11 offset-s3" : "repository-container col s4"}>
                <div className="repo-name">{name}</div>
                <div className="repo-description">{description}</div>
                <ul className="repo-stats">
                    {language ? <li>Language: {language}</li> : ''}
                    <li>Favorites: {stargazers_count}</li>
                    <li>Forks: {forks_count}</li>
                    {this.props.repoType ? <li>Updated Last: {new Date(updated_at).toISOString().split`T`[0]}</li>: ''}
                </ul>
            </div>
        )
    }
}
    
export default RepositoryListing;