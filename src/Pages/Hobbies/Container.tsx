import Hobbies from "./index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
    IGamesInfo,
    requestFetchingUserOwnedGameInfo,
    receiveFetchedUserOwnedGameInfo,
    changePage
} from "./module";
import { ReduxAction, ReduxState } from "../../RootReduser";

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) {}

    public requestFetchingUserOwnedGameInfo() {
        this.dispatch(requestFetchingUserOwnedGameInfo());
    }

    public receiveFetchedUserOwnedGameInfo(userOwnedGamesnfo: IGamesInfo[]) {
        this.dispatch(receiveFetchedUserOwnedGameInfo(userOwnedGamesnfo));
    }

    public changeOwnedGameInfoPage(page: number) {
        this.dispatch(changePage(page));
    }
}

export default connect(
    (state: ReduxState) => ({ router: state.router, value: state.hobbies }),
    (dispatch: Dispatch<ReduxAction>) => ({
        actions: new ActionDispatcher(dispatch)
    })
)(Hobbies);
