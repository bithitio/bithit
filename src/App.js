import React, { useEffect } from 'react';
import Route from './Route';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
    <div className="app-website">
      <Header />
      <Route />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
