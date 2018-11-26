import { Action, combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";

import App, { AppActions, AppState } from "./module";

const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        App
    });

export type ReduxState = {
    router: RouterState;
    App: AppState;
};

export type ReduxAction = AppActions | Action;

export default rootReducer;
