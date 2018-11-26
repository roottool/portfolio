import { Action, combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";

import app, { AppActions, AppState } from "./module";
import hobbies, { HobbiesActions, HobbiesState } from "./Pages/Hobbies/module";

const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        app,
        hobbies
    });

export type ReduxState = {
    router: RouterState;
    app: AppState;
    hobbies: HobbiesState;
};

export type ReduxAction = AppActions | HobbiesActions | Action;

export default rootReducer;
