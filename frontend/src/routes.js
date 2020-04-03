import React from 'react';
import { BrouwserRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}