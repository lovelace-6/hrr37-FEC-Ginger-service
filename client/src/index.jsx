import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Authors = () => {
  console.log('index.jsx line 7')
  return (
    <Switch>
        <Route path="/books/:id" component={App}/>
        {/* <Route path="/books/:id/a/:authorId" component={App}/>
        <Route path="/" component={App}/> */}
    </Switch>
  )
}


ReactDOM.render((
  <Router>
    <Authors />
  </Router>
), document.getElementById('authors'));
