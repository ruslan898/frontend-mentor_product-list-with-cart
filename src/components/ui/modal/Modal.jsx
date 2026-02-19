import Order from '../order/Order';
import OrderItem from '../orderItem/OrderItem';
import Button from '../button/Button';

import './modal.scss';

import orderConfirmedIcon from '/src/assets/images/icon-order-confirmed.svg';

export default function Modal({ cartData, onClick }) {
  const orderItems = cartData.map((item) => (
    <OrderItem key={item.id} variant="modal" data={item} />
  ));

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
          <Order variant="modal" cartData={cartData}>
            {orderItems}
          </Order>
        </div>
        <Button
          onClick={() => {
            onClick('off');
          }}
        >
          Start New Order
        </Button>
      </div>
    </div>
  );
}
