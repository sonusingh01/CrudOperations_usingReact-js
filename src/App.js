import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Layouts/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import UserView from './users/UserView';


function App() {
  return (
      <div>
    
     
        <BrowserRouter>
        <Navbar/>
     
        
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/add" element={<AddUser/>} />
      <Route path="/user/edit/:id" element={<EditUser/>} />
      <Route path="/user/:id" element={<UserView/>} />
    </Routes>
  </BrowserRouter>
       
      </div>
  );
}

export default App;
