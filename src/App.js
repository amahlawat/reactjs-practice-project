import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import RouterV5 from './router-v5/App';
import ReduxConcepts from './redux-concepts/App';

import './App.css';

const App = () => (
    <>
        <div className="app">
            <h1>Reactjs Practice Projects</h1>
            <div className="boxes">
                {["router-v5", "redux-concepts"].map(project => <div className="box">
                    <NavLink to={"/"+project}>{project}</NavLink></div>)}
            </div>
        </div>
        <main>
            <Switch>
                <Route path="/router-v5" component={RouterV5} />                
                <Route path="/redux-concepts" component={ReduxConcepts} />                
            </Switch>
        </main>
    </>
);

export default App;