import React from 'react';
import './App.css';
import List from './components/organisms/List';
import ListItem from './components/organisms/ListItem';
import CreateListItem from './components/organisms/CreateListItem';
import EditListItem from './components/organisms/EditListItem';
import HeaderBar from './components/molecules/HeaderBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <HeaderBar />
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
    </div>
  );
}

export default App;
