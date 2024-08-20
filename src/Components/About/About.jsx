import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgblog1 from "../../Assets/Image/blog-1.jpg"
import imgblog2 from "../../Assets/Image/blog-2.jpg"
import imgblog3 from "../../Assets/Image/blog-3.jpg"

const About = () => {
  return (
    <div>
      <h1 class="text-primary mb-3">Our services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgblog1} />
                <Card.Body>
                <Card.Title>Foods that are good for your hair growing</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>
          <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgblog2} />
                <Card.Body>
                <Card.Title>How to take care of hair naturally</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>
          <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgblog3} />
                <Card.Body>
                <Card.Title>How to use our natural & organic shampoo</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About