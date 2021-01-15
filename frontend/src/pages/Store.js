import React, { Component } from 'react';
import axios from 'axios';
import { Chart, LineAdvance } from 'bizcharts';

import { demoMode as DEMO_MODE, demoData } from '../Demo';
import ItemChart from '../partials/ItemChart';


class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetch : [],
      dataPlot: [],
      prices : [22, 32, 44, 20, 28, 30],
      todayIncomes : 0,
      monthIncomes : 0,
      incomesLast30Days : []
    };
    this.d = new Date();
    this.dformat = [this.d.getDate(),
                this.d.getMonth()+1,
                this.d.getFullYear()].join('-');
    this.mformat = [this.d.getMonth()+1,
                this.d.getFullYear()].join('-');
  }

  componentDidMount() {
    this.refreshList();
  }

  async refreshList() {
    if (DEMO_MODE) {
      const response = await demoData;
      this.setState({ dataFetch: response });
    }
    else {
      const response = await axios.get("/api/akunters/");
      this.setState({ dataFetch: response.data });
    }

    this.getIncomes();
    this.plotData();
  };


  // Get incomes total for day and month
  getIncomes = () => {
    let todaySum = 0;
    let monthSum = 0;

    const calDayMonth = (i) => {
      let timeData = i.time.split(" ")[0];
      let timeMonth = timeData.split("-")[1] + "-" + timeData.split("-")[2];

      if (this.dformat === timeData) {
        let thisDay = this.state.prices[i.item-1] * i.quantity;
        todaySum += thisDay;
      }

      if (this.mformat == timeMonth) {
        let thisMonth = this.state.prices[i.item-1] * i.quantity;
        monthSum += thisMonth;
      }
    };

    this.state.dataFetch.map(calDayMonth);
    this.setState({ todayIncomes: todaySum });
    this.setState({ monthIncomes: monthSum });
  };


  // Plot data to graph for daily income for the last 14 days
  plotData = () => {

    // Vars
    let last14Days;
    let dates = []
    let dateNow = new Date(Date.now() + (3600 * 1000 * 24 * 2));

    // Get all the days
    for (let day=15; day>1; day--) {
      last14Days = new Date(dateNow - day * 24 * 60 * 60 * 1000).toISOString();
      let clean = last14Days.split(":")[0];
      clean = clean.split("T")[0];
      clean = clean.split("-").reverse();

      // Convert date and month number to Int (01 -> 1)
      clean[0] = parseInt(clean[0], 10)
      clean[1] = parseInt(clean[1], 10)

      // Combine back the data
      clean = clean.join("-");
      dates.push(clean);
    }

    // Get date that has sale
    let dateThatHasData = []
    const get14DaysData = (i) => {
      let timeDate = i.time.split(" ")[0];

      dates.forEach(function (value) {
        if (timeDate == value) {
          dateThatHasData.push(value);
        }
      });

    };

    this.state.dataFetch.map(get14DaysData);
    dateThatHasData = [...new Set(dateThatHasData)];

    // Calculate the incomes
    let all14DaysSum = [];
    let prices = this.state.prices

    const calc7DaysSum = (date) => {
      let todaySum = 0;

      this.state.dataFetch.map(function (i) {
        if (i.time.split(" ")[0] == date) {
          let thisDay = prices[i.item-1] * i.quantity;
          todaySum += thisDay;
        }
        return todaySum;
      });
      all14DaysSum.push({Date: date.split("-")[0], Income: todaySum});
    };

    dateThatHasData.map(calc7DaysSum);
    this.setState({ dataPlot: all14DaysSum });
  };

  render() {
    return (
      <div className="flex max-w-5xl mx-auto items-center min-h-screen text-gray-800">
        <div className="p-1 w-full">
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-0">

            <div className="col-span-6">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-green-100 text-green-500">
                  <i className="mdi mdi-white-balance-sunny align-middle text-lg md:text-2xl"></i>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-xs md:text-sm text-gray-500">Today</div>
                  <div className="font-bold text-md md:text-lg">$ {this.state.todayIncomes}K</div>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-blue-100 text-blue-500">
                  <i className="mdi mdi-calendar-month align-middle text-2xl"></i>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-xs md:text-sm text-gray-500">Month</div>
                  <div className="font-bold text-md md:text-lg">$ {this.state.monthIncomes}K</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <div className="top-0 right-0 mr-3 w-28 py-4 px-2">
                <div className="rounded-full bg-blue-500 text-white text-xs py-1 pl-3 pr-3 leading-none"><i className="mdi mdi-chart-box-outline text-base align-middle"></i> <span className="align-middle">14 Days</span></div>
              </div>
              <div className="flex flex-row bg-white shadow-md rounded p-4">
                <div className="rounded overflow-hidden w-full md:flex">
                  <div className="flex w-full bg-white items-center">
                    <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={this.state.dataPlot} >
                      <LineAdvance
                        shape="smooth"
                        point
                        area
                        position="Date*Income"
                      />
                    </Chart>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <div className="top-0 right-0 mr-3 w-28 py-4 px-2">
                <div className="rounded-full bg-blue-500 text-white text-xs py-1 pl-3 pr-3 leading-none"><i className="mdi mdi-chart-donut text-base align-middle"></i> <span className="align-middle">14 Days</span></div>
              </div>
              <div className="flex flex-row bg-white shadow-md rounded p-4">
                <div className="rounded overflow-hidden w-full md:flex">
                  <div className="flex w-full bg-white items-center">
                    <ItemChart />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Store;
/* eslint eqeqeq: 0 */
