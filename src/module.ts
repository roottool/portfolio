import { Action } from "redux";

// ActionCreator
enum ActionNames {
    OPEN = "root/openSideMenu",
    CLOSE = "root/closeSideMenu"
}

interface OpenSideMenuAction extends Action {
    type: ActionNames.OPEN;
    isOpened: boolean;
}
export const openSideMenu = (): OpenSideMenuAction => ({
    type: ActionNames.OPEN,
    isOpened: true
});

interface CloseSideMenuAction extends Action {
    type: ActionNames.CLOSE;
    isOpened: boolean;
}

export const closeSideMenu = (): CloseSideMenuAction => ({
    type: ActionNames.CLOSE,
    isOpened: false
});

//reducer
export interface AppState {
    isOpened: boolean;
}

export type AppActions = OpenSideMenuAction | CloseSideMenuAction;

const initialState: AppState = {
    isOpened: false
};

export default function reducer(
    state: AppState = initialState,
    action: AppActions
): AppState {
    switch (action.type) {
        case ActionNames.OPEN:
            return { isOpened: true };
        case ActionNames.CLOSE:
            return { isOpened: false };
        default:
            return state;
    }
}
