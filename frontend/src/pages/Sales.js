import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import demoDataSales from './Demo';


const DEMO_MODE = true;


class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0
    };

    this.handlePageClick = this
        .handlePageClick
        .bind(this);

    this.menus = ["Beef Original", "Beef Deluxe", "Beef Madness", "Chicken Original", "Chicken Crispy", "Chicken Deluxe"]
    this.prices = [22, 32, 44, 20, 28, 30]
  }

  receivedData() {
    if (DEMO_MODE) {
      const data = demoDataSales;
      const slice = data.reverse().slice(this.state.offset, this.state.offset + this.state.perPage);
      const postData = slice.map(item => <tbody key={item.id}>
          <tr>
              <td className="px-3 py-3 sm:px-12 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                      <p className="text-gray-600 whitespace-no-wrap">
                          {this.menus[item.item - 1].split(' ')[0]}
                          <br />
                          <span className="font-semibold">
                            {this.menus[item.item - 1].split(' ')[1]}
                          </span>
                      </p>
                  </div>
              </td>
              <td className="px-1 py-3 sm:py-0 border-b border-gray-200 bg-white text-sm">
                  <span
                      className="relative inline-block px-2 py-1 font-semibold text-blue-900 leading-tight">
                      <span aria-hidden
                          className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                      <span className="relative">{item.quantity}</span>
                  </span>
              </td>
              <td className="px-1 py-3 sm:px-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-600 whitespace-no-wrap">{this.prices[item.item - 1]}K</p>
              </td>
              <td className="px-1 py-3 sm:px-1 border-b border-gray-200 bg-white text-sm">
                  <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span className="relative">{(this.prices[item.item - 1]) * (item.quantity)}K</span>
                  </span>
              </td>
              <td className="px-1 py-3 sm:px-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  {/* Date and month */}
                  {item.time.split(' ')[0].split('-')[0] + '-' +item.time.split(' ')[0].split('-')[1] + '-'}
                  {/* Last two digit of the year */}
                  {item.time.split(' ')[0].split('-')[2][2]}{item.time.split(' ')[0].split('-')[2][3]}
                  <br />
                  <span className="font-semibold">
                    {item.time.split(' ')[1]}
                  </span>
                </p>
              </td>
          </tr>
        </tbody>)

      this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          
          postData
    });

    }
    else {
      axios
        .get("/api/akunters/")
        .then(res => {
          const data = res.data;
          const slice = data.reverse().slice(this.state.offset, this.state.offset + this.state.perPage)
          const postData = slice.map(item => <tbody key={item.id}>
              <tr>
                  <td className="px-3 py-3 sm:px-12 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                          <p className="text-gray-600 whitespace-no-wrap">
                              {this.menus[item.item - 1].split(' ')[0]}
                              <br />
                              <span className="font-semibold">
                                {this.menus[item.item - 1].split(' ')[1]}
                              </span>
                          </p>
                      </div>
                  </td>
                  <td className="px-1 py-3 sm:py-0 border-b border-gray-200 bg-white text-sm">
                      <span
                          className="relative inline-block px-2 py-1 font-semibold text-blue-900 leading-tight">
                          <span aria-hidden
                              className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                          <span className="relative">{item.quantity}</span>
                      </span>
                  </td>
                  <td className="px-1 py-3 sm:px-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">{this.prices[item.item - 1]}K</p>
                  </td>
                  <td className="px-1 py-3 sm:px-1 border-b border-gray-200 bg-white text-sm">
                      <span
                          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">{(this.prices[item.item - 1]) * (item.quantity)}K</span>
                      </span>
                  </td>
                  <td className="px-1 py-3 sm:px-2 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600 whitespace-no-wrap">
                      {/* Date and month */}
                      {item.time.split(' ')[0].split('-')[0] + '-' +item.time.split(' ')[0].split('-')[1] + '-'}
                      {/* Last two digit of the year */}
                      {item.time.split(' ')[0].split('-')[2][2]}{item.time.split(' ')[0].split('-')[2][3]}
                      <br />
                      <span className="font-semibold">
                        {item.time.split(' ')[1]}
                      </span>
                    </p>
                  </td>
              </tr>
            </tbody>)

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              
              postData
          })
        });
    }
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });
  };


  componentDidMount() {
    this.receivedData();
  }

  render() {
    return (
      <div className="antialiased">
        <div className="container mx-auto sm:px-8">
          <div className="py-0 sm:py-2">
            <div className="sm:px-8 py-2 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">

                      <thead>
                          <tr>
                              <th
                                  className="px-3 py-2 sm:px-12 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Item
                              </th>
                              <th
                                  className="px-3 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Q
                              </th>
                              <th
                                  className="px-1 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Price
                              </th>
                              <th
                                  className="px-3 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Total
                              </th>
                              <th
                                  className="px-2 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Time
                              </th>
                          </tr>
                      </thead>

                    {this.state.postData}

                  </table>

                  <div className="p-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                      <ReactPaginate
                          previousLabel={"Prev"}
                          nextLabel={"Next"}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={this.state.pageCount}
                          marginPagesDisplayed={1}
                          pageRangeDisplayed={1}
                          onPageChange={this.handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                      />
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
