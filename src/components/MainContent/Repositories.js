import React, { Component } from 'react';
import RepositoryListing from './RepositoryListing';

class Repositories extends Component {

    render() {
        
        const { repoDetails, searchBy } = this.props;
        var repoList = [...repoDetails];
        
        if (searchBy) {
            repoList = repoList.filter((repository) => {
                return repository.name.toLowerCase().includes(searchBy.toLowerCase())
            });
        } else {
            repoList.sort((a,b) => (a.updated_at > b.updated_at) ? -1 : 1);
        }
        
        var repositoryCard = repoList.map( (card, index) => {
            
            return (
                <RepositoryListing repoType="repository-listing" key={index} repoDetails={card}>
                </RepositoryListing>
                
            )      
    })
        return(
            <div>
                <div>
                    <input onChange={this.props.filter} placeholder="Find a repository..."></input>
                </div>
                {repositoryCard}
            </div>
        )
    }
}

export default Repositories;