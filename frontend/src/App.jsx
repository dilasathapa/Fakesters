import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Chat from './Components/Chat';
import "./App.css"
import React from 'react';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>

          <Route path='/' Component={Home}/>
          <Route path='/chats' Component={Chat}/>
        </Routes>
      </div>
    </>
  )
}

export default App;