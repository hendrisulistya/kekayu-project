import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Footer from "./components/Footer"
import Gallery from "./Pages/Gallery"
import Teams from "./Pages/Teams"

function App(){
  return(
    <Router>
    <Navbar />
    <div className='container-lg-auto p-2'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
<Footer />
    </Router>
  )
  
}

export default App;