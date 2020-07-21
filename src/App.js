import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AnimePage from './pages/anime';
import SearchPage from './pages/search';
import ListPage from './pages/list';
import ViewAll from './pages/viewAll';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/anime/:id' exact>
          <AnimePage />
        </Route>
        <Route path='/search/:query' exact>
          <SearchPage />
        </Route>
        <Route path='/list/:username' exact>
          <ListPage />
        </Route>
        <Route path='/viewall/:type' exact>
          <ViewAll />
        </Route>
        <Route path='*'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
