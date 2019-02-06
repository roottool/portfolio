import { take, put, call, fork } from "redux-saga/effects";
import axios from "axios";
import {
    ActionNames,
    IUserOwnedGames,
    IGamesInfo,
    receiveFetchedUserOwnedGameInfo
} from "../Pages/Hobbies/module";

// 2019/1/22 time point SteamOwnedGameData
import contents from '../Pages/Hobbies/OwnedGames.json'

/**
 * プレイ時間降順ソート
 *
 * 参考URL
 *
 * https://medium.com/@pagalvin/sort-arrays-using-typescript-592fa6e77f1
 */
const sortOwnedGames = (ownedGames: IUserOwnedGames) => {
    return ownedGames.response.games.sort(
        (leftSide: IGamesInfo, rightSide: IGamesInfo): number => {
            if (leftSide.playtime_forever > rightSide.playtime_forever) {
                return -1;
            } else if (leftSide.playtime_forever < rightSide.playtime_forever) {
                return 1;
            }
            return 0;
        }
    );
};

/**
 * An error has occured.
 *
 * Error message is "No 'Access-Control-Allow-Origin' header is present on the requested resource.".
 *
 * Therefore I cancel to use this function until this issue is resolved.
 */
const fetchOwnedGamesApi = () => {
    const url = `https://roottool.netlify.com/.netlify/functions/fetchOwnedGamesApi`;

    return axios
        .get(url)
        .then(response => {
            return JSON.parse(response.data);
        })
        .catch(error => {
            throw new Error(error);
        });
};

export function* fetchUserOwnedGameInfo() {
    while (true) {
        yield take(ActionNames.REQUEST_FETCH);
        const ownedGames = yield call(fetchOwnedGamesApi);
        // const ownedGames = contents
        const sortedOwendGames = yield call(sortOwnedGames, ownedGames);
        yield put(receiveFetchedUserOwnedGameInfo(sortedOwendGames));
    }
}

export default function* root() {
    yield fork(fetchUserOwnedGameInfo);
}
