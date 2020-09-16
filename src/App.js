import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store'; // Como faz uso do reactotron deve ser importado depois dele, ou nao ter acesso ao saga monitor oou create enhancer

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
        <GlobalStyle/>
      </Router>
    </Provider>
  );
}

export default App;
