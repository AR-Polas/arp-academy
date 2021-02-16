import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutCourse = () => {
    return (
        <div className="about-course py-4">
            <Container>
                <Row>
                    <Col md="4 text-center text-white">
                        <div>
                        <i class="fas fa-graduation-cap"></i>
                        <h6 className="text-warning">+200 courses</h6>
                        <p>Explore a variety of fresh topics</p>
                        </div>
                    </Col>
                    <Col md="4 text-center text-white">
                        <div>
                        <i class="fas fa-user-tie"></i>
                        <h6 className="text-warning">Expert teachers</h6>
                        <p>Find the right instructor for you</p>
                        </div>
                    </Col>
                    <Col md="4 text-center text-white">
                        <div>
                        <i class="fas fa-bullseye"></i>
                        <h6 className="text-warning">Focus on target</h6>
                        <p>Increase your personal expertise</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutCourse;