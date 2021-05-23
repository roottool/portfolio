import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ReduxAction, ReduxState } from '../../store'
import {
  IGamesInfo,
  requestFetchingUserOwnedGameInfo,
  receiveFetchedUserOwnedGameInfo,
  changePage,
} from './module'

import Hobbies from './index'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public requestFetchingUserOwnedGameInfo(): void {
    this.dispatch(requestFetchingUserOwnedGameInfo())
  }

  public receiveFetchedUserOwnedGameInfo(userOwnedGamesnfo: IGamesInfo[]): void {
    this.dispatch(receiveFetchedUserOwnedGameInfo(userOwnedGamesnfo))
  }

  public changeOwnedGameInfoPage(page: number): void {
    this.dispatch(changePage(page))
  }
}

export default connect(
  (state: ReduxState) => ({ router: state.router, value: state.hobbies }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch),
  })
)(Hobbies)
