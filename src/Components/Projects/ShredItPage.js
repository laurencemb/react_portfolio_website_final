import './projects.css'
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import Carousel from './Carousel/carousel';
import ShredLogo from '../Card/cardImages/ShredLogo.jpg'
import ShredCarouselData from './Carousel/ShredData';
import MobileVideo from './Carousel/ShredImages/MobileRecording.webm'

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

        <CenterContainer><video
              src={MobileVideo}
              width="500"
              height="300"
              controls="controls"
            ></video></CenterContainer>
       
<CenterContainer><Divider/></CenterContainer>
        


        <Footer />
      </Fragment>
     
    </div>
  );
}

export default ShredItPage;
