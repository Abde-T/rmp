import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import CardLoadingstate from "../ui/CardLoadingstate";

const Featured = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    // autoplaySpeed: 10,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="cardContainer">
        <div className="card__wrapper">
          <h1>Featured</h1>
          <p>see more</p>
        </div>
        {/* cards */}
        <div className="cards-">
          {/* <Slider {...settings} key={Date.now()} className=" "> */}
          {!posts.length > 0 ? (
            new Array(4).fill(0).map((_, index) =>(
              <CardLoadingstate key={index} />
            ))
          ) : (
            posts.map((post) => (
              <Post post={post} setCurrentId={setCurrentId} key={post.id}/>
            ))
          )}
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default Featured;
