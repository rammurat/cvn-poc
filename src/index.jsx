import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './components/main.js'
import AddForm from './components/addForm.js'
import Detail from './components/detail.js'
import Listing from './components/listing.js'
import Login from './components/login.js'
import Matching from './components/matching.js'

//load product store
import AppStore from './store/appStore.js';

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Login} data={AppStore}/>
            <Route path="/addForm" component={AddForm} data={AppStore}/>
            <Route path="/detail" component={Detail} data={AppStore}/>
            <Route path="/listing" component={Listing} data={AppStore}/>
            <Route path="/login" component={Login} data={AppStore}/>
            <Route path="/matching" component={Matching} data={AppStore}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
