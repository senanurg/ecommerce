import React from 'react';
import './item.css';

function Item({ itemId, image, category, price, title, onAction }) {
  return (
    <div className='Cartitem' id={itemId}>
      <img src={image} alt={title} />
      <div className='details'>
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h5>
          {price} <p>TL.</p>{" "}
        </h5>
        <h2>{price}</h2>
        <button className='delete' onClick={() => onAction('remove')}>
          Sil
        </button>
      </div>
      <div className='quantity'>
        <button className='plus' onClick={() => onAction('+')}>
          +
        </button>
        <p className='amount'>1</p>
        <button className='minus' onClick={() => onAction('-')}>
          -
        </button>
      </div>
    </div>
  );
}

export default Item;
