import { ConnectedRouter } from 'connected-react-router'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './Container'
import rootSaga from './sagas'
import * as serviceWorker from './serviceWorker'
// components
// redux, redux-saga関連
import store, { history, sagaMiddleware } from './store'

// Saga を起動する
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
