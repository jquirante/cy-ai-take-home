import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import MainContent from './MainContent/MainContent';


const App = () => {
    return(
        <div>
            <NavMenu/>
            <MainContent/>
        </div>
    )
}

export default App;