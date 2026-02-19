import Order from '../order/Order';
import OrderItem from '../orderItem/OrderItem';
import Button from '../button/Button';

import './modal.scss';

import orderConfirmedIcon from '/src/assets/images/icon-order-confirmed.svg';
import mealImage from '/public/assets/images/image-tiramisu-thumbnail.jpg';

export default function Modal() {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-info">
          <img
            src={orderConfirmedIcon}
            alt="Checkmark icon"
            className="modal-checkmark"
          />
          <h2 className="modal-title">Order Confirmed</h2>
          <p className="modal-subtitle">We hope you enjoy your food!</p>
        </div>
        <div className="modal-order">
          <Order variant="modal">
            <OrderItem variant="modal" imageUrl={mealImage} />
            <OrderItem variant="modal" imageUrl={mealImage} />
            <OrderItem variant="modal" imageUrl={mealImage} />
          </Order>
        </div>
        <Button>Start New Order</Button>
      </div>
    </div>
  );
}
