import localStorage from 'localStorage/localStorage';
import React from 'react';
import RouterView from './router';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const localStore = new localStorage();
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterView localStore={localStore} />;
      </BrowserRouter>
    </>
  );
}

export default App;
