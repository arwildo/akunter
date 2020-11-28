import React from 'react';

import Header from '../partials/Header';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <h1>Store</h1>

      </main>

      {/*  Site footer */}
    </div>
  );
}

export default Home;
