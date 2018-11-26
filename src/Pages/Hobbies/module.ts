import { Action } from "redux";

export interface IUserOwnedGames {
    response: {
        game_count: number;
        games: [IGamesInfo];
    };
}

interface IGamesInfo {
    appid: number;
    name: string;
    playtime_2weeks: number;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
}

// ActionCreator
enum ActionNames {
    FETCH_START = "hobbies/startFetchingUserOwnedGames",
    FETCH = "hobbies/fetchUserOwnedGames",
    FETCH_FINISH = "hobbies/finishFetchedUserOwnedGames"
}

interface StartFetchingUserOwnedGamesAction extends Action {
    type: ActionNames.FETCH_START;
    hobbiesAction: boolean;
}
export const startFetchingOwnedGameInfo = (): StartFetchingUserOwnedGamesAction => ({
    type: ActionNames.FETCH_START,
    hobbiesAction: true
});

interface FetchUserOwnedGamesAction extends Action {
    type: ActionNames.FETCH;
    hobbiesAction: boolean;
    OwnedGameInfo: IGamesInfo[];
}

export const fetchUserOwnedGames = (
    fetchData: IGamesInfo[]
): FetchUserOwnedGamesAction => ({
    type: ActionNames.FETCH,
    hobbiesAction: true,
    OwnedGameInfo: fetchData
});

interface FinishFetchedUserOwnedGamesAction extends Action {
    type: ActionNames.FETCH_FINISH;
    hobbiesAction: boolean;
}

export const finishFetchedOwnedGameInfo = (): FinishFetchedUserOwnedGamesAction => ({
    type: ActionNames.FETCH_FINISH,
    hobbiesAction: false
});

//reducer
interface IGamesInfo {
    appid: number;
    name: string;
    playtime_2weeks: number;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
}
export interface HobbiesState {
    rows: IGamesInfo[];
}

export type HobbiesActions =
    | StartFetchingUserOwnedGamesAction
    | FetchUserOwnedGamesAction
    | FinishFetchedUserOwnedGamesAction;

const initialState: HobbiesState = {
    rows: []
};

export default function reducer(
    state: HobbiesState = initialState,
    action: HobbiesActions
): HobbiesState {
    switch (action.type) {
        case ActionNames.FETCH_START:
            return state;
        case ActionNames.FETCH:
            return { rows: action.OwnedGameInfo };
        case ActionNames.FETCH_FINISH:
            return state;
        default:
            return state;
    }
}
