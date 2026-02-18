import Button from '../button/Button';

import './orderItem.scss';

import removeItemIcon from '/src/assets/images/icon-remove-item.svg';

export default function OrderItem() {
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
        <img src={removeItemIcon} alt="Remove item" />
      </Button>
    </li>
  );
}
