import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './customer/Customer'
import Dashboard from './admin/Dashboard'
import PageNotFound from './admin/PageNotFound';
import Login from './admin/Login';



const UserRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/admin' exact component={ProtectedRoutes} />
                <Route path='/' exact component={Customer} />
                <Route path='/*' exact component={Customer} />
            </Switch>
        </Router>
    );
}

export default UserRouter;



const ProtectedRoutes = () => {
    let isAuth = true

    return <>
        {isAuth ? <Route path='/admin/' exact component={Dashboard} /> :
            <Route path='/admin/' exact component={Login} />}
    </>
}