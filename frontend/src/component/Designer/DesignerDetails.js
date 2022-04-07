import React, { Fragment, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import "./DesignerDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getDesignerDetails } from "../../actions/designerAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";
import MetaData from "../layout/MetaData";


const DesignerDetails = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {designer,loading,error} = useSelector(
      (state) => state.designerDetails);

    useEffect( () => {
      if(error){
        alert.error("error");
        dispatch(clearErrors());
      }
        dispatch(getDesignerDetails(match.params.id));
    }, [dispatch,match.params.id,error,alert]);


    const options = {
      edit:false,
      color: "rgba(20,20,20,0.1",
      activeColor: "tomato",
      size: window.innerWidth < 600 ? 20 : 25,
      value: designer.ratings,
      isHalf:true,
    }

  return (
    <Fragment>
      {loading ? ( <Loader /> ) : (
        <Fragment>
          <MetaData title={`${designer.name} --GRAPHIC DESIGNERS HUB`} />
        <div className="DesignerDetails">
            <div>
                {designer.images &&
                  designer.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
            </div>

            <div>
              
              <div className="detailsBlock-1">
                <h2>{designer.name}</h2>
                <p>Designer # {designer._id}</p>
              </div>
              
              <div className='detailsBlock-2'>
                Skills : <h3>{designer.skills}</h3>
              </div>

              <div className='detailsBlock-3'>
                Qualification : <h3>{designer.qualification}</h3>
              </div>

              <div className='detailsBlock-3-1'>
                Experience : <h3>{ designer.experience }</h3>
              </div>

              <div className='detailsBlock-3-1'>
                specialization : <h3> { designer.specialization }</h3>
              </div>

              <div className='detailsBlock-4'>
                <ReactStars {...options} />
                <span> ({designer.numOfReviews} Reviews) </span>
              </div>


              <div className='detailsBlock-4-1'>
                <button className='order'>Place Order</button>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
        </div>

                    {/* Reviews display */}
        <h3 className='reviewsHeading'>REVIEWS</h3>

        { designer.reviews && designer.reviews[0] ? (
          <div className='reviews'>
            {designer.reviews && designer.reviews.map((review) => <ReviewCard review={review} />)}
          </div>
        ) : (
          <p className='noReviews'> No Reviews Yet</p>
        )}
    </Fragment>
      )}
    </Fragment>
  );
};

export default DesignerDetails;