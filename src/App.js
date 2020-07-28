import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './components/Background/';
import Header from './components/Header/';
import HomePage from './pages/home';
import DetailsPage from './pages/details';
import SearchPage from './pages/search';
import ListPage from './pages/list';
import ViewAll from './pages/viewAll';
import NotFound from './pages/NotFound';
import LoginModal from './components/LoginModal';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className='container'>
        <Header openModal={openModal} />
      </div>
      <Switch>
        <Route path='/' exact>
          <Background />
          <HomePage />
        </Route>
        <Route path='/details/:id' exact>
          <DetailsPage />
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
          <NotFound />
        </Route>
      </Switch>
      <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Router>
  );
}

export default App;
