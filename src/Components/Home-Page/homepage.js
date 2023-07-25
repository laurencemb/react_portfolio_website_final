import "./homepage.css";
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import Container from "../Container/container";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Column from "../Column/column";
import Card from "../Card/card";
import CardData from "../Card/cardData";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import Logo from "../logo/logo";

function HomePage() {
  return (
    <div className="bg">
      <Fragment >
        <Nav />
        <Logo/>
        <Container>
          <Column>
            <h1>
              WEB DESIGN <br />
              USER EXPERIENCE <br />
              WEB DEVELOPMENT <br />
            </h1>
          </Column>

          <Column>
            <p>
              Build a better online presence with custom web design and
              development. I specialise in creating fast, user-friendly websites
              for small businesses and non-profits, including charities and
              community organisations. Each website is designed with a focus on
              performance and accessibility, delivering an exceptional online
              experience for your visitors.
            </p>
          </Column>
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
            <Button className="serviceslink" text="View My Services"></Button>
          </Link>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>

        <LeftContainer>
          <h1 className="subHead"> Past Work</h1>
        </LeftContainer>

        <Container>
          
            <div className="homeCards">
              <Card details={CardData} />
            </div>
          
        </Container>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h1 className="subHead"> My Services</h1>
        </LeftContainer>
        <Container>
          <Column>
            <h2 className="homeServicesHeading">
              Web Design
              <br />
            </h2>
            <p className="servicesText">
              I specialise in creating
              bespoke website designs and web development for small businesses
              and non-profits, focusing on performance, accessibility, and
              unique user experience. Learn more.
            </p>

            <h2 className="homeServicesHeading">
              User Experience
              <br />
            </h2>
            <p className="servicesText">
              I am qualified in user experience and can help add additional
              layers of functionality to your site through a comprehensive
              review of how users behave and respond to different design
              elements and features, helping to increase sales, reduce churn and
              improve customer satisfaction <br></br>
            </p>
          </Column>

          <Column>
            <h2 className="homeServicesHeading">Brand Identity</h2>
            <p className="servicesText">
              Craft a unique and impactful brand identity. Go beyond a logo to
              reflect your mission, values, and experiences. Stand out and
              connect with your audience to become a memorable brand . Learn
              more. <br></br>
            </p>

            <h2 className="homeServicesHeading">
              Website Support <br />
            </h2>
            <p className="servicesText">
              Maximise the potential of your website with comprehensive support
              and maintenance. My custom website support packages are designed
              to keep your site running smoothly and effectively, with flexible
              options that can include SEO optimisation, content updates, and
              analytics reports.{" "}
            </p>
          </Column>
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

export default HomePage;
