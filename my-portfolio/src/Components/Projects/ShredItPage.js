import './projects.css'
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import Container from "../Container/container";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Column from "../Column/column";
import Grid from "../Grid/grid";
import Card from "../Card/card";
import CardData from "../Card/cardData";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import Carousel from './Carousel/carousel';
import browserVideo from './SCImages/BrowserDesignVideo.mp4'
import mobileVideo from './SCImages/MobileView.mp4'
import siteMap from './SCImages/sitemap.jpg'
import userExperience from './SCImages/userexperience.jpg'
import ShredLogo from '../Card/cardImages/ShredLogo.jpg'
import ShredCarouselData from './Carousel/ShredData';

function ShredItPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <img className='projectLogo' src={ShredLogo} alt="Spoke Logo a black circle filled with lines mimicing a bike wheel"/>
          
          
        </CenterContainer>
        <CenterContainer>
          <h1 className="projectHead">Shred-It Collective</h1>
          
          
        </CenterContainer>
        <CenterContainer>
          <h2 className="projectSubHead" >Portfolio Website</h2>
          
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeading">The Project</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
          This project was the design and development of a portfolio website to showcase the work of a creatie collective generating art installations for festivals. It needed to have an image gallery, a contact form and be responsive so that it looked great on desktop or mobile.
          Designs can be seen below - The live site currently in build, link to follow upon completion.  {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Website Design</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
           This design was heavily influenced by the brands bold signature red and white colour palette, creating an eye catching, simple and modern design. {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <Carousel data={ShredCarouselData}/>
       
<CenterContainer><Divider/></CenterContainer>
        


        <Footer />
      </Fragment>
     
    </div>
  );
}

export default ShredItPage;
