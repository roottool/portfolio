import { Action } from "redux";

export interface IUserOwnedGames {
    response: {
        game_count: number;
        games: [IGamesInfo];
    };
}

export interface IGamesInfo {
    appid: number;
    name: string;
    playtime_2weeks: number;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
}

// ActionCreator
export enum ActionNames {
    REQUEST_FETCH = "hobbies/requestFetchingUserOwnedGames",
    RECEIVE_FETCH = "hobbies/receiveFetchedUserOwnedGames",
    CHANGE_PAGE = "hobbies/changePage"
}

interface RequestFetchingUserOwnedGamesAction extends Action {
    type: ActionNames.REQUEST_FETCH;
}
export const requestFetchingUserOwnedGameInfo = (): RequestFetchingUserOwnedGamesAction => ({
    type: ActionNames.REQUEST_FETCH
});

interface ReceiveFetchedUserOwnedGamesAction extends Action {
    type: ActionNames.RECEIVE_FETCH;
    OwnedGameInfo: IGamesInfo[];
}

export const receiveFetchedUserOwnedGameInfo = (
    fetchData: IGamesInfo[]
): ReceiveFetchedUserOwnedGamesAction => ({
    type: ActionNames.RECEIVE_FETCH,
    OwnedGameInfo: fetchData
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
export interface HobbiesState {
    isFetching: boolean;
    rows: IGamesInfo[];
    page: number;
}

export type HobbiesActions =
    | RequestFetchingUserOwnedGamesAction
    | ReceiveFetchedUserOwnedGamesAction
    | ChangePageAction;

const initialState: HobbiesState = {
    isFetching: false,
    rows: [],
    page: 0
};

export default function reducer(
    state: HobbiesState = initialState,
    action: HobbiesActions
): HobbiesState {
    switch (action.type) {
        case ActionNames.REQUEST_FETCH:
            return {
                isFetching: true,
                rows: state.rows,
                page: state.page
            };
        case ActionNames.RECEIVE_FETCH:
            return {
                isFetching: false,
                rows: action.OwnedGameInfo,
                page: state.page
            };
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
