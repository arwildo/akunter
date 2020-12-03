import React, { useState } from 'react';

import Header from '../partials/Header';

function Buy() {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <div className="p-18 flex flex-wrap items-center justify-center max-w-3xl mx-auto">

            {/* Blocks one */}
            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Original</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Deluxe</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Deluxe</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

            {/* Blocks two */}
            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Original</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Deluxe</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

            <a href="/" onClick={() => console.log("test")} className="md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer">
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Beef</span>
                <div className="md:flex justify-between">
                  <span className="block font-semibold text-md md:text-xl">Deluxe</span>
                  <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$28K</span>
                </div>
              </div>
            </a>

          </div>

      </main>

      {/* Shoppin cart */}
      <div className="bg-white border-t-2 w-full px-auto absolute bottom-0 rounded-t-3xl">
        <div className="relative text-gray-500 px-2 md:px-6 pb-6 mt-6">
          
            <div className="flex">

                <div className="p-2 w-12">
                  <img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" />
                </div>

                <div className="flex-auto text-md">
                    <div className="font-bold">
                      Beef Original
                    </div>
                    <div className="flex flex-row border h-8 w-24 rounded-xl relative">
                        <button
                          className="font-semibold bg-gray-400 lg:hover:bg-red-400 activate:bg-red-400 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                          onClick={decrementCount}
                        >
                          <span className="m-auto">-</span>
                        </button>

                        <input
                          className="border-gray-400 text-center bg-white w-10 text-xs md:text-base flex items-center justify-center cursor-default"
                          readOnly
                          name="custom-input-number"
                          value={count}
                        />

                        <button
                          className="font-semibold bg-gray-400 lg:hover:bg-blue-400 activate:bg-blue-400 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                          onClick={incrementCount}
                        >
                          <span className="m-auto">+</span>
                        </button>

                    </div>

                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    $12.22
                </div>
            </div>

            <div className="mb-12 justify-center flex">
                <button className="text-base bg-blue-500 text-white hover:bg-indigo-500 flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95">
                  Checkout $36.66
                </button>
            </div>

        </div>
      </div>

    </div>
  );
}

export default Buy;
