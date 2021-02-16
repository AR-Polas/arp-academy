import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { newsData } from '../Home/News/NewsData';
import BlogSidebar from './BlogSidebar';

const Blog = () => {
    return (
        <>

        <Header/>
            <Container className="py-5">
                <Row>
                    <Col md={8} xs={12}>
                    {
                        newsData.map(data => {
                            return <Row className="my-5">
                                <Col md={6} xs={12}>
                                    <img src={data.img} className="w-100 blog-img rounded" alt="not found"/>
                                </Col>
                                <Col md={6} xs={12} className="d-flex justify-content-between flex-column">
                                        <div>
                                        <small>{data.date}</small>
                                            <h6>{data.title}</h6>
                                            <p>{data.description}</p>
                                        </div>
                                    <div className="border-top d-flex justify-content-between">
                                        <div className="d-flex mt-2">
                                            <img src={data.img} alt="not found" className="mr-4 blog-writer-img" />
                                            <p className="mt-2">polas</p>
                                        </div>
                                        <div className="mt-3">
                                            <p> <span><i class="far fa-comment"></i></span> 20</p>
                                        </div>
                                    </div>
                                    </Col>
                                 
                            </Row>
                        })
                    }
                    </Col>

                    <Col md={4} xs={12}>
                        <BlogSidebar/>
                    </Col>
                </Row>
            </Container>
        <Footer/>
            
        </>
    );
};

export default Blog;