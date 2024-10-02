// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';
import Contact from './pages/Contact';
import PostJob from './pages/PostJob';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post-job" element={<PostJob />} /> 
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
