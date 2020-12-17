import React from 'react';
import { Link } from 'react-router-dom';

function ActionBlocks() {
  function getDate() {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const date = new Date();
    return days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  }

  const divImg1 = {
    backgroundImage: "url(" + require("../images/cashier.jpg") + ")",
    backgroundSize: "cover",
  }
  const divImg2 = {
    backgroundImage: "url(" + require("../images/sales.jpg") + ")",
    backgroundSize: "cover",
  }
  const divImg3 = {
    backgroundImage: "url(" + require("../images/store.jpg") + ")",
    backgroundSize: "cover",
  }

  return (
    <section className="relative text-gray-700">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-10">

          {/* Section header */}
          <div className="mb-3">
              <h1 className="text-3xl font-bold">Today</h1>
              <p className="text-sm text-gray-400 uppercase font-bold">{getDate()}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="mb-5">
                <Link to="/order" className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" style={divImg1}>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="rounded-full bg-blue-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i className="mdi mdi-cash-register text-base align-middle"></i> <span className="align-middle">Buy</span></div>
                    </div>
                    <div className="h-48"></div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">Order</h2>
                </Link>
            </div>
            
            {/* 2nd item */}
            <div className="mb-5">
                <Link to="/sales" className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" style={divImg2}>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="rounded-full bg-green-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i className="mdi mdi-text-box-check-outline text-base align-middle"></i> <span className="align-middle">Sales</span></div>
                    </div>
                    <div className="h-48"></div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">Sales List</h2>
                </Link>
            </div>

            {/* 3th item */}
            <div className="mb-5">
                <Link to="/store" className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" style={divImg3}>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="rounded-full bg-yellow-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i className="mdi mdi-store text-base align-middle"></i> <span className="align-middle">Store</span></div>
                    </div>
                    <div className="h-48"></div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">Store Settings</h2>
                </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ActionBlocks;
