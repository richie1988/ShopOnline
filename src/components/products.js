import React from 'react';
import Product from './product';
import ItemsData from './productData';

const Products = () => {
  const productData = ItemsData();
  return (
    <div>
      <ul className="products-container">
        {productData.map((product) => (
          <li key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
