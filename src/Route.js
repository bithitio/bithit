import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import HomePage from './pages/Home';
import HowtobuyPage from './pages/Howtobuy';
import ContactPage from './pages/Contact';
import IcoPage from './pages/Ico';

const Router = () => {
  const history = useHistory();
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/howtobuy" exact component={HowtobuyPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/ico" exact component={IcoPage} />
    </div>
);
};

export default Router;
