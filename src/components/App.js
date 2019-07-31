import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import MainContent from './MainContent/MainContent';
import Overview from './MainContent/Overview';
import Repositories from './MainContent/Repositories';

class App extends Component {
    render() {
        return(
            <Router>
                <NavMenu/>
                <MainContent/>
            </Router>
        )
    }
}

export default App;