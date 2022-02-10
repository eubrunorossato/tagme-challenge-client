import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
