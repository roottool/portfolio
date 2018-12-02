import * as React from "react";
import * as ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import App from "./Container";
import rootReduser from "./RootReduser";
import rootSaga from "./sagas";

// store関連
const history = createBrowserHistory();
const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReduser(history),
    composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
