import React from 'react';
import { Navigation, TopBar } from '@components/Header/components';

const Header = () => {
  return (
    <header className="flex flex-col text-base font-semibold text-white">
      <TopBar />
      <Navigation />
    </header>
  );
};

export default Header;
