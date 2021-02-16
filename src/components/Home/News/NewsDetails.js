import React from 'react';
import { Col, Row } from 'react-bootstrap';

const NewsDetails = ({ news }) => {

    const { title, subtitle, img, description, date } = news
    return (
        <Col md={6} xs={12} className="mb-3">
            <Row className="news-container">
                <Col md={5} xs={12}>
                    <div className="news-img">
                        <img className="w-100" src={img} alt="not found" />
                        <div class="news-date">
                            <p>{date}</p>
                        </div>
                    </div>
                </Col>
                <Col md={7} xs={12}>
                    <div>
                        <small>{subtitle}</small>
                        <h6>{title}</h6>
                        <p className="secondary">{description}</p>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default NewsDetails;