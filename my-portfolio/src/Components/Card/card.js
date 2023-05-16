import React from "react";
import "./card.css"

function Card(props) {
 
    return (
        <>
        {props.details.map((value, index) => (
            <div className="card" key={index}>
                <div className="cardImage">
                    <img src={value.img} alt="" />
                </div>
                <div>
                    <h3 className="cardTitle">{value.title}</h3>
                    <p className="cardDescription">{value.description}</p>
                </div>
            </div>
        ))}
        ;
        </>

);
    };
    
    export default Card;