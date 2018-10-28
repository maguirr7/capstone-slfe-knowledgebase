import React from 'react';
import { render }from 'react-dom';
import './styles/main.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import explore from './components/Pages/explore.jsx';
import about from './components/Pages/about';
import result from './components/Pages/result.jsx';
import solution from './components/Pages/exampleSolution.jsx';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Browse from './components/Pages/Browse';
import DataTest from './components/Pages/DataTest';
//import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <Provider store={store}>
    <Switch>

      <Route path='/browse' component={Browse} />
      <Route path='/about' component={about} />
        <Route exact path='/' component={explore}/>

      <Route path='/result' component={result} />
      <Route path='/solution' component={solution} />

    </Switch>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
//registerServiceWorker();
