import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import App from './App'
import { openSideMenu, closeSideMenu } from './module'
import { ReduxAction, ReduxState } from './store'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public openSideMenu(): void {
    this.dispatch(openSideMenu())
  }

  public closeSideMenu(): void {
    this.dispatch(closeSideMenu())
  }
}

export default connect(
  (state: ReduxState) => ({ router: state.router, value: state.app }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch),
  })
)(App)
