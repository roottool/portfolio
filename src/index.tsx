import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    applyMiddleware,
    compose,
    createStore,
    combineReducers,
    Action
} from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import {
    ConnectedRouter,
    RouterState,
    routerMiddleware
} from "connected-react-router";

import App from "./Container";
import rootReduser from "./RootReduser";

import "./index.css";

// store関連
const history = createBrowserHistory();
const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReduser(history),
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
