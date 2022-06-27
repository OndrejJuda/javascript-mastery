import React, { useState } from 'react';
import { Footer, Navbar, Routes } from './components';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false); // window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;