import React, {useState} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebaseConfig';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup'

import userContext from './context/context';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

initializeApp(firebaseConfig)
const App = () => {
  const [user, setUser] = useState(null);
  return(
    <Router>
      <ToastContainer />
      <userContext.Provider value={{user, setUser}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </Router>
  )
}

export default App;
