
import './App.css';
import Navbars from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
   <BrowserRouter>
     
          <nav>
            <Navbars />
          </nav>
          <Routes>
      
            <Route  path='/' exact element={<Home/>}/>
          </Routes> 
    </BrowserRouter>
  );
}

export default App;
