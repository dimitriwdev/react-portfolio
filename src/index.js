import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loader from './components/Loader';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import "./i18next";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode >,
  document.getElementById('root')
);
