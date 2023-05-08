import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import Layout from '../../pages/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
