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
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={MiniDrawer} />
                <Route path="/game" component={Game} />
            </App>
        </Router>
    </Provider>,
    document.querySelector("#root")
);
