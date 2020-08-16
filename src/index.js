import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

import { store, persistor } from './redux/store'

toast.configure({
  autoClose: 3000,
  closeButton: false,
  hideProgressBar: true,
  position: toast.POSITION.BOTTOM_LEFT
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// <PersistGate persistor={persistor}>
// <App />
// </PersistGate>
