import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import rootReduser from "./RootReduser";
import rootSaga from "./sagas";

const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default () => {
    const store = createStore(
        rootReduser(history),
        composeEnhancer(
            applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
