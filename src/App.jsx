import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ทำการ npm i react-router-dom แล้วเรียกใช้งาน
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import Bakery from "./components/Bakery";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="home" element={<Home />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="bakery" element={<Bakery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
