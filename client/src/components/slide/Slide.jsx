import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll, isPopular }) => {
  return (
    <div className="slide">
      <div className="container">
        {isPopular?<h1>Popular Foods</h1>:<h1>Recent Deliverables</h1>}
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
