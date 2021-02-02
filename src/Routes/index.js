import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import LoginSection from '../Sections/Login'
import HomeTab from '../Sections/Home'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={LoginSection}/>
                <Route path={"/home"} component={HomeTab}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes