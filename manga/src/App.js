import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import List from './components/List';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddDetails from './components/AddPage';
import EditDetails from './components/Edit';

function App() {
  



  return ( 
    <div className="App">

      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/main" element={<Home/>}></Route>
        <Route path="/list" element={<List/>}/>
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/add" element={<AddDetails/>}/>
        <Route path="/update/:id" element={<EditDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
