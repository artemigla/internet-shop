import React from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/content/Main';

export const App: React.FC = () => {
  
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}