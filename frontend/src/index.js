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
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
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
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
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
      <Router>
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
