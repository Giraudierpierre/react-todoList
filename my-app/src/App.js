import React from 'react';
import './App.css';
import List from './components/organisms/List';
import CreateListItem from './components/organisms/CreateListItem';
import EditListItem from './components/organisms/EditListItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Route path="/create" exact>
            <CreateListItem />
          </Route>
          <Route path="/item/:id"> 
            <EditListItem />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
