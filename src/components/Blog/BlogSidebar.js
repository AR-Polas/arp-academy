import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { newsData } from '../Home/News/NewsData';

const BlogSidebar = () => {
    return (
        <div className="my-5 pl-3 border-left border-success">
            <input type="text" placeholder="Search..." className="w-100 border-1" />
            <br/>
            <button className="btn btn-brand mt-2 w-50 text-white">Search</button>

            <h6 className="my-4">Recent Posts</h6>

            {
                newsData.map(data => {
                    return <Row className="mb-2">
                        <Col xs={6}>
                            <img src={data.img} className="w-50" alt="not found"/>
                        </Col>
                        <Col xs={6}>
                            <small>{data.date}</small>
                            <p>{data.title}</p>
                        </Col>
                    </Row>
                })
            }

            <h6 className="my-4">Blog Categories</h6>

            <div className="d-flex justify-content-between">
                <div>
                    <p>Admissions</p>
                    <p>News</p>
                    <p>Events</p>
                    <p>Focus in the lab</p>
                </div>
                <div>
                    <p>(12)</p>
                    <p>(21)</p>
                    <p>(42)</p>
                    <p>(31)</p>
                </div>
            </div>
            
            <h6 className="my-4">Popular Tags</h6>
           <div className="blog-tags">
           <p>Information tecnology</p>
            <p>Students</p>
            <p>Community</p>
            <p>Careers</p>
            <p>Literature</p>
           </div>
        </div>
    );
};

export default BlogSidebar;