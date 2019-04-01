import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Login, NotFound} from './pages';

export default () =>
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  
