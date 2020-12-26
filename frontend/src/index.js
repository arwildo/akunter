import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

import App from './App';
import cartReducer from './reducers/cartReducer';

// Alert settings
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' &&
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "15rem"}}>
          <div className="mr-6 bg-blue-500 rounded px-4 py-2 text-center -ml-3">
            <svg fill="none" viewBox="0 0 20 20" className="w-6 h-6 text-white" stroke="currentColor">
              <path d="M14.38,3.467l0.232-0.633c0.086-0.226-0.031-0.477-0.264-0.559c-0.229-0.081-0.48,0.033-0.562,0.262l-0.234,0.631C10.695,2.38,7.648,3.89,6.616,6.689l-1.447,3.93l-2.664,1.227c-0.354,0.166-0.337,0.672,0.035,0.805l4.811,1.729c-0.19,1.119,0.445,2.25,1.561,2.65c1.119,0.402,2.341-0.059,2.923-1.039l4.811,1.73c0,0.002,0.002,0.002,0.002,0.002c0.23,0.082,0.484-0.033,0.568-0.262c0.049-0.129,0.029-0.266-0.041-0.377l-1.219-2.586l1.447-3.932C18.435,7.768,17.085,4.676,14.38,3.467 M9.215,16.211c-0.658-0.234-1.054-0.869-1.014-1.523l2.784,0.998C10.588,16.215,9.871,16.447,9.215,16.211 M16.573,10.27l-1.51,4.1c-0.041,0.107-0.037,0.227,0.012,0.33l0.871,1.844l-4.184-1.506l-3.734-1.342l-4.185-1.504l1.864-0.857c0.104-0.049,0.188-0.139,0.229-0.248l1.51-4.098c0.916-2.487,3.708-3.773,6.222-2.868C16.187,5.024,17.489,7.783,16.573,10.27"></path>
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-blue-500 text-lg font-bold mr-2 ">{message}</h2>
          </div>
          <button className="flex justify-end flex-1" onClick={close}>
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-red-600" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </section>
    }

    {options.type === 'success' &&
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "15rem"}}>
          <div className="mr-6 bg-green-500 rounded px-4 py-2 text-center -ml-3">
            <svg fill="none" viewBox="0 0 20 20" className="w-6 h-6 text-white" stroke="currentColor">
              <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-green-500 text-lg font-bold mr-2 ">{message}</h2>
          </div>
          <button className="flex justify-end flex-1" onClick={close}>
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-red-600" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </section>
    }

    {options.type === 'error' && 
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "15rem"}}>
          <div className="mr-6 bg-red-500 rounded px-4 py-2 text-center -ml-3">
            <svg fill="none" viewBox="0 0 20 20" className="w-6 h-6 text-white" stroke="currentColor">
              <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-red-500 text-lg font-bold mr-2 ">{message}</h2>
          </div>
          <button className="flex justify-end flex-1" onClick={close}>
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-red-600" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </section>
    }


  </div>
)
const options = {
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '10px',
  transition: transitions.SCALE
}

// Redux
const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
