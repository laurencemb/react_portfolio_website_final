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

function UXPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <h1>USER EXPERIENCE</h1>
        </CenterContainer>
        <LeftContainer>
          <h2>What's Included:</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Free User Experience Consultation</h3>
                <p>
                  {" "}
                  Understanding what you need from your site and the style you
                  are aiming for, the free consultation allows us to create
                  specific package tailored perfectly to your needs.{" "}
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Interface Audit</h3>
                <p>
                  {" "}
                  A comprehensive review of your current product offering, identifying areas for improvement
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Product Usage Analysis</h3>
                <p>
                  {" "}
                  A thourough reveiw of your site using analytics tools, to gain insights in to how users are engaging with your product, to identify areas for improvement.  
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Surveys & Analysis</h3>
                <p>
                  {" "}
                  A thourough reveiw of your site using survey and analytics tools, to gain insights in to how users are engaging with your product, to identify areas for improvement.  
                </p>
              </li>
              
            
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
            <li>
            
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> User Testing </h3>
                <p>
                  {" "}
                  Testing of your prduct with real users to gain valuable insights in to consumer opinion of your site. 
                  User testing returns some of the most valuable and usable data available to us.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> User Personas</h3>
                <p>Development of user profiles relating to your customer base, to inform design, development, products and services.</p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> User Journey Mapping </h3>
                <p>
                  {" "}
                  An analysis of your users journey through your website, helps to identify drop out points and ways to fix them.
                </p>
              </li>
              
            </ul>
          </Column>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2>Optional Extras</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
             
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Copy Writing Review</h3>
                <p>
                  {" "}
                A reveiw of your copy writing, through A/B Testing.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Web Design</h3>
                <p>
                  {" "}
                  Don't have a design yet? Pair with one of my Web Design packages to go straight
                  into designing a website based on high quality research!
                </p>
              </li>
              
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
             
              <li>
                <h3 className="serviceHead"> <FontAwesomeIcon icon={faCircleQuestion} /> Web Development</h3>
                <p>
                  {" "}
                  Pair with one of my Web Development packages to ensure your
                  website is delivering your customers needs with maximum
                  efficiency!
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Branding</h3>
                <p>
                  {" "}
                  Pair with one of my Branding packages to develop a whole new
                  identity for your brand alongisde your new website!
                </p>
              </li>
            </ul>
          </Column>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2>Pricing</h2>
        </LeftContainer>
        <CenterContainer>
          <Grid>
            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Starter</h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £500+ </p>
                <p className="context">
                  For organisations just getting started online, a simple review of your customers needs
                  and analysis of quick ways to improve your offering effectively.
                </p>
                <p className="priceCardDescription">
                  This package will consist of 2-3 of the above services based on your needs and what will have the biggest impact on your fledgling site. {" "}
                </p>
              </div>
            </div>

            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Plus </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £1000+ </p>
                <p className="context">
                  For organisations withg multipage websites with greater
                  functionality. A more in depth reveiw of your product offering and a broader insight in to ways to improve your site.
                </p>
                <p className="priceCardDescription">
                  This package will consist of 4-6 of the above service, based on your needs and what will have the biggest impact on your website.
                </p>
              </div>
            </div>

            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Advanced </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £2000+ </p>
                <p className="context">
                  For organisations wanting to go to the next level, with complex sites and product offerings. A full service review of your existing product. 
                </p>
                <p className="priceCardDescription">
                 This package will consist of a full user experience reveiw of your site identifying all areas for viable improvment as well as an action plan for realising solutions.
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

export default UXPage;
