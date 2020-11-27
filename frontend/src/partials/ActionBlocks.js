import React from 'react';

function ActionBlocks() {
  function getDate() {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const date = new Date();
    return days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  }
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-10">

          {/* Section header */}
          <div className="mb-3">
              <h1 className="text-3xl font-bold">Today</h1>
              <p className="text-sm text-gray-500 uppercase font-bold">{getDate()}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Buy</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ActionBlocks;
