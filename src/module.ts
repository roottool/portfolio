import { Action } from 'redux'

// ActionCreator
enum ActionNames {
  CLOSE = 'app/closeSideMenu',
  OPEN = 'app/openSideMenu',
}

interface OpenSideMenuAction extends Action {
  type: ActionNames.OPEN
}
export const openSideMenu = (): OpenSideMenuAction => ({
  type: ActionNames.OPEN,
})

interface CloseSideMenuAction extends Action {
  type: ActionNames.CLOSE
}

export const closeSideMenu = (): CloseSideMenuAction => ({
  type: ActionNames.CLOSE,
})

//reducer
export interface AppState {
  isOpened: boolean
}

export type AppActions = OpenSideMenuAction | CloseSideMenuAction

const initialState: AppState = {
  isOpened: false,
}

export default function reducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case ActionNames.OPEN:
      return { isOpened: true }
    case ActionNames.CLOSE:
      return { isOpened: false }
    default:
      return state
  }
}
