import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/Home-Page/homepage'
import ProjectsPage from './Components/Projects-Page/projects'
import AboutPage from './Components/About-Page/about'
import ContactPage from './Components/ContactPage/contact'
import ServicePage from './Components/ServicePage/services'
import WebDesignPage from './Components/ServicePages/serviceswebdes'
import WebDevelopmentPage from './Components/ServicePages/serviceswebdev'
import UXPage from './Components/ServicePages/serviceswebux'
import BrandingPage from './Components/ServicePages/serviceswebbrand'
import WebsiteSupportPage from './Components/ServicePages/serviceswebsup'
import SavvyCornerPage from './Components/Projects/SavvyCornerPage'
import SpokePage from './Components/Projects/SpokePage';
import ShredItPage from './Components/Projects/ShredItPage';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/aboutme" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/serviceswebdesign" element={<WebDesignPage/>}/>
          <Route path="/serviceswebdevelopment" element={<WebDevelopmentPage/>}/>
          <Route path="/servicesux" element={<UXPage/>}/>
          <Route path="/servicesbranding" element={<BrandingPage/>}/>
          <Route path="/serviceswebsitesupport" element={<WebsiteSupportPage/>}/>
          <Route path="/savvycornerproject" element={<SavvyCornerPage/>}/>
          <Route path="/spokeproject" element={<SpokePage/>}/>
          <Route path="/shreditproject" element={<ShredItPage/>}/>
        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;
