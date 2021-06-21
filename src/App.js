import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from './pages/Home';
//import HowtobuyPage from './pages/Howtobuy';
import ContactPage from './pages/Contact';
import PreSalePage from './pages/PreSale.js';


//---------------------------------------------------------------------------------//
function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/howtobuy" exact component={HowtobuyPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/presale" exact component={PreSalePage} />
        <noindex><Route component={NotFound} /></noindex>
      </Switch>
    </Router>
  );
}
//----------------------------------------------------------------------------------//
export default App;
