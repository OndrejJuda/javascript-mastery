import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodypart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
        borderTop: bodyPart === item ? '4px solid #ff2625' : ''
      }}
    >
      <img src={Icon} alt='dumbell' styles={{ width: '40px', height: '40px' }} />
    </Stack >
  );
};

export default BodyPart;