import React from 'react';

function ActionBlocks() {
  return (
    <section className="relative text-gray-700">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-10">

          {/* Items */}
          <div className="max-w-sm mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="mb-5">
                <a href="/" className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="rounded-full bg-blue-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i className="mdi mdi-cash-register text-base align-middle"></i> <span className="align-middle">Buy</span></div>
                    </div>
                    <div className="h-48"></div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">Payment Machine</h2>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionBlocks;
