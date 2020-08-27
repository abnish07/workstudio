import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';

function Routes(){

    return(
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/contact-us">{ContactUs}</Route>
        </Switch>
    </>
    )
}

export default Routes;