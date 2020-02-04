import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Body, Text, Title } from 'react-bootstrap';

import products from './products.json';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { id, name, description } = this.props;
    return (
      <div className="container">
        <Card className="product-card">
          <Card.Body>{id}
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ProductCard;
