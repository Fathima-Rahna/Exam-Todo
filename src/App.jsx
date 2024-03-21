import React from 'react';
import { Provider } from 'react-redux';

import Store from '../Store'; 

import Todo from './Todo';

const App = () => {
  return (
    <Provider store={Store}> 
      <Todo />
    </Provider>
  );
};

export default App;
