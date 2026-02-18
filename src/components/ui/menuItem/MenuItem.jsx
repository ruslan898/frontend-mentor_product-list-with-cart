import Title from '../title/Title';
import Button from '../button/Button';

import './menuItem.scss';

import addToCartIcon from '/src/assets/images/icon-add-to-cart.svg';
import DecrementIcon from '/src/assets/images/icon-decrement-quantity.svg?react';
import IncrementIcon from '/src/assets/images/icon-increment-quantity.svg?react';


export default function MenuItem() {
  return (
    <section className="menu-item">
      <div className="menu-item-img">
        <img src="/public/assets/images/image-waffle-mobile.jpg" alt="Image" />
        <Button variant="add">
          <img
            src={addToCartIcon}
            alt="Add to cart"
          />
          <span className="btn-text">Add to cart</span>
        </Button>
        {/* <Button variant="add_alternative">
          <Button variant="quantity">
            <DecrementIcon className="icon" />
          </Button>
          <span className="btn-text">4</span>
          <Button variant="quantity">
            <IncrementIcon className="icon" />
          </Button>
        </Button> */}
      </div>
      <div className="menu-item-descr">
        <p className="menu-item-category">Waffle</p>
        <Title variant="menu">Waffle with Berries</Title>
        <p className="menu-item-price">$6.50</p>
      </div>
    </section>
  );
}
