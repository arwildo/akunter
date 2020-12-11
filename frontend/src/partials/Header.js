import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation().pathname;

  return (
    <div className="bg-white fixed bottom-0 z-20 w-full border-t border-gray-200 flex">

      {location === "/" ?
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

      {location === "/order" ?
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

      {location === "/pay" ?
        <Link to="/pay" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
          <div className="text-center"> <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-cart-plus"></i>
              {props.items.length > 0 && 
                <p
                    className="absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight">
                    <span aria-hidden
                      className="absolute inset-0 bg-red-500 opacity-50 rounded-full">
                    </span>
                    <span className="relative">{props.items.length}</span>
                </p>
              }
            </span>
            <span className="block text-xs leading-none">Pay</span>
          </div>
        </Link> : <Link to="/pay" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
          <div className="text-center"> <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-cart-plus"></i>
              {props.items.length > 0 && 
                <p
                    className="absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight">
                    <span aria-hidden
                      className="absolute inset-0 bg-red-500 opacity-50 rounded-full">
                    </span>
                    <span className="relative">{props.items.length}</span>
                </p>
              }
            </span>
            <span className="block text-xs leading-none">Pay</span>
          </div>
        </Link>
      }

      {location === "/sales" ?
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

      {location === "/store" ?
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

const mapStateToProps = (state)=>{
  return {
    items: state.addedItems
  }
}

export default connect(mapStateToProps)(Header)
