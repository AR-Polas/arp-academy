import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-5">
            <Container>
                <Row>
                    <Col md={4} xs={12} className="mb-3">
                        <h3>ARP ACADEMY</h3>
                        <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                        <div className="d-flex justify-content-between">
                            <h5>FOLLOW US</h5>
                          <span><i class="fab fa-google-plus-g"></i></span>
                          <span><i class="fab fa-instagram"></i></span>
                          <span><i class="fab fa-twitter"></i></span>
                          <span><i class="fab fa-facebook-f"></i></span>
                        </div>
                    </Col>

                    <Col md={4} xs={12} className="links mb-3">
                        <h3>Useful links</h3>
                        <p>Admission</p>
                        <p>About</p>
                        <p>Login</p>
                        <p>Register</p>
                        <p>News $ Events</p>
                        <p>Contacts</p>
                    </Col>

                    <Col md={4} xs={12}>
                        <h3>Contact with Us</h3>
                        <p> <span><i class="fas fa-phone"></i> </span> 01714473628</p>
                        <p> <span><i class="fas fa-envelope"></i> </span> anisur.rpolas@gmail.com</p>

                        <h6>Newsletter</h6>
                        <div class="search-container mt-4">
                            <input type="text" placeholder="your email" autoComplete="off" className="w-100" name="search"/>
                                <button type="submit" className="">Submit</button>
                        </div>
                    </Col>
                </Row>

                <hr/>

                <div className="d-flex justify-content-between">
                    <p>Terms and conditions Privacy</p>
                    <p>© ARP ACADEMY</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;