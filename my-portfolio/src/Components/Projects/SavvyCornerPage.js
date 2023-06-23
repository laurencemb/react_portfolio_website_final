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

function SavvyCornerPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
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
        <Footer />
      </Fragment>
     
    </div>
  );
}

export default SavvyCornerPage;
