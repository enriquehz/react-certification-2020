import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Header from '../Header';
import VideoGrid from '../VideoGrid';
import mockedData from './mockFile.json';
// import Layout from '../Layout';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { random } from '../../utils/fns';

const { items } = mockedData;
console.log(items);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Header />
        </div>
        <div>
          <VideoGrid items={items} />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
