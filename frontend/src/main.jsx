import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom"
import ChatProvider from './context/chatProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);
