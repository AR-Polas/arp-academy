import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutStory = () => {
    return (
        <>
             <div className="text-center border-style">
                    <h3>Our Origins and Story</h3>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <img src="https://i.ibb.co/RydwGXD/customer-2.png" alt="not found" className="w-50" />
                        </Col>

                        <Col md={6} xs={12}>
                            <p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos scaevola probatus. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>

                            <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>

                            <i>AR POLAS</i>
                            
                        </Col>
                    </Row>
                </Container>
        </>
    );
};

export default AboutStory;