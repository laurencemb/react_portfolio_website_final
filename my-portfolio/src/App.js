import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/Home-Page/homepage'
import ProjectsPage from './Components/Projects-Projects/projects'
import AboutPage from './Components/About-Page/about'
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/aboutme" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;
