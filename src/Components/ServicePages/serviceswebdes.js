import "./fullservices.css";
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import Container from "../Container/container";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Column from "../Column/column";
import Grid from "../Grid/grid";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function WebDesignPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <h1>WEB DESIGN</h1>
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeadings">What's Included:</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Free Design Consultation</h3>
                <p>
                  {" "}
                  Understanding what you need from your site and the style you
                  are aiming for, the free consultation allows us to create
                  specific package tailored perfectly to your needs.{" "}
                </p>
              </li>
              
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Research</h3>
                <p>
                  {" "}
                  Understanding the needs of your consumers is vital to
                  delivering an effective design. Comprehending how your
                  competitors are suceeding and failing in delivering these
                  needs, allows you to place yourself at the forefront of your
                  industry through good design.{" "}
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Prototype Website</h3>
                <p>
                  {" "}
                  Low, Medium or High fidelity depending on your needs,
                  prototypes offer you the chance to reveiw the web design in a
                  functional form, before commiting to build. It provides a
                  chance for early testing of your website, large scale changes
                  are quicker and cheaper to carry out before building your
                  site.{" "}
                </p>
              </li>
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
            <li>
            
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Unique Website Design</h3>
                <p>
                  {" "}
                  A custom website design that establishes your online presence
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Mobile Friendly</h3>
                <p> A responsive design that fits all screen sizes.</p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Accessible Design</h3>
                <p>
                  {" "}
                  Your website will be designed with Accessibility in mind,
                  ensuring all vistors have a positive experience on your site.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> High Visibility</h3>
                <p>
                  {" "}
                  Your website will be designed with best SEO optimisation,
                  allowing your site to feature higher in search engine
                  rankings.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Fast Loading</h3>
                <p>
                  {" "}
                  Your site will be built for fast performance, keeping consumer
                  churn and bounce rates low.
                </p>
              </li>
            </ul>
          </Column>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeadings">Optional Extras</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Effortless Editing</h3>
                <p>
                  {" "}
                  Inclusion of a content management system which allows you to
                  make easy changes to your sites content yourself.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Copy Writing</h3>
                <p>
                  {" "}
                  Inclusion of professional copy writing for your site and
                  products. This may need to be completed via third-party
                  depending on your needs.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Stunning Imagery</h3>
                <p>
                  {" "}
                  Impactful sites often have unique custom photography and
                  videography to showcase your brands and products. This may
                  need to be completed via third-party depending on your needs.
                </p>
              </li>
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Web Development</h3>
                <p>
                  {" "}
                  Pair with one of my Web Development packages to go straight
                  from design to build!
                </p>
              </li>
              <li>
                <h3 className="serviceHead"> <FontAwesomeIcon icon={faCircleQuestion} />User Experience</h3>
                <p>
                  {" "}
                  Pair with one of my User Experience packages to ensure your
                  website is delivery your customers needs with maximum
                  efficiency!
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Branding</h3>
                <p>
                  {" "}
                  Pair with one of my Branding packages to develop a whole new
                  idnetity for your brand alongisde your new website!
                </p>
              </li>
            </ul>
          </Column>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeadings">Pricing</h2>
        </LeftContainer>
        <CenterContainer>
          <Grid>
            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Starter</h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £500+ </p>
                <p className="context">
                  For organisations just getting started online, requiring
                  single page websites or multi-page sites with limited
                  functionality.
                </p>
                <p className="priceCardDescription">
                  A website with limited design customisation and features, with
                  limited research, presented as still page designs or a low
                  fidelity prototype. Designed to be built from the ground up on
                  a custom-coded template.{" "}
                </p>
              </div>
            </div>

            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Plus </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £1000+ </p>
                <p className="context">
                  For organisations requiring multipage websites with greater
                  functionality, and easily editable content.
                </p>
                <p className="priceCardDescription">
                  A website with a custom deisgn and several features, a full
                  research package. Designs to be presented as a functioning
                  prototype. Designs to be built from the ground up on a
                  custom-coded template, including a content management system.
                </p>
              </div>
            </div>

            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Advanced </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £2000+ </p>
                <p className="context">
                  For organisations wanting to go to the next level, requiring
                  multipage websites complex functionality, and easily editable
                  content.
                </p>
                <p className="priceCardDescription">
                  A website with a custom design and several features including
                  complex functionality. A complete research package. Presented
                  as a functional high fidelity prototype. Designed to be built
                  from the ground up on a custom-coded template, including a
                  content management system.
                </p>
              </div>
            </div>

          </Grid>
        </CenterContainer>
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
          <Divider />
        </CenterContainer>
        <Footer/>
      </Fragment>
    </div>
  );
}

export default WebDesignPage;
