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
import SavvyCornerLogo from '../Card/cardImages/SavvyCornerFinalLogo.png'

function SavvyCornerPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <img className='projectLogo' src={SavvyCornerLogo} alt="SavvyCorner Logo a large S and C with dramatic curves"/>
          
          
        </CenterContainer>
        <CenterContainer>
          <h1 className="projectHead">Savvy Corner</h1>
          
          
        </CenterContainer>
        <CenterContainer>
          <h2 className="projectSubHead" >E-commerce Site</h2>
          
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
          The project was to develop an e-commerce platform for HK based  medical equipment supplier Solar Med as they 
looked to move from being a solely HK centric B2B supplier to a more international B2C company. They wanted an
 enhanced online presence to be able to reach customers, In the UK, Europe and China in addition to their HK
client base.

The project included a large branding exercise, creating the backbone of their new 'Savvy Corner' Identity. In addition
I also completed a complex wireframe and prototype based on a comprehensive research process, before handing 
the designs over to the developer.  {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Research and Branding Development</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
          This research and branding package, included a thorough review of existing market leaders, before  liaising with 
stakeholders, to confirm the style and direction they wanted for the new Savvy Corner brand. Then based on their 
initial product offering, a mood was developed inline with their desire, for a clinical, modern site which presented a
calm and informed but stylish shopping environment. <br/><br/>

The branding exercise included the development of a logo, the building of a design library and guidelines, a 
typography analysis and package as well as a new colour palette.   {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <Carousel/>
        <LeftContainer>
          <h2 className="serviceHeading">User Experience</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
           There were many outcomes from the research tasks in terms of User Experience, seeing how best in class cosmetics and medical companies presented themselves digitally. These informed how the flow and form of the final website.{" "}
            <br /> <br /> 
          </p>
         
          </div>
        </LeftContainer>
        <CenterContainer>
            <Column><img className='UXDiag' src={siteMap} alt="Site map for Savvy Corner Website"/></Column>
            <Column><img className='UXDiag' src={userExperience} alt="diagram showing user experience considerationslaid out on a page"/></Column>
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Wireframe / Prototype</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
          The below videos show the prototypes of the Savvy Corner website for mobile and desktop, to a medium fidelity standard. A link to the finished site will be posted upon completetion. {" "}
            <br /> <br />
          
          </p>
         
          </div>
        </LeftContainer>
        <CenterContainer>
            <Column><video src={browserVideo} width="700" height="300" controls="controls" ></video></Column>
            <Column><video src={mobileVideo} width="700" height="300" controls="controls" ></video></Column>
        </CenterContainer>
<CenterContainer><Divider/></CenterContainer>
        


        <Footer />
      </Fragment>
     
    </div>
  );
}

export default SavvyCornerPage;
