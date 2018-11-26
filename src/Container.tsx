import App from "./App";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { openSideMenu, closeSideMenu } from "./module";
import { ReduxAction, ReduxState } from "./RootReduser";

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) {}

    public openSideMenu() {
        this.dispatch(openSideMenu());
    }

    public closeSideMenu() {
        this.dispatch(closeSideMenu());
    }
}

export default connect(
    (state: ReduxState) => ({ router: state.router, value: state.app }),
    (dispatch: Dispatch<ReduxAction>) => ({
        actions: new ActionDispatcher(dispatch)
    })
)(App);
