
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useState } from 'react';

function Product(props) {
    const [counter,setCounter]=useState(0);
  return (
    <div className='container'>
    <Col md={4} className="mb-4"> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.product.image} alt="Product Image" />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>{props.product.price}</Card.Text>
          <Button variant="primary" onClick={()=>setCounter(counter+1)}>Add to Cart {counter}</Button>
        </Card.Body>
      </Card>
    </Col></div>

  );
}

export default Product;
