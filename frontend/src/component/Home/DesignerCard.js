import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const DesignerCard = ({ designer }) => {
 
  const options = {
    edit:false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: designer.ratings,
    isHalf:true,
  }
  return (
    <Link className='designerCard' to = {`/designer/${designer._id}`}>
        <img src={designer.images[0].url} alt={designer.name}></img>
        <span>Designer Name: { designer.name }</span>
        <div>
            <ReactStars {...options}/> 
            <span> ({ designer.numOfReviews })</span>
        </div>  
        <span>specialization : { designer.specialization }</span>  
        <span>Experience : { designer.experience }</span>
    </Link>
  )
}

export default DesignerCard;