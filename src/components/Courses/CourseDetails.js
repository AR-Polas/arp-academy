import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { popularData } from '../Home/PopularCourse/PopularCourseData';
import StripeCheckout from "react-stripe-checkout"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavContext } from '../../App';
toast.configure();

const CourseDetails = () => {
    let history = useHistory();
    const { id } = useParams()
    const [navItem,setNavItem] = useContext(NavContext)
    const filterCourse = popularData.find(data => data.id == id)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

      const handleToken =  () => {
            setNavItem("home")
              history.push(`/`)
              toast.success("You have paid successfully now you can continue your studying!", {
                position: toast.POSITION.TOP_RIGHT
              });

          }

    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col md={8} xs={12}>
                        <h2>Description</h2>
                        <p>{filterCourse.description}</p>
                        <h4 className="my-5">What will you learn</h4>
                        <div>
                            <h6> <span className="brand-color"><i class="fas fa-check-circle"></i></span> Suas summo id sed erat erant oporteat </h6>
                            <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>

                            <h6> <span className="brand-color"><i class="fas fa-check-circle"></i></span> Illud singulis indoctum ad sed </h6>
                            <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>

                            <h6> <span className="brand-color"><i class="fas fa-check-circle"></i></span> Alterum bonorum mentitum an mel</h6>
                            <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>
                        </div>

                        <p className="my-5">
                            Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.
                </p>

                    </Col>

                    <Col md={4} xs={12} className="courseDetails p-2">
                        <img src={filterCourse.img} alt="not found" className="w-100" />
                        <div className="d-flex justify-content-between px-5 my-2">
                            <h3 className="brand-color">$ {filterCourse.price} </h3>
                            <p className="mt-2"> <del>$169</del> 60% discount price</p>
                          
                        </div>
                      <div className="text-center mb-5">
                      <StripeCheckout
                            stripeKey="pk_test_51HZoEFDEY3PI1196xYT76oVi4J2lJL64u2NM4qPy1frYpsOVLxc5rxiFNH4gPQ7FXhcxHbfVEUhjfw9PTYOhJOlj00LQrukqQ5"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount = {filterCourse.price * 100}
                            name="all products in the cart"
                            />
                      </div>
                        <p>What's includes</p>
                        <ul>
                            <li>Mobile support</li>
                            <li>Lesson archive</li>
                            <li>Mobile support</li>
                            <li>Tutor chat</li>
                            <li>Course certificate</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default CourseDetails;