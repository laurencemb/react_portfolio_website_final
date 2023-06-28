import React from "react";
import "./card.css"
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import Column from "../Column/column";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function PricingCard(props) {
    const { details } = props;

    if (!details || details.length === 0) {
      return null; // or return a message indicating no data
    }

     // Function to determine tag color based on tag content
 /*  const getTagColor = (tag) => {
    if (tag === "Web Design") {
      return "web-design";
    } else if (tag === "User Experience") {
      return "user-experience";
    } else if (tag === "Branding") {
      return "branding";
    } else {
      return "default";
    }
  }; */
 
    return (
        <>
        {props.details.map((value, index) => (
            <div className="card" key={index}>
                <div className="cardTextCont">
                    <h3 className="cardTitle">{value.title}</h3>
                    <p className="startingFrom">Starting from</p>
                    <p className="price"> {value.price}</p>
                    <p className="cardDescription">{value.description}</p>
                </div>
<LeftContainer className="tagsContainer">
   <Column>

            {value.tags.map((tag, tagIndex) => (
              <div className={`tags ${getTagColor(tag)}`} key={tagIndex}>
                <p>{tag}</p>
              </div>
            ))}
        
            
            
        </Column>
        <Column>
        <Link to={value.link}>
            
        <FontAwesomeIcon className="arrow" icon={faCircleArrowRight} />
        
          </Link>
        </Column>
            </LeftContainer>
            </div>
        ))}
        ;
        </>

);
    };
    
    export default PricingCard;