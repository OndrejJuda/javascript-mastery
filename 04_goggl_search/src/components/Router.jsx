import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Router = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate replace to='/search' />} />
        {['search', 'videos', 'news', 'image'].map((route, i) => (<Route key={i} path={`/${route}`} element={<Results />} />))}
      </Routes>
    </div>
  );
};

export default Router;