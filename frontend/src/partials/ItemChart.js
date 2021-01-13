import React from 'react';

function ItemChart() {
  return (
    <div className="col-span-6">
      <div className="flex flex-row bg-white shadow-sm rounded p-4">
        <div className="flex items-center justify-center flex-shrink-0 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-green-100 text-green-500">
          <i className="mdi mdi-white-balance-sunny align-middle text-lg md:text-2xl"></i>
        </div>
        <div className="flex flex-col flex-grow ml-4">
          <div className="text-xs md:text-sm text-gray-500">Today</div>
          <div className="font-bold text-md md:text-lg">$ 432K</div>
        </div>
      </div>
    </div>
  );
}

export default ItemChart;
