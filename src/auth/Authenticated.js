import React, {Suspense} from "react";
import {getRole} from "../TokenService";
import AdminRoutes from "./AdminRoutes";
import {BrowserRouter as Router} from "react-router-dom";
import Loading from "../helpers/Loading";


 const Authenticated = ()=>{
        return (
            <Suspense fallback={<Loading/>}>
                <Router>
                <AdminRoutes/>
             </Router>
            </Suspense>
        )
}
export default Authenticated
