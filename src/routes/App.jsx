import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import CreateAccount from "../pages/CreateAccount";
import useInitialState from "../hooks/useInitialState";

import AppContext from "../context/AppContext";

const App = () =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/recovery-password" component={RecoveryPassword} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/create-account" component={CreateAccount} />
                        <Route path="*" component= {NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;