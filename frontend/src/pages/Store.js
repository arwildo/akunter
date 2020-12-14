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
      todayIncomes : 0
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  async refreshList() {
    const response = await axios.get("/api/akunters/");
    this.setState({ dataFetch: response.data });

    // Executes calculate functions
    this.getTodayIncomes();
  };


  getTodayIncomes = () => {
    let todaySum = 0

    const d = new Date(),
      dformat = [d.getDate(),
                d.getMonth()+1,
                d.getFullYear()].join('-');

    console.log(dformat);
    console.log(this.state.dataFetch);

    const calTotal = (i) => {

      let timeData = i.time.split(" ")[0];

      if (dformat === timeData) {
        let income = this.state.prices[i.item-1] * i.quantity;
        todaySum += income;
      }
    }

    this.state.dataFetch.map(calTotal);
    this.setState({ todayIncomes: todaySum });
  }

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
                  <div className="font-bold text-lg">$ 1082k</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <div className="flex flex-row bg-white shadow-md rounded p-4">
                <div className="rounded overflow-hidden w-full md:flex">
                  <div className="flex w-full bg-white items-center">
                    <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={this.state.dataFetch} >
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
              <button onClick={() => console.log(this.state.dataFetch)}>test123</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Store;
