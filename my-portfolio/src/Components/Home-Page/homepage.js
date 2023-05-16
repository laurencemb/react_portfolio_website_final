import "./homepage.css";
import React, {Fragment} from "react";
import Nav from '../Nav/nav.js';
import "../../global.css";
import Container from "../Container/container";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import Column from "../Column/column"
import Grid from "../Grid/grid"
import Card from "../Card/card";
import CardData from "../Card/cardData";
import Button from "../Button/button";
import { Link } from 'react-router-dom';
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";


function HomePage(){
    return (
    <div className="bg">
        <Fragment>
         <Nav/>
         <Container>
            <Column>
                <h1>WEB DESIGN <br/>
                    USER EXPERIENCE <br/>
                    WEB DEVELOPMENT <br/>
                </h1>
            </Column>
            
            <Column>
            <p>Build a better online presence with custom web design and development. I specialise in creating fast, user-friendly websites for small businesses and non-profits, including charities and community organisations. Each website is designed with a focus on performance and accessibility, delivering an exceptional online experience for your visitors.</p>
            </Column>
         </Container>
         <CenterContainer>
            <Link to="/contact">
                        <Button className="BookNowButton" text= 'Book a Free Consultation'>
                        </Button>
                        </Link>
         </CenterContainer>
          <CenterContainer>           
                   
                    <Link to="/services">
                        <Button className="serviceslink" text= 'View My Services'>
                        </Button>
                    </Link>
         </CenterContainer>
         <CenterContainer>
            <Divider/>
         </CenterContainer>
             
         <Container>
            <Grid>
            <div className="homeCards">
                <Card details={CardData} />
                
            </div>
            </Grid>
         </Container>
         <CenterContainer>
            <Divider/>
         </CenterContainer>
         <Footer/>
        </Fragment>
        </div>
    )
}

export default HomePage;


