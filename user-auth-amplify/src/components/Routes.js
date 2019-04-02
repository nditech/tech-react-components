import React from "react";
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import {Home, Login, NotFound, Signup} from './pages';
import AppliedRoute from './AppliedRoute';

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        <Route component={NotFound} />
    </Switch>
