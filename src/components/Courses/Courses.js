import React, { Fragment, useContext } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { popularData } from '../Home/PopularCourse/PopularCourseData';
import {NavContext} from '../../App'
const Courses = () => {
    const [navItem,setNavItem] = useContext(NavContext)
    const data = [
        { "information": "Payments and refunds", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.","icon" : <i class="fas fa-money-check-alt"></i> },
        { "information": "Need Help? Contact us", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "icon" : <i class="fas fa-hands-helping"></i> },
        { "information": "Quality Standers", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "icon" : <i class="fas fa-sticky-note"></i> }
    ]

    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    {
                        popularData.map(data => {
                            return <Fragment key={data.id}>
                                <Col md={4} xs={12} className="mb-3">
                                    <Card className="shadow border-1 overflow-hidden">
                                        <div className="course-img-container">
                                            <Card.Img variant="top" className="course-img h-100" src={data.img} />
                                            <div class="middle">
                                              <Link to={`/courseDetails/${data.id}`}><button className="img-btn">Preview Course</button></Link>
                                            </div>
                                            <p className="course-price">${data.price}</p>
                                        </div>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">{data.subtitle}</Card.Subtitle>
                                            <Card.Title>{data.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <Card.Text className="text-warning">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star text-dark"></i>
                                                <span className="text-dark">({data.star})</span>
                                            </Card.Text>
                                            <Card.Footer className="bg-transparent d-flex justify-content-between align-items-center">
                                                <p className="mt-3"> <span><i class="fas fa-clock"></i></span> {data.duration} </p>
                                                <p className="mt-3"> <span><i class="fas fa-thumbs-up"></i></span> {data.like}</p>
                                               <Link to={`/courseDetails/${data.id}`} onClick={() => setNavItem('courseDetails')}> <Button className=" course-btn">Enroll Now</Button></Link>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Fragment>
                        })
                    }
                </Row>
                <Row className="my-5">

                    {
                        data.map(info => {
                            return <Col md={3} className="shadow mx-auto text-center p-3">
                                <h1 style={{color : "#38ef7d"}}>{info.icon}</h1>
                                <h5>{info.information}</h5>
                                <p>{info.description}</p>
                            </Col>
                        })
                    }
                </Row>
            </Container>


            <Footer />
        </>
    );
};

export default Courses;