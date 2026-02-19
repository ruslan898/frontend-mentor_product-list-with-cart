import Button from '../button/Button';

import './orderItem.scss';

import RemoveItemIcon from '/src/assets/images/icon-remove-item.svg?react';

export default function OrderItem({ variant, data, onClick }) {
  const {
    name,
    price,
    id,
    quantity,
    image: { thumbnail },
  } = data;

  if (variant === 'modal') {
    return (
      <li className="order-item">
        {thumbnail && <img src={thumbnail} alt={`An image of ${name}`} />}
        <div className="order-item-info">
          <h3 className="order-item-title">{name}</h3>
          <div className="order-item-values">
            <span className="order-item-quantity">{quantity}x</span>
            <span className="order-item-price">@ ${price.toFixed(2)}</span>
          </div>
        </div>
        <span className="order-item-total">
          ${(quantity * price).toFixed(2)}
        </span>
      </li>
    );
  }

  return (
    <li className="order-item">
      <div className="order-item-info">
        <h3 className="order-item-title">{name}</h3>
        <div className="order-item-values">
          <span className="order-item-quantity">{quantity}x</span>
          <span className="order-item-price">@ ${price.toFixed(2)}</span>
          <span className="order-item-total">
            ${(quantity * price).toFixed(2)}
          </span>
        </div>
      </div>
      <Button variant="remove" onClick={() => onClick(id, 'remove')}>
        <RemoveItemIcon className="icon" />
      </Button>
    </li>
  );
}
