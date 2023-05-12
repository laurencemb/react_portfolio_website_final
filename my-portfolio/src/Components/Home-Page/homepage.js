import "./homepage.css";
import React, {Fragment} from "react";
import Nav from '../Nav/nav.js';
import "../../global.css";
import Container from "../Container/container";
import Column from "../Column/column"
import Grid from "../Grid/grid"

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
        
         <Container>
            <Grid>
            
            </Grid>
         </Container>
        </Fragment>
        </div>
    )
}

export default HomePage;


