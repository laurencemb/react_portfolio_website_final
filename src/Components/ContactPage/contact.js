
import React, { Fragment } from "react";
import Nav from "../Nav/nav.js";
import "../../global.css";
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import Divider from "../Divider/divider.js";
import Footer from "../Footer/footer";
import ContactForm from "../contactForm/contactForm";

function ContactPage (){
    return(
        <div className="bg">
            <Fragment>
                <Nav/>
                <CenterContainer>
                    <h1>Get in touch</h1>
                </CenterContainer>
                <CenterContainer>
                    <p>Drop me a message, if you have any queries regarding my services or to book your free consultation today!</p>
                </CenterContainer>
                <CenterContainer>
            <ContactForm/>
                </CenterContainer>
                <CenterContainer>
          <Divider />
        </CenterContainer>
                <Footer/>
            </Fragment>
        </div>
    )
}

export default ContactPage;