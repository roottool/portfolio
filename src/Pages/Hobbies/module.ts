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
    FETCH_FINISH = "hobbies/finishFetchedUserOwnedGames",
    CHANGE_PAGE = "hobbies/changePage"
}

interface StartFetchingUserOwnedGamesAction extends Action {
    type: ActionNames.FETCH_START;
}
export const startFetchingOwnedGameInfo = (): StartFetchingUserOwnedGamesAction => ({
    type: ActionNames.FETCH_START
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
}

export const finishFetchedOwnedGameInfo = (): FinishFetchedUserOwnedGamesAction => ({
    type: ActionNames.FETCH_FINISH
});

interface ChangePageAction extends Action {
    type: ActionNames.CHANGE_PAGE;
    page: number;
}

export const changePage = (page: number): ChangePageAction => ({
    type: ActionNames.CHANGE_PAGE,
    page: page
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
    isFetching: boolean;
    rows: IGamesInfo[];
    page: number;
}

export type HobbiesActions =
    | StartFetchingUserOwnedGamesAction
    | FetchUserOwnedGamesAction
    | FinishFetchedUserOwnedGamesAction
    | ChangePageAction;

const initialState: HobbiesState = {
    isFetching: true,
    rows: [],
    page: 0
};

export default function reducer(
    state: HobbiesState = initialState,
    action: HobbiesActions
): HobbiesState {
    switch (action.type) {
        case ActionNames.FETCH_START:
            return state;
        case ActionNames.FETCH:
            return {
                isFetching: state.isFetching,
                rows: action.OwnedGameInfo,
                page: state.page
            };
        case ActionNames.FETCH_FINISH:
            return { isFetching: false, rows: state.rows, page: state.page };
        case ActionNames.CHANGE_PAGE:
            return {
                isFetching: state.isFetching,
                rows: state.rows,
                page: action.page
            };
        default:
            return state;
    }
}
