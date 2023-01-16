import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Teams from './components/pages/Teams'
import ContactUs from './components/pages/ContactUs'
import SignUp from './components/pages/SignUp'
import T1 from './components/pages/T1/T1'
import Roster from './components/pages/T1/Roster'
import Schedule from './components/pages/T1/Schedule'
import News from './components/pages/T1/News'
import Community from './components/pages/T1/Community'
import History from './components/pages/T1/History'
import Careers from './components/pages/T1/Careers'
import Products from './components/pages/Products'
import Consulting from './components/pages/Consulting'
import Development from './components/pages/Development'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/t1' element={<T1/>} >
          <Route path='roster' element={<Roster/>} />
          <Route path='schedule' element={<Schedule/>} />
          <Route path='news' element={<News/>} />
          <Route path='community' element={<Community/>} />
          <Route path='history' element={<History/>} />
          <Route path='careers' element={<Careers/>} />
        </Route>  
        <Route path='/consulting' element={<Consulting/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/development' element={<Development/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
