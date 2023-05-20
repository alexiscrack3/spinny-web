import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import Routes from '../Routes';
import Layout from '../../pages/Layout';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
