import React from 'react';
import {Container, Row } from 'react-bootstrap';
import { newsData } from './NewsData';
import NewsDetails from './NewsDetails';

const News = () => {
    return (
        <Container className="my-5">
              <div className="text-center border-style">
              <h3>News and Events</h3>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>

          <Row>
             {
                 newsData.map(data => <NewsDetails news={data} key={data.id} />)
             }
          </Row>
        </Container>
    );
};

export default News;