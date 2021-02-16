import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {popularData} from './PopularCourseData'
import PopularCourseDetails from "./PopularCourseDetails";

export default class PopularCourse extends Component {
  render() {
    const settings = {
        prevArrow: false,
        nextArrow: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0
          }
        }
      ]
    };
    return (
      <div className="container my-5">

          <div className="text-center border-style">
              <h3>Arp Popular Courses</h3>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
        <Slider {...settings}>
         {
             popularData.map(info => <PopularCourseDetails course={info} key={info.id} />)
         }

        </Slider>
      </div>
    );
  }
}

