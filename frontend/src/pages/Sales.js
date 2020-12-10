import React, { Component } from 'react';
import axios from 'axios';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/akunters/")
      .then(res => this.setState({ itemList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    let menus = ["Beef Original", "Beef Deluxe", "Beef Madness", "Chicken Original", "Chicken Crispy", "Chicken Deluxe"]
    let prices = [22, 32, 44, 20, 28, 30]
    let pulledItems = this.state.itemList ?
      (
        this.state.itemList.reverse().map(item=>{
          return(
            <tbody key={item.id}>
              <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                          <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                  {item.id}
                              </p>
                          </div>
                      </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                              {menus[item.item]}
                          </p>
                      </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.quantity}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">${prices[item.item]}K</span>
                      </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item.time}
                    </p>
                  </td>
              </tr>
          </tbody>
        )
      })
      ) : (
        <tbody>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <div className="ml-3">
                <button onClick={() => console.log(this.state.itemList)}>button</button>
                  <p className="text-gray-900 whitespace-no-wrap">
                      Empty
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      )
    return (
      <div className="antialiased">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-2">
            <div className="-mx-4 px-2 sm:px-8 py-2 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">

                      <thead>
                          <tr>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  No
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Item
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Q
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Price
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Time
                              </th>
                          </tr>
                      </thead>

                      {pulledItems}

                  </table>
                  <div
                      className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">

                      <span className="text-xs xs:text-sm text-gray-900">
                          1 to 4 of 50 Data
                      </span>

                    <div className="inline-flex mt-2 xs:mt-0">
                        <button
                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                            Prev
                        </button>
                        <button
                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                            Next
                        </button>
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

export default Sales;
