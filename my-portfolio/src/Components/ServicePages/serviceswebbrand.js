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

function BrandingPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <h1>Branding</h1>
        </CenterContainer>
        <LeftContainer>
          <h2>What's Included:</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Free Branding Consultation</h3>
                <p>
                  {" "}
                  Understanding what you need from your site and the style you
                  are aiming for, the free consultation allows us to create
                  specific package tailored perfectly to your needs.{" "}
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Unique Logo</h3>
                <p>
                  {" "}
                  A unique logo that helps your brand stand out and be easily remembered by your audience.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Standout Typography</h3>
                <p>
                  {" "}
                 A custom typography selection that adds a unique touch to your brand.  
                </p>
              </li>
             
              
            
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
            <li>
            
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Colour Palette </h3>
                <p>
                  {" "}
                  A strict and stylish colour palette which helps you to stay consistent across your branding materials. 
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Design Guidelines</h3>
                <p>Strict design guidelines for the development of your website and branding materials, ensuring a cohesive and consistent brand identity.</p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Social Media Graphics</h3>
                <p>
                  {" "}
                  An initial range of graphics for your socials helping you to establish a strong identity.   
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
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleQuestion} /> Web Design</h3>
                <p>
                  {" "}
                  Don't have a design yet? Pair with one of my Web Design packages to go straight
                  into designing a website with a fully considered brand!
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
                  branding is fully realised on your finished website.
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
                <h3 className="priceCardTitle">Standard </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £750+ </p>
                <p className="context">
                  A full branding exercise for your company.
                </p>
                <p className="priceCardDescription">
                  This package will consist of all the above services and result in a logo, and full design library and guidlines for your future branding.
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

export default BrandingPage;
