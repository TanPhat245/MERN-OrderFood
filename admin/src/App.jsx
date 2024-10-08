import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slidebar from './components/Slidebar/Slidebar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import Add from './pages/Add/Add'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://mern-orderfood-backend.onrender.com";
  return (
    <div>
    <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Slidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
