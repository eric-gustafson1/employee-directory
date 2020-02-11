import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import TableHeader from './components/TableHeader'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Nav />
        <TableHeader />
      </Wrapper>

    </div>
  );
}

export default App;
