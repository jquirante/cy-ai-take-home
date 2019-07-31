import React, { Component } from 'react';
import RepositoryListing from './RepositoryListing';

class Overview extends Component {
    
    render() {

        const { repoDetails } = this.props;

        var repoList = [...repoDetails];

        repoList.sort((a,b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1);
    
        var repositoryCard = repoList.map( (card, index) => {
                
                return (
                    <RepositoryListing key={index} repoDetails={card}>
                    </RepositoryListing>
                    
                )      
        })
        return(
            <div className="col s6">
                <div>Popular Repositories</div>
                {repositoryCard}
            </div>
        )
    }
}

export default Overview;