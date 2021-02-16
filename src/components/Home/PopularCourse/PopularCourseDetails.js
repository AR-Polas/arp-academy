import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavContext } from '../../../App';

const PopularCourseDetails = ({ course }) => {
  const [navItem,setNavItem] = useContext(NavContext)
  const {id, title, subtitle, price, img, description, star, like, duration } = course;
  return (
    <div className="px-2">
      <Card className="shadow border-1 overflow-hidden">
        <div className="course-img-container">
          <Card.Img variant="top" className="course-img h-100" src={img} />
          <div class="middle">
          <Link to={`/courseDetails/${id}`}><button className="img-btn">Preview Course</button></Link>
          </div>
          <p className="course-price">${price}</p>
        </div>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Title>{title}
          </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text className="text-warning">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star text-dark"></i>
            <span className="text-dark">({star})</span>
          </Card.Text>
        </Card.Body>
        <div className="bg-transparent px-2 d-flex justify-content-between align-items-center">
            <p className="mt-3"> <span><i class="fas fa-clock"></i></span> {duration} </p>
            <p className="mt-3"> <span><i class="fas fa-thumbs-up"></i></span> {like}</p>
            <Link to={`/courseDetails/${id}`} onClick={() => setNavItem('courseDetails')}> <Button className=" course-btn">Enroll Now</Button></Link>
          </div>
      </Card>
    </div>
  );
};

export default PopularCourseDetails;