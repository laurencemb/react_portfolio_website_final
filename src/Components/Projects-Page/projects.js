import "./projects.css";
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import Container from "../Container/container";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import Card from "../Card/card";
import CardData from "../Card/cardData";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import Logo from "../logo/logo"

function ProjectsPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <Logo/>
        <CenterContainer>
          <h1 className="portfolioHeading">Portfolio</h1>
          
        </CenterContainer>
        <CenterContainer>
        <p className="wide">
            My portfolio showcases a range of freelance projects for a range
            of clients from B2C e-commerce sites to portfolio sites for
            creatives as well as personal and interview projects. 
          </p>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <Container>
         
            <div className="homeCards">
              <Card details={CardData} />
            </div>
          
        </Container>
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
            <Button
              className="serviceslink"
              text="More Details on My Sevices"
            ></Button>
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

export default ProjectsPage;
