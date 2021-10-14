import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import News from './components/News/News';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={App} />
          <Route exact path='/news' component={News} />
          <Route exact path='/contact' component={Contact} />
        </Layout>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
