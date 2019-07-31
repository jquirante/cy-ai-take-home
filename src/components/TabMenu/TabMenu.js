import './TabMenu.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TabMenu extends Component {
    
    handleTabClicked = (e) => {
       
        var currentElementClasses = e.currentTarget.className;

        if (!currentElementClasses.includes('active')) {
            e.currentTarget.classList.add('active');

            if (e.currentTarget.previousSibling) {
                e.currentTarget.previousSibling.classList.remove('active');
            } else {
                e.currentTarget.nextSibling.classList.remove('active');
            }
            
        } 
    }

    componentDidMount() {

        axios.get("https://api.github.com/users/octocat/repos").then((response) => {
    
            this.setState({overviewRepositories: [...response.data]});
        
        });
    }

    render() {

        const { repoCount } = this.props;
        return(
            <div className="container col s7 offset-s3">
                <ul className="tab-menu">
                    <li onClick={this.handleTabClicked} className="tab active"><Link to="/">Overview</Link></li>
                    <li onClick={this.handleTabClicked} className="tab"><Link to="/repositories">Repositories<span className="total-repo-count">{repoCount}</span></Link></li>
                </ul>
            </div>
        )
    }
}

export default TabMenu;