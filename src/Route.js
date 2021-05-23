import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';

const Router = () => {
  const history = useHistory();
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/ico" exact component={IcoPage} />
    </div>
);
};

export default Router;
