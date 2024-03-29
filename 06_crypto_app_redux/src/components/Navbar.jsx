import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../assets/cryptocurrency.png';

const menuItems = [
  { key: 'home', icon: <HomeOutlined />, label: <Link to='/'>Home</Link> },
  { key: 'crypto', icon: <FundOutlined />, label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link> },
  { key: 'exchanges', icon: <MoneyCollectOutlined />, label: <Link to='/exchanges'>Exchanges</Link> },
  { key: 'news', icon: <BulbOutlined />, label: <Link to='/news'>News</Link> },
];

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'>

        </Button> */}
      </div>
      <Menu theme='dark' items={menuItems} />
    </nav>
  );
};

export default Navbar;