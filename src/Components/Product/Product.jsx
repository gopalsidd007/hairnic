import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from  '../../Assets/Image/sunsilk1.jpeg'
import img2 from '../../Assets/Image/sunsilk2.jpg'
import img3 from '../../Assets/Image/sunsilk3.jpg'
const Product= () => {
  return (
    <div>
      <h1 class="text-primary mb-3"><span class="">Our Natural</span> Hair Products</h1>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
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
                <Card.Img variant="top" src={img1} height={300} width={100}/>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
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
                <Card.Img variant="top" src={img3}/>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
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

export default Product