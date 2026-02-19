import CarbonNeutralInfo from '../carbonNeutralInfo/CarbonNeutralInfo';
import Button from '../button/Button';

import './order.scss';

export default function Order({ variant, children, cartData = [], onClick }) {
  const totalPrice = cartData.reduce((total, item) => {
    const { price, quantity } = item;
    return price * quantity + total;
  }, 0);

  return (
    <div className="order">
      <ul className="order-list">{children}</ul>
      <div className="order-total">
        <p className="order-total-text">Order Total</p>
        <span className="order-total-price">${totalPrice.toFixed(2)}</span>
      </div>
      {variant !== 'modal' && (
        <>
          <CarbonNeutralInfo />
          <Button variant="primary" onClick={onClick}>
            Confirm Order
          </Button>
        </>
      )}
    </div>
  );
}
