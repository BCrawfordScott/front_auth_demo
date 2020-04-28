// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../frontend/components/app.jsx'
import configureStore from '../frontend/store/store'

const preloadedState = {
  ui: {
    currentUser: {
      id: null,
      username: null,
      email: null,
    },
    authToken: localStorage.getItem('credentials'),
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore(preloadedState)

  //TESTING//
  window.store = store;
  //TESTING//
  ReactDOM.render(<App store={store} />, root);
})
