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
import Image from "./aboutImages/LaurenceMoretonBurt.png";
import "./about.css";

function AboutPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <Container>
          <Column>
            <h1>About Me</h1>
            <p>
              I came to user experience from a more traditional design
              background, retraining after working within the fashion industry. 
              Now I enjoy applying knowledge of user psychology to design well
              rounded  products which feel effortless to use and which customers
              will return to time and again. ​ In my free time, you can find me
              exploring my creative passions of printing and sewing, or
              broadening my horizons in galleries and museums. I love live
              music, theatre and comedy. I’m no stranger to a long hike through
              the countryside. I can find the joy in pretty much anything!
            </p>
          </Column>
          <Column>
            <img
              className="profilePic"
              src={Image}
              alt=" Laurence Moreton Burt in a yellow collared shirt, his shoulder length hair is worn down"
            />
          </Column>
        </Container>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        
        <CenterContainer>
          <Link to="/contact">
            <Button
              className="BookNowButton"
              text="Book a Free Consultation"
            ></Button>
          </Link>
        </CenterContainer>
        <CenterContainer>
          <Link to="/services">
            <Button className="serviceslink" text="View My Services"></Button>
          </Link>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <Footer />
      </Fragment>
    </div>
  );
}

export default AboutPage;
