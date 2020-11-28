import React from 'react';

import Header from '../partials/Header';
import Cashier from '../partials/Cashier';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Cashier />

      </main>

      {/*  Site footer */}
    </div>
  );
}

export default Home;
