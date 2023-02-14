import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import CategorizedList from './component/CategoryList';
import {fetchCategorizedList } from './gapi/GAPI';



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCategorizedList().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
       {data.map(categoryItem =>(
         <CategorizedList categorizedList={categoryItem} />
       ))}
    </div>
  );
}

export default App;