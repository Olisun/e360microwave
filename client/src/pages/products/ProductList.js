import React, { Component } from 'react';

import products from './products.json';
import ProductCard from './ProductCard';


class ProductList extends Component {


  render() {
    return (
      <div className="Container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.productName}
            description={product.productDescription}
          />
        ))}
      </div>
    )
  }
}

export default ProductList;