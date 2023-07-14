import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import CardLoadingstate from "../ui/CardLoadingstate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Featured = ({ currentID, setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const LikedPosts = posts.sort((a, b) => b.likes.length - a.likes.length);
  console.log(posts);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          filter: "invert()",
          fontSize: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale: "1.9",
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
          filter: "invert()",
          fontSize: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale: "1.9",
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
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
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
          <Link to={"/posts/projects"}>
            <p>see more</p>
          </Link>
        </div>
        <div className="cards">
          {!posts.length >0 ? (
            new Array(4)
              .fill(0)
              .map((_, index) => <CardLoadingstate key={index} />)
          ) : (
            <Slider {...settings} key={Date.now()} className="flex ">
              {LikedPosts.map((post) => (
                <div  key={post._id}>
                <Post
                  currentID={currentID}
                  post={post}
                  setCurrentId={setCurrentId}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Featured;
