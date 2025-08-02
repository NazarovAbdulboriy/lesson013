import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './pages/Movie'
import Country from './pages/Country'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/country" element={<Country />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App