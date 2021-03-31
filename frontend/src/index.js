import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import ReactGA from 'react-ga';

import App from './App';
import cartReducer from './reducers/cartReducer';

// Alert settings
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' &&
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "20rem"}}>
          <div className="mr-6 bg-blue-500 rounded px-4 py-2 text-center -ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-gray-500 text-sm">{message}</h2>
          </div>
          <div className="flex justify-end flex-1 cursor-pointer" onClick={close}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </section>
    }

    {options.type === 'success' &&
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "20rem"}}>
          <div className="mr-6 bg-green-500 rounded px-4 py-2 text-center -ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-gray-500 text-sm">{message}</h2>
          </div>
          <div className="flex justify-end flex-1 cursor-pointer" onClick={close}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </section>
    }

    {options.type === 'error' && 
      <section className="flex items-center justify-center">
        <div className="flex items-center bg-white shadow rounded-md px-2 mx-8" style={{width: "20rem"}}>
          <div className="mr-6 bg-red-500 rounded px-4 py-2 text-center -ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center">
            <h2 className="text-gray-500 text-sm">{message}</h2>
          </div>
          <div className="flex justify-end flex-1 cursor-pointer" onClick={close}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </section>
    }


  </div>
)
const options = {
  position: positions.MIDDLE_TOP,
  timeout: 5000,
  offset: '10px',
  transition: transitions.SCALE
}

// Google Analytics
ReactGA.initialize('UA-51659765-2');

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
