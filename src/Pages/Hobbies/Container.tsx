import Hobbies from "./index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import axios from "axios";
import {
    IUserOwnedGames,
    startFetchingOwnedGameInfo,
    fetchUserOwnedGames,
    finishFetchedOwnedGameInfo
} from "./module";
import { ReduxAction, ReduxState } from "../../RootReduser";

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) {}

    public async fetchUserOwnedGameInfo() {
        this.dispatch(startFetchingOwnedGameInfo());
        await axios
            .get(
                "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXX&steamid=YYY&include_appinfo=1"
            )
            .then(response => {
                const result: IUserOwnedGames = response.data;
                /**
                 * プレイ時間降順ソート
                 * 参考URL
                 * https://medium.com/@pagalvin/sort-arrays-using-typescript-592fa6e77f1
                 */
                const sortPlayTime = result.response.games.sort(
                    (leftSide, rightSide): number => {
                        if (
                            leftSide.playtime_forever >
                            rightSide.playtime_forever
                        ) {
                            return -1;
                        } else if (
                            leftSide.playtime_forever <
                            rightSide.playtime_forever
                        ) {
                            return 1;
                        }
                        return 0;
                    }
                );
                this.dispatch(fetchUserOwnedGames(sortPlayTime));
            })
            .catch(error => {
                console.log(error);
            });
        this.dispatch(finishFetchedOwnedGameInfo());
    }
}

export default connect(
    (state: ReduxState) => ({ router: state.router, value: state.hobbies }),
    (dispatch: Dispatch<ReduxAction>) => ({
        actions: new ActionDispatcher(dispatch)
    })
)(Hobbies);
