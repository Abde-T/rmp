import React from "react";
import Slider from "react-slick";
import {useSelector} from 'react-redux'

const Featured = () => {
  const posts = useSelector((state)=>{state.posts})
  console.log(posts)


  const array1 = [1,1,1,1];
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows:false,
    speed: 2000, 
    autoplaySpeed: 10,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }

      
    ]
  };

  return (
    <>
      <div className="cardContainer">
        <div className="card__wrapper">
          <h1>Featured</h1>
          <p>see more</p>
        </div>

        <div className="cards">
        {/* <Slider {...settings} key={Date.now()} className="flex "> */}
          {array1.fill(
            <div className="card_" >
              <div className="card-1"></div>
              <div className="right">
                <div className="card-2"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="bottom">
                  <div className="card-4"></div>
                  <div className="card-4"></div>
                  <div className="card-4"></div>
                </div>
              </div>
            </div>
          )}
     {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default Featured;
