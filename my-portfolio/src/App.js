import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/Home-Page/homepage'
import ProjectsPage from './Components/Projects-Page/projects'
import AboutPage from './Components/About-Page/about'
import BlogPage from './Components/BlogPage/blog'
import ContactPage from './Components/ContactPage/contact'
import ServicePage from './Components/ServicePage/services'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/aboutme" element={<AboutPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/services" element={<ServicePage/>}/>
        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;
