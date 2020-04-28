import React from 'react';
import { Provider } from 'react-redux';
import UserIndex from "../components/users/user_index";
import Header from './header/header';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Header />
      <UserIndex />
    </Provider>
  );
};

export default App;