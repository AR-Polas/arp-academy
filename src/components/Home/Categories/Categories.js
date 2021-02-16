import React from 'react';
import {Container, Row } from 'react-bootstrap';
import { categoriesData } from './CategoriesData';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    return (
        <Container className="my-5">
            <div className="text-center border-style">
                <h3>ARP Categories Courses</h3>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>

            <Row>
                {
                    categoriesData.map(data => <CategoriesDetails category={data} key={data.id} />)
                }
            </Row>
        </Container>
    );
};

export default Categories;