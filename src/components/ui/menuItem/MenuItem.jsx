import Title from '../title/Title';
import Button from '../button/Button';

import './menuItem.scss';

import addToCartIcon from '/src/assets/images/icon-add-to-cart.svg';
import DecrementIcon from '/src/assets/images/icon-decrement-quantity.svg?react';
import IncrementIcon from '/src/assets/images/icon-increment-quantity.svg?react';

export default function MenuItem({ data, onClick, cartData, windowWidth }) {
  const {
    category,
    name,
    price,
    id,
    image: { desktop, mobile, tablet },
  } = data;

  const currentImage =
    windowWidth < 768 ? mobile : windowWidth < 1024 ? tablet : desktop;

  const itemInCart = cartData.find((item) => item.id === id);
  const cartQuantity = itemInCart ? itemInCart.quantity : 1;

  return (
    <section className="menu-item">
      <div className="menu-item-img">
        <img src={currentImage} alt={`An image of ${name}`} />
        {!itemInCart ? (
          <Button variant="add" onClick={() => onClick(id, 'add')}>
            <img src={addToCartIcon} alt="An icon of a shopping cart" />
            <span className="btn-text">Add to cart</span>
          </Button>
        ) : (
          <Button variant="add_alternative">
            <span>
              <Button
                variant="quantity"
                onClick={() => onClick(id, 'decrement')}
              >
                <DecrementIcon className="icon" />
              </Button>
            </span>
            <span className="btn-text">{cartQuantity}</span>
            <span>
              <Button
                variant="quantity"
                onClick={() => onClick(id, 'increment')}
              >
                <IncrementIcon className="icon" />
              </Button>
            </span>
          </Button>
        )}
      </div>
      <div className="menu-item-descr">
        <p className="menu-item-category">{category}</p>
        <Title variant="menu">{name}</Title>
        <p className="menu-item-price">${price.toFixed(2)}</p>
      </div>
    </section>
  );
}
