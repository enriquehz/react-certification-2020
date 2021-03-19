import React, { useLayoutEffect } from 'react';
// import { BrowserRouter, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
import Header from '../Header';
import { random } from '../../utils/fns';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
