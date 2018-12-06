import {
    Action,
    applyMiddleware,
    compose,
    createStore,
    combineReducers
} from "redux";
import { createBrowserHistory } from "history";
import {
    RouterState,
    routerMiddleware,
    connectRouter,
    RouterAction
} from "connected-react-router";
import createSagaMiddleware from "redux-saga";
// redux関連
import app, { AppActions, AppState } from "./module";
import hobbies, { HobbiesActions, HobbiesState } from "./Pages/Hobbies/module";

const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default createStore(
    combineReducers({
        router: connectRouter(history),
        app,
        hobbies
    }),
    composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

export type ReduxState = {
    router: RouterState;
    app: AppState;
    hobbies: HobbiesState;
};

export type ReduxAction = Action | RouterAction | AppActions | HobbiesActions;
