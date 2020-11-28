import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';
import './css/style.scss';

import Home from './pages/Home';
import Buy from './pages/Buy';
import Sales from './pages/Sales';
import Store from './pages/Store';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
      </Switch>
    </>
  );
}

export default App;
