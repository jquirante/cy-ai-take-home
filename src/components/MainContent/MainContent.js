import './MainContent.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import TabMenu from '../TabMenu/TabMenu';
import Overview from './Overview';
import Repositories from './Repositories';

class MainContent extends Component {
    state = {
        repositories: [],
        search: '',
    }

    handleFilter = async (e) => {
    
        await this.setState({search: e.target.value});
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/octocat/repos").then((response) => {

            this.setState({repositories: [...response.data]});
        
        });
    }
    
    render() {

        const { repositories, search } = this.state;
        return(
            <div className="container">
                <TabMenu repoCount={repositories.length}/>
                <div className="container">
                    <Route exact path="/" render={() => <Overview repoDetails={repositories}/>} />
                    <Route exact path="/repositories" render={ ()=> <Repositories searchBy={search} filter={this.handleFilter} repoDetails={repositories}/>} />  
                </div>
            </div>
        )
    }
}

export default MainContent;