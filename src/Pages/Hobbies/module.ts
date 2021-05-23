import { Action } from 'redux'

export interface IUserOwnedGames {
  response: {
    game_count: number
    games: [IGamesInfo]
  }
}

export interface IGamesInfo {
  appid: number
  has_community_visible_stats: boolean
  img_icon_url: string
  img_logo_url: string
  name: string
  playtime_2weeks: number
  playtime_forever: number
}

// ActionCreator
export enum ActionNames {
  CHANGE_PAGE = 'hobbies/changePage',
  RECEIVE_FETCH = 'hobbies/receiveFetchedUserOwnedGames',
  REQUEST_FETCH = 'hobbies/requestFetchingUserOwnedGames',
}

interface RequestFetchingUserOwnedGamesAction extends Action {
  type: ActionNames.REQUEST_FETCH
}
export const requestFetchingUserOwnedGameInfo =
  (): RequestFetchingUserOwnedGamesAction => ({
    type: ActionNames.REQUEST_FETCH,
  })

export interface ReceiveFetchedUserOwnedGamesAction extends Action {
  OwnedGameInfo: IGamesInfo[]
  type: ActionNames.RECEIVE_FETCH
}

export const receiveFetchedUserOwnedGameInfo = (
  fetchData: IGamesInfo[]
): ReceiveFetchedUserOwnedGamesAction => ({
  OwnedGameInfo: fetchData,
  type: ActionNames.RECEIVE_FETCH,
})

interface ChangePageAction extends Action {
  page: number
  type: ActionNames.CHANGE_PAGE
}

export const changePage = (page: number): ChangePageAction => ({
  page: page,
  type: ActionNames.CHANGE_PAGE,
})

//reducer
export interface HobbiesState {
  isFetching: boolean
  page: number
  rows: IGamesInfo[]
  rowsPerPage: number
}

export type HobbiesActions =
  | RequestFetchingUserOwnedGamesAction
  | ReceiveFetchedUserOwnedGamesAction
  | ChangePageAction

const initialState: HobbiesState = {
  isFetching: false,
  page: 0,
  rows: [],
  rowsPerPage: 5,
}

export default function reducer(
  state: HobbiesState = initialState,
  action: HobbiesActions
): HobbiesState {
  switch (action.type) {
    case ActionNames.REQUEST_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case ActionNames.RECEIVE_FETCH:
      return {
        ...state,
        isFetching: false,
        rows: action.OwnedGameInfo,
      }
    case ActionNames.CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      }
    default:
      return state
  }
}
