import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import './App.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/categories/:idCategory" element={<CategoryDetail />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
