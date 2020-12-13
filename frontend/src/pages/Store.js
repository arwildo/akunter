import React, { useRef } from 'react';
import { LineChart } from '@opd/g2plot-react';

function Store() {
  const config: LineChartProps = {
    height: 350,
    autoFit: true,
    xField: 'year',
    yField: 'value',
    smooth: true,
    data: [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 11 },
    ],
  }

  const chartRef = useRef();

  return (
    <div className="flex max-w-5xl mx-auto items-center min-h-screen text-gray-800">
      <div className="p-1 w-full">
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-6">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                <i className="mdi mdi-white-balance-sunny align-middle text-2xl"></i>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Today</div>
                <div className="font-bold text-lg">$ 320k</div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <i className="mdi mdi-calendar-month align-middle text-2xl"></i>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Month</div>
                <div className="font-bold text-lg">$ 1082k</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 align-center item-center text-center">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">

              <LineChart {...config} chartRef={chartRef} />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Store;
