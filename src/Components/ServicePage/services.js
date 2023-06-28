import "./services.css";
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

function ServicePage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <h1>Services</h1>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Website Design</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
            <div className="buttonCont">
          <p className="serviceText">
            I offer a range of design packages, for all project sizes ranging
            from quick mock ups to fully functional prototypes. I specialise in
            creating fast user friendly websites, for small business, with an
            emphasis on accessibility. Every design takins in to consideration
            the unique perspective of your business, ethos and customer base to
            deliver an exceptional and genuine experience for your visitors.{" "}
            <br /> <br />
            For further information on my design packages and pricing:
          </p>
          <Link to="/serviceswebdesign">
            <Button
              className="learnMoreBtn"
              text="Learn More"
            ></Button>
          </Link>
          </div>
        </LeftContainer>

        <LeftContainer>
          <h2 className="serviceHeading">Website Development</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
        <div className="buttonCont">
          <p className="serviceText">
            Bringing your designs to life, I will custom code your website, I
            build responsive mobile friendly sites, with a focus on fast loading
            times and accessibility. My custom-coded solution means that the
            unique needs of your business are being matched exactly, delivering
            a site that truly reflects you and your business. <br /> <br />
            For further information on my development packages and pricing:
          </p>
          <Link to="/serviceswebdevelopment">
            <Button
              className="learnMoreBtn"
              text="Learn More"
            ></Button>
          </Link>
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">User Experience</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
        <div className="buttonCont">
          <p className="serviceText">
            Looking to improve your existing website? I can help by providing a
            review of your sites services with an emphasis on the user
            experience. I will use a research lead approach to identify key pain
            points and causes of consumer drop out in your site and provide an
            actionable list of solutions. <br /> <br />
            For further information on my UX packages and pricing:
          </p>
          <Link to="/servicesux">
            <Button
              className="learnMoreBtn"
              text="Learn More"
            ></Button>
          </Link>
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Brand Identity</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
        <div className="buttonCont">
          <p className="serviceText">
            I specialise in offering comprehensive branding services, dedicated
            to helping you establish a remarkable and influential brand identity
            that distinguishes your organisation from the rest. Recognising that
            your brand encompasses more than just a logo, I strive to capture
            your mission, values, and the experiences you offer to your
            stakeholders. I assist you in crafting a unique and harmonious brand
            identity that not only stands out but also fosters a genuine
            connection with your target audience. <br /> <br />
            For further information on my branding packages and pricing:
          </p>
          <Link to="/servicesbranding">
            <Button
              className="learnMoreBtn"
              text="Learn More"
            ></Button>
          </Link>
          </div>
        </LeftContainer>
        <LeftContainer>
          <h2 className="serviceHeading">Website Support</h2>
        </LeftContainer>
        <CenterContainer>
          <div className="serviceHeadDiv"></div>
        </CenterContainer>
        <LeftContainer>
        <div className="buttonCont">
          <p className="serviceText">
            For customers of my web development packages I offer an extensive
            range of website support services aimed at maximizing the full
            potential of your online presence. Through my tailored website
            support packages, I ensure your website operates seamlessly and
            efficiently, providing you with the peace of mind you deserve. I
            offer flexible options that can include SEO optimization, regular
            content updates, meticulous page speed audits, and comprehensive
            analytics reports, I guarantee that your website remains up-to-date
            and optimized for success. For a fixed monthly fee, I take care of
            your website, allowing you to focus on your core business while
            knowing that your online platform is in capable hands. <br /> <br />
            For further information on my website support packages and pricing:
          </p>
          <Link to="/serviceswebsitesupport">
            <Button
              className="learnMoreBtn"
              text="Learn More"
            ></Button>
          </Link>
          </div>
        </LeftContainer>
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
        <Footer/>
      </Fragment>
      
    </div>
  );
}

export default ServicePage;
