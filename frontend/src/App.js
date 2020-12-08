import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';
import './css/style.scss';

import Home from './pages/Home';
import Order from './pages/Order';
import Pay from './pages/Pay';
import Sales from './pages/Sales';
import Store from './pages/Store';
import Header from './partials/Header';

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
          <Header />
        </Route>
        <Route path="/order">
          <Order />
          <Header />
        </Route>
        <Route path="/pay">
          <Pay timestamp={new Date().getTime().toString()}/>
          <Header />
        </Route>
        <Route path="/sales">
          <Sales />
          <Header />
        </Route>
        <Route path="/store">
          <Store />
          <Header />
        </Route>
      </Switch>
    </>
  );
}

export default App;
