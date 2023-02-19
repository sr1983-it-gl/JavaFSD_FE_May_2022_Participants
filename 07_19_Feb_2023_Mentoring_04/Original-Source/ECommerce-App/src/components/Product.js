import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='product-style'>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>&#x20B9;{product.price}</div>
      <div>
        <button className='add-to-cart' onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
