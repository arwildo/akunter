import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.location = "/";
  }

  render() {
    return (
      <div className="bg-white fixed bottom-0 z-20 w-full border-t border-gray-200 flex">

        {this.location === "/" ?
          <Link to="/" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-newspaper-variant-outline"></i>
              </span>
              <span className="block text-xs leading-none">Home</span>
            </div>
          </Link> : 

          <Link to="/" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-newspaper-variant-outline"></i>
              </span>
              <span className="block text-xs leading-none">Home</span>
            </div>
          </Link> 
        }

        {this.location === "/order" ?
          <Link to="/order" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
            <div className="text-center"> <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-cash-register"></i>
              </span>
              <span className="block text-xs leading-none">Order</span>
            </div>
          </Link> : <Link to="/order" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
            <div className="text-center"> <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-cash-register"></i>
              </span>
              <span className="block text-xs leading-none">Order</span>
            </div>
          </Link>
        }

        {this.location === "/pay" ?
          <Link to="/pay" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
            <div className="text-center"> <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-cart-plus"></i>
                <p
                    className="absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight">
                    <span aria-hidden
                      className="absolute inset-0 bg-red-500 opacity-50 rounded-full">
                    </span>
                    <span className="relative">{this.props.items.length}</span>
                </p>
              </span>
              <span className="block text-xs leading-none">Pay</span>
            </div>
          </Link> : <Link to="/pay" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
            <div className="text-center"> <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-cart-plus"></i>
                <p
                    className="absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight">
                    <span aria-hidden
                      className="absolute inset-0 bg-red-500 opacity-50 rounded-full">
                    </span>
                    <span className="relative">{this.props.items.length}</span>
                </p>
              </span>
              <span className="block text-xs leading-none">Pay</span>
            </div>
          </Link>
        }

        {this.location === "/sales" ?
          <Link to="/sales" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-chart-box-outline"></i>
              </span>
              <span className="block text-xs leading-none">Sales</span>
            </div>
          </Link> : <Link to="/sales" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-chart-box-outline"></i>
              </span>
              <span className="block text-xs leading-none">Sales</span>
            </div>
          </Link>
        }

        {this.location === "/store" ?
          <Link to="/store" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-store"></i>
              </span>
              <span className="block text-xs leading-none">Store</span>
            </div>
          </Link> : <Link to="/store" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-store"></i>
              </span>
              <span className="block text-xs leading-none">Store</span>
            </div>
          </Link>
        }

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.addedItems
  }
}

export default connect(mapStateToProps)(Header)
