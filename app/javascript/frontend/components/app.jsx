import React from 'react';
import { Provider } from 'react-redux';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <h1>Hello from the App</h1>
    </Provider>
  );
};

export default App;