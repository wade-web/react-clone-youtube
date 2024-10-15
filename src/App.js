import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePages';
import VideoPlayer from './components/VideoPlayer'
// import VideoPage from './pages/VideoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
        
            <Route path="/video/:videoId" element={<VideoPlayer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
