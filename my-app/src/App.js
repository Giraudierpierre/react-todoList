import React from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import CreateListItem from './components/CreateListItem';
import EditListItem from './components/EditListItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <List />
        </Route>
        <Route path="/:id">
          <ListItem />
        </Route>
        <Route path="/create">
          <CreateListItem />
        </Route>
        <Route path="/edit/:id">
          <EditListItem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
