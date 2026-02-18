import Title from '../title/Title';
import Button from '../button/Button';

import './menuItem.scss';

export default function MenuItem() {
  return (
    <section className="menu-item">
      <div className="menu-item-img">
        <img src="/public/assets/images/image-waffle-mobile.jpg" alt="Image" />
        <Button variant="menu">
          <img
            src="/src/assets/images/icon-add-to-cart.svg"
            alt="Add to cart"
          />
          <span className="btn-text">Add to cart</span>
        </Button>
      </div>
      <div className="menu-item-descr">
        <p className="menu-item-category">Waffle</p>
        <Title variant="menu">Waffle with Berries</Title>
        <p className="menu-item-price">$6.50</p>
      </div>
    </section>
  );
}
