import React from 'react';
import { Route, Link, Router, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './pages'
import './App.css'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <main className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </main>
      <footer className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </footer>
    </div>
  );
}

export default App;
