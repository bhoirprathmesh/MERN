import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/service" element={ <Service /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/login" element={ <Login /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App