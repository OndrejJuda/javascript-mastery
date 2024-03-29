import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      px='20px'
      sx={
        {
          gap: { sm: '122px', xs: '40px' },
          mt: { sm: '32px', xs: '20px' },
          justifyContent: 'none'
        }
      }
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='center'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid #ff2625' }}>
          <Typography>Home</Typography>
        </Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#3a1212' }}>
          <Typography>Exercises</Typography>
        </a>
      </Stack>
    </Stack >
  );
};

export default Navbar;