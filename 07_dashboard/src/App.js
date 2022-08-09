import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Line, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4 z-[1000]'>
        <TooltipComponent content='Settings' position='Top' >
          <button
            type='button'
            className='text-3xl p-3 hover:drop-shadow-xl text-white rounded-full'
            style={{ background: 'blue' }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {
        activeMenu
          ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          )
          : (
            <div className='w-0 dark:bg-secondary-dash-bg'>
              <Sidebar />
            </div>
          )
      }
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-[2]'}`
      }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
        <div>
          <ThemeSettings />
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerce' element={<Ecommerce />} />
            {/* Pages */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
            {/* Apps */}
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/color-picker' element={<ColorPicker />} />
            {/* Cahrts */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
