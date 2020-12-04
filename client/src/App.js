import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about-us" className="nav-link" activeClassName="active">About Us</NavLink></li>
                <li className="nav-item"><NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink></li>
                <li className="nav-item"><NavLink to="/posts" className="nav-link" activeClassName="active">Posts</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/news">
                <UserList />
            </Route>

            <Route path="/" exact>
                <h1 className="display-3">Full Join Coding Collective</h1>
                <p className="lead">We meet weekly to write code and shoot the shit. Join us.</p>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
