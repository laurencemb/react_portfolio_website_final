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

function WebsiteSupportPage() {
  return (
    <div className="bg">
      <Fragment>
        <Nav />
        <CenterContainer>
          <h1>Website Support</h1>
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeadings" >What's Included:</h2>
        </LeftContainer>
        <CenterContainer>
          <Column>
            <ul className="serviceList">
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Free Support Consultation</h3>
                <p>
                  {" "}
                  Understanding what you need from your site in terms of support{" "}
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Increased Visibility</h3>
                <p>
                  {" "}
                  Ongoing Search Engine Optimisation (SEO) that helps your website rank higher in search results.
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Fast Loading</h3>
                <p>
                  {" "}
                  Page speed audits that ensure your website loads quickly, reducing bounce rates and keeping visitors engaged 
                </p>
              </li>
             
              
            
            </ul>
          </Column>
          <Column>
            <ul className="serviceList">
            <li>
            
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Fresh Content</h3>
                <p>
                  {" "}
                  Regular content updates that keep your website relevant and engaging for visitors. 
                </p>
              </li>
              <li>
                <h3 className="serviceHead"><FontAwesomeIcon icon={faCircleCheck} /> Data Analytics</h3>
                <p>Analytics reports that provide data on website performance, helping you make informed decisions.</p>
              </li>
            </ul>
          </Column>
        </CenterContainer>
        <CenterContainer>
          <Divider />
        </CenterContainer>
        <LeftContainer>
          <h2 className="serviceHeadings" >Pricing</h2>
        </LeftContainer>
        <CenterContainer>
          <Grid>
           

            <div className="priceCard">
              <div className="cardTextCont">
                <h3 className="priceCardTitle">Standard </h3>

                <p className="startingFrom"> Starting from</p>
                <p className="price"> £30+ / Month </p>
                <p className="context">
                  Website support based on your needs. 
                </p>
                <p className="priceCardDescription">
                  This package will consist of some or all of the above services depending on your needs for website support. 
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

export default WebsiteSupportPage;
