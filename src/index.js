import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

// import routes from './routes';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import App from './App';

const store = configureStore();


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
     <Switch>
      <Route path="/" component={App}>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={Book}></Route>
      </Route>
     </Switch>
    </Router>
  </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)