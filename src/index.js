import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import ScrollToTop from './Helper/ScrollToTop'

const history = createBrowserHistory()

ReactDOM.render(
  (<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <App />
    </ScrollToTop>

  </Router>), document.getElementById('root'));
