import OrderItem from '../orderItem/OrderItem';
import CarbonNeutralInfo from '../carbonNeutralInfo/CarbonNeutralInfo';
import Button from '../button/Button';

import './order.scss';

export default function Order() {
  return (
    <div className="order">
      <ul className="order-list">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
      <div className="order-total">
        <p className="order-total-text">Order Total</p>
        <span className="order-total-price">$46.50</span>
      </div>
      <CarbonNeutralInfo />
      <Button variant="primary">Confirm Order</Button>
    </div>
  );
}
