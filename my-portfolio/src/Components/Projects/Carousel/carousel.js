import React, {useState} from 'react';
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Column from '../../Column/column';
import carouselData from './carouselData';
import CenterContainer from '../../CenterAlignContainer/CenterContainer';

const Carousel = ({data}) => {
    const [index, setIndex] = useState(0);
    const dataLength = carouselData.length;


const handlePrevious = () => {
    const newIndex = index -1;
    setIndex(newIndex < 0 ? dataLength - 1 : newIndex)
}

const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= dataLength ? 0 : newIndex)
}

return (
    <CenterContainer>
    <div className="carousel">
        <button className='slideButton' onClick={handlePrevious}><FontAwesomeIcon className="slideArrow" icon={faCircleArrowLeft} /></button>
       
        <Column><div className="carouselColumn"><img className="carouselSlide" src={carouselData[index].img} alt={carouselData[index].title}/></div></Column>
        <Column><div className="carouselColumn"><img className="carouselSlide" src={carouselData[(index + 1) % dataLength].img}alt={carouselData[(index +1)% dataLength].title}/></div></Column>
        <button className='slideButton' onClick={handleNext}><FontAwesomeIcon className="slideArrow" icon={faCircleArrowRight} /></button>
    </div>
    </CenterContainer>
   
);
};


export default Carousel;
