import React, { useState } from 'react';
import { Footer, Navbar, Router } from './components';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Router />
        <Footer />
      </div>
    </div>
  );
};

export default App;