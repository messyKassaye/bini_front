import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import Authenticated from "../auth/Authenticated";
import AuthenticatedRoute from "./AuthenticationRoute";
import App from '../App'

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <AuthenticatedRoute path={'/auth'} component={Authenticated}/>
                <PrivateRoutes path='/' component={App}/>
            </Switch>
        </Router>
    );
}

export default Routes
