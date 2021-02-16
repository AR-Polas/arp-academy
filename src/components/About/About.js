import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import AboutFounders from './AboutFounders';
import AboutStory from './AboutStory';

const About = () => {

    const aboutData = [
        { "title": "qualified Teachers" ,"icon" : <i class="fas fa-user-tie"></i>},
        { "title": "Equiped class rooms", "icon" : <i class="fas fa-person-booth"></i> },
        { "title": "advanced teaching" , "icon" : <i class="fas fa-graduation-cap"></i>},
        { "title": "advanced study" , "icon" : <i class="fab fa-react"></i>},
        { "title": "focus on target", "icon" : <i class="fas fa-bullseye"></i>},
        { "title": "focus on success" , "icon" : <i class="fas fa-running"></i>},
    ]
    return (
        <div className="about-container">
            <Header />
           <div className="about-choose">
           <Container className="py-5">
                <div className="text-center border-style">
                    <h3>Why choose Arp</h3>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>

                <Row>
                    {
                        aboutData.map(data => {
                            return <Col md={4} className="text-center mb-4">
                               <div className="mx-2 shadow p-4 bg-white rounded">
                                   <h1 style={{color : "#38ef7d"}}>{data.icon}</h1>
                               <h4 className="text-uppercase">{data.title}</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, magni debitis quae iure possimus quisquam architecto ipsum labore praesentium at!</p>
                               </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
           </div>

           {/* ------------------about story-------------- */}
           <div className="my-5">
                    <AboutStory/>
           </div>

           {/* ------------------------about founders ---------- */}
                    <div className="about-founders py-5">
                        <AboutFounders/>
                    </div>

            <Footer />
        </div>
    );
};

export default About;