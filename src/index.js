import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Booklist from "./Componentes/Booklist/Booklist";
import BookDetails from "./Componentes/BookDetails/bookdetails";
import { AppProvider } from './context.';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='About' element={<About />} />
          <Route path='Book' element={<Booklist />} />
          <Route path='/Book/:id' element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);