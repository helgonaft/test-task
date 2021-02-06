import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainContainer from '../pages/Main/MainContainer';


export default function RouterConfig() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainContainer />
                </Route>
                {/* <Route path="/send-transaction">
                    <SendTransaction />
                </Route> */}
            </Switch>
        </Router>
    );
}
