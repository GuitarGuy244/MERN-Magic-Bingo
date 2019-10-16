import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import MiniDrawer from "./components/drawer/drawer";
import Login from "./components/Login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game/game";
import SignIn from "./components/Login/Signin";
import SignUp from "./components/register/Signup";
import Signout from "./components/Signout";


const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem("token") }
    },
    applyMiddleware(reduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/dashboard" component={MiniDrawer} />
                <Route path="/game" component={Game} />
                <Route path="/signout" component={Signout} />
            </App>
        </Router>
    </Provider>,
    document.querySelector("#root")
);
