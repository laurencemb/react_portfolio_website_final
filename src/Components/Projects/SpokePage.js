import './projects.css'
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import Carousel from './Carousel/carousel';
import SpokeLogo from '../Card/cardImages/SpokeLogo.png'
import SpokeCarouselData from './Carousel/spokeCarouselData/spokeCarouselData';
import Logo from '../logo/logo';

function SpokePage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <Logo/>
        <CenterContainer>
          <img className='projectLogo' src={SpokeLogo} alt="Spoke Logo a black circle filled with lines mimicing a bike wheel"/>
          
          
        </CenterContainer>
        <CenterContainer>
          <h1 className="projectHead">Spoke</h1>
          
          
        </CenterContainer>
        <CenterContainer>
          <h2 className="projectSubHead" >Social Networking Mobile Application</h2>
          
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
          The project was to develop a social media networking app, for cylcists who wish to meet new people, or arrange to go for rides in new areas in which they might not know many people. The main focus of the project was to develop a slick on-boarding process.  {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">On Boarding Design</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
           The below onboarding designs and branding were developed from scratch as part of an interview project. The bold yellow colour scheme took inspiration from cyclings coveted yellow Jersey, and the name Spoke and the simmple logo leant in to the theme of bringing multiple people together. {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <Carousel data={SpokeCarouselData}/>
       
<CenterContainer><Divider/></CenterContainer>
        


        <Footer />
      </Fragment>
     
    </div>
  );
}

export default SpokePage;
