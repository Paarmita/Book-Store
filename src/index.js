
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ROUTER
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

// STORE
import { Provider }        from 'react-redux';
import { combineReducers } from 'redux'
import { rootReducer }     from './reducers';
import { createStore }       from 'redux';

//ROUTES
import Home  from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book  from './components/book/BookPage'
import App   from './App';


const store = createStore(rootReducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
     <Switch>
       
        <Route path="/about"  component={About}/>
        <Route path="/books"  component={Book} />

        <Route path="/"       component={App} />
        <Route exact path="/" component={Home} />

     </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)