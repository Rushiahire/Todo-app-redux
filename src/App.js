import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRoutes />

    </>
  );
}

export default App;
