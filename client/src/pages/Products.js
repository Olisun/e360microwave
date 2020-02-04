import React, { Component } from 'react';

import products from '../components/products/products.json';
import ProductCard from '../components/products/ProductCard';


class ProductsPage extends Component {


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

export default ProductsPage;