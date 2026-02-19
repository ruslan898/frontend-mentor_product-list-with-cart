import Button from '../button/Button';

import './orderItem.scss';

import RemoveItemIcon from '/src/assets/images/icon-remove-item.svg?react';

export default function OrderItem({ variant, imageUrl }) {
  if (variant === 'modal') {
    return (
      <li className="order-item">
        {imageUrl && <img src={imageUrl} alt="A photo of an ordered meal" />}
        <div className="order-item-info">
          <h3 className="order-item-title">Classic Tiramisu</h3>
          <div className="order-item-values">
            <span className="order-item-quantity">1x</span>
            <span className="order-item-price">@ $5.50</span>
          </div>
        </div>
        <span className="order-item-total">$5.50</span>
      </li>
    );
  }

  return (
    <li className="order-item">
      <div className="order-item-info">
        <h3 className="order-item-title">Classic Tiramisu</h3>
        <div className="order-item-values">
          <span className="order-item-quantity">1x</span>
          <span className="order-item-price">@ $5.50</span>
          <span className="order-item-total">$5.50</span>
        </div>
      </div>
      <Button variant="remove">
        <RemoveItemIcon className="icon" />
      </Button>
    </li>
  );
}
