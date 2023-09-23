import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
//import { ShoppingCart } from './views/ShoppingCart';

const App = () => {
	return (
    <main className='overflow-hidden'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/contact' element={ <Contact />} />        
      </Routes>
    </main>
	);
};

export default App;
