import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/game/header'
import Routes from './routes';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
