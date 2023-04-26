import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './main/Main';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Createpost from './pages/createPost/Createpost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<Createpost />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
