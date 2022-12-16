import './App.css';
import React from 'react';
import { Provider } from 'react-redux'; //provider will provide redux to our react application
import store from './components/redux/store'; //import Provider and store
import CakeComponent from './components/CakeComponent';
import UseSelectorHook from './components/UseSelectorHook';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeComponent /> */}
        <UseSelectorHook/>
      </div>
    </Provider>
  );
}

export default App;
