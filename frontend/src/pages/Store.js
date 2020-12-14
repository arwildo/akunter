import React from 'react';
import { Chart, LineAdvance } from 'bizcharts';

function Store() {
  const data = [
    {
      month: "Jan",
      city: "Tokyo",
      temperature: 7
    },
    {
      month: "Jan",
      city: "London",
      temperature: 3.9
    },
    {
      month: "Feb",
      city: "Tokyo",
      temperature: 13
    },
    {
      month: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      month: "Mar",
      city: "Tokyo",
      temperature: 16.5
    },
    {
      month: "Mar",
      city: "London",
      temperature: 5.7
    },
    {
      month: "Apr",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      month: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      month: "May",
      city: "Tokyo",
      temperature: 10
    },
    {
      month: "May",
      city: "London",
      temperature: 11.9
    },
    {
      month: "Jun",
      city: "Tokyo",
      temperature: 7.5
    },
    {
      month: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      month: "Jul",
      city: "Tokyo",
      temperature: 9.2
    },
    {
      month: "Jul",
      city: "London",
      temperature: 17
    },
    {
      month: "Aug",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      month: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      month: "Sep",
      city: "Tokyo",
      temperature: 9.3
    },
    {
      month: "Sep",
      city: "London",
      temperature: 14.2
    },
    {
      month: "Oct",
      city: "Tokyo",
      temperature: 8.3
    },
    {
      month: "Oct",
      city: "London",
      temperature: 10.3
    },
    {
      month: "Nov",
      city: "Tokyo",
      temperature: 8.9
    },
    {
      month: "Nov",
      city: "London",
      temperature: 5.6
    },
    {
      month: "Dec",
      city: "Tokyo",
      temperature: 5.6
    },
    {
      month: "Dec",
      city: "London",
      temperature: 9.8
    }
  ];

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

          <div className="col-span-12 sm:col-span-6">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">

              <div className="rounded overflow-hidden w-full md:flex">
                <div className="flex w-full bg-white items-center">
                  <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
                      <LineAdvance
                        shape="smooth"
                        point
                        area
                        position="month*temperature"
                        color="city"
                      />
                    </Chart>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Store;
