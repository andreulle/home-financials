import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationMenu from './component/NavigationMenu';
import App from './App';
import Blank from './component/Blank';

function AppRouter() {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/about" element={<Blank/>} />
        <Route path="/contact" element={<App/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
