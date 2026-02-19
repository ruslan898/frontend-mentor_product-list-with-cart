import CarbonNeutralInfo from '../carbonNeutralInfo/CarbonNeutralInfo';
import Button from '../button/Button';

import './order.scss';

export default function Order({ variant, children }) {
  return (
    <div className="order">
      <ul className="order-list">
        {children}
      </ul>
      <div className="order-total">
        <p className="order-total-text">Order Total</p>
        <span className="order-total-price">$46.50</span>
      </div>
      {variant !== 'modal' && (
        <>
          <CarbonNeutralInfo />
          <Button variant="primary">Confirm Order</Button>
        </>
      )}
    </div>
  );
}
