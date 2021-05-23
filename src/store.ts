import {
  RouterState,
  routerMiddleware,
  connectRouter,
  RouterAction,
} from 'connected-react-router'
import { createBrowserHistory } from 'history'
import {
  Action,
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

// redux関連
import hobbies, { HobbiesActions, HobbiesState } from './Pages/Hobbies/module'
import app, { AppActions, AppState } from './module'

const composeEnhancer: typeof compose =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()

export default createStore(
  combineReducers({
    app,
    hobbies,
    router: connectRouter(history),
  }),
  composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

export type ReduxState = {
  app: AppState
  hobbies: HobbiesState
  router: RouterState
}

export type ReduxAction = Action | RouterAction | AppActions | HobbiesActions
