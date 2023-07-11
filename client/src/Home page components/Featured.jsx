import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import CardLoadingstate from "../ui/CardLoadingstate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = ({ currentID, setCurrentId }) => {
  const {posts, isLoading} = useSelector((state) => state.posts);
  console.log(posts);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          filter:'invert()',
          fontSize: "30px",
          display:'flex',
          alignItems: 'center',
          justifyContent:'center',
          scale: '1.9',
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          filter:'invert()',
          fontSize: "30px",
          display:'flex',
          alignItems: 'center',
          justifyContent:'center',
          scale: '1.9'
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: true,
    speed: 1500,
    autoplaySpeed: 10,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
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

  if(!posts.length && !isLoading) return 'No posts'
  return (
    <>
      <div className="cardContainer">
        <div className="card__wrapper">
          <h1>Featured</h1>
          <p>see more</p>
        </div>
        <div className="cards">
          <Slider {...settings} key={Date.now()} className="flex ">
            {isLoading
              ? new Array(2)
                  .fill(0)
                  .map((_, index) => <CardLoadingstate key={index} />)
              : posts.map((post) => (
                  <Post
                    currentID={currentID}
                    post={post}
                    isLoading={isLoading}
                    setCurrentId={setCurrentId}
                    key={post._id}
                  />
                ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Featured;
