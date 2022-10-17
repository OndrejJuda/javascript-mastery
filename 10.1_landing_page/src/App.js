import React from 'react';
import assets from './assets';
import { Features, Download, SectionWrapper } from './components';

const App = () => {
  return (
    <>
      <SectionWrapper
        title='Your own store of Nifty NFTs. Start Selling & Growing'
        description='Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
    </>
  );
};

export default App;