import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header />
     <Route exact={true} path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
