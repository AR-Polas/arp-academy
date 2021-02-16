import React from 'react';
import { Col } from 'react-bootstrap';

const CategoriesDetails = ({category}) => {
    const {subject,quantity,img} = category;
    return (
        <Col md={4} xs={12} className="mb-2">
        <div className="course-img-container">
            <img className="course-img h-100 rounded" src={img} alt="not found" />
            <div class="category-title">
                <h5><span><i class="fas fa-book-open"></i></span> {quantity} Programmes</h5>
                <h4>{subject}</h4>
            </div>
        </div>
        </Col>
    );
};

export default CategoriesDetails;