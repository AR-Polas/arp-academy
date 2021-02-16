import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutFounders = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className="text-center border-style">
                <h3>Our Origins and Story</h3>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <Container>
                <div className="my-5">
                    <Slider {...settings}>
                        <div>
                           <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found"/>
                        </div>
                    </Slider>
                </div>
            </Container>
        </>
    );
};

export default AboutFounders;