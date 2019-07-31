import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import MainContent from './MainContent/MainContent';

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