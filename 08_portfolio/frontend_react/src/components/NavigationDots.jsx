import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {
        ['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, i) => (
          <a
            className='app__navigation-dot'
            key={`${item}_${i}`}
            href={`#${item}`}
            style={active === item ? { backgroundColor: '#313bac' } : {}}
          />
        ))
      }
    </div>
  );
};

export default NavigationDots;