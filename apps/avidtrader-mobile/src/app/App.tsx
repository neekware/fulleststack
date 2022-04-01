/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';

import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';

import Home from './home/home';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
};

export default App;
