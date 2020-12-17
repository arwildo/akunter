import React, { Component } from 'react';
import axios from 'axios';
import { Chart, LineAdvance } from 'bizcharts';

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
    const response = await axios.get("/api/akunters/");
    this.setState({ dataFetch: response.data });

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


  // Plot data to graph for daily income for the last 30 days
  plotData = () => {

    // Vars
    let last30Days;
    let dates = []
    let dateNow = new Date(Date.now() + (3600 * 1000 * 24 * 2));

    // Get all the days
    for (let day=31; day>1; day--) {
      last30Days = new Date(dateNow - day * 24 * 60 * 60 * 1000).toISOString();
      let clean = last30Days.split(":")[0];
      clean = clean.split("T")[0];
      clean = clean.split("-").reverse();
      clean = clean.join("-");
      dates.push(clean);
    }

    // Get date that has sale
    let dateThatHasData = []
    const get30DayData = (i) => {
      let timeDate = i.time.split(" ")[0];

      dates.forEach(function (value) {
        if (timeDate == value) {
          dateThatHasData.push(value);
        }
      });

    };

    this.state.dataFetch.map(get30DayData);
    dateThatHasData = [...new Set(dateThatHasData)];

    // Calculate the incomes
    let all30DaysSum = [];
    let prices = this.state.prices

    const calculate30daysSum = (date) => {
      let todaySum = 0;

      this.state.dataFetch.map(function (i) {
        if (i.time.split(" ")[0] == date) {
          let thisDay = prices[i.item-1] * i.quantity;
          todaySum += thisDay;
        }
        return todaySum;
      });
      all30DaysSum.push({Date: date.split("-")[0], Income: todaySum});
    };

    dateThatHasData.map(calculate30daysSum);
    this.setState({ dataPlot: all30DaysSum });
  };

  render() {
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
                  <div className="font-bold text-lg">$ {this.state.todayIncomes}K</div>
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
                  <div className="font-bold text-lg">$ {this.state.monthIncomes}k</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
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

          </div>
        </div>
      </div>
    );
  }
}

export default Store;
/* eslint eqeqeq: 0 */
