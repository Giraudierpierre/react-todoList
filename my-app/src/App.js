import React from 'react';
import './App.css';
import List from './components/organisms/List';
import ListItem from './components/organisms/ListItem';
import CreateListItem from './components/organisms/CreateListItem';
import EditListItem from './components/organisms/EditListItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* Link */
} from "react-router-dom";
import HeaderBar from './components/molecules/HeaderBar';

function App() {
  return (
      <Router>
        <HeaderBar />
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/list/:id">
            <ListItem />
          </Route>
          <Route path="/create" exact>
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
