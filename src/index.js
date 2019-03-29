import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import user from './store/reducers/user'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Firebase, { FirebaseContext } from './firebase'

const store = createStore(user)

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
