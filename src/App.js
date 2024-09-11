import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';






import React from 'react';
import Display from './Component/display/index.js';
import Create from './Component/Create/index.js';
import Update from './Component/Update/index.js';
import View from './Component/View/index.js';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
      <Routes>
        <Route exact path='/'  element={<Display/>}/>
        <Route exact path='/Create'  element={<Create/>}/>
        <Route exact path='/Update/:id'  element={<Update/>}/>
        <Route exact path='/View/:id'  element={<View/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
