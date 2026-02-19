import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Menu from './ui/menu/Menu';
import Title from './ui/title/Title';
import MenuItem from './ui/menuItem/MenuItem';
import Cart from './ui/cart/Cart';
import EmptyPlaceholder from './ui/emptyPlaceholder/EmptyPlaceholder';
import Order from './ui/order/Order';
import OrderItem from './ui/orderItem/OrderItem';
import Modal from './ui/modal/Modal';

import './App.scss';

export default function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/data.json');
      const data = await res.json();
      setMenu(() => data.map((item) => ({ ...item, id: uuidv4() })));
    }

    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalShown ? 'hidden' : '';
  }, [modalShown]);

  const menuItems = menu.map((menuItem) => {
    return (
      <MenuItem
        key={menuItem.id}
        data={menuItem}
        onClick={manageCart}
        cartData={cart}
      />
    );
  });

  const cartItems = cart.map((item) => {
    return <OrderItem key={item.id} data={item} onClick={manageCart} />;
  });

  function manageCart(id, action) {
    const menuItem = menu.find((item) => item.id === id);
    const cartItem = cart.find((item) => item.id === id);

    setCart((prevVal) => {
      if (action === 'add') {
        return [...prevVal, { ...menuItem, quantity: 1 }];
      }

      if (cartItem && action === 'increment') {
        return prevVal.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item },
        );
      }

      if (cartItem && action === 'decrement') {
        const itemQuantity = cartItem.quantity;

        return itemQuantity > 1
          ? prevVal.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item },
            )
          : prevVal.filter((item) => item.quantity > 1);
      }

      if (action === 'remove') {
        return prevVal.filter((item) => item.id !== id);
      }
    });
  }

  function toggleModal(status) {
    if (status === 'on') {
      setModalShown(true);
    } else {
      setModalShown(false);
      setCart([]);
    }
  }

  return (
    <div className="container">
      <div className="app">
        <Menu>
          <Title variant="main">Desserts</Title>
          <div className="menu-grid">{menuItems}</div>
        </Menu>
        <Cart>
          <Title variant="cart">Your Cart ({cart.length})</Title>
          {cart.length > 0 ? (
            <Order cartData={cart} onClick={() => toggleModal('on')}>
              {cartItems}
            </Order>
          ) : (
            <EmptyPlaceholder />
          )}
        </Cart>

        {modalShown && <Modal cartData={cart} onClick={toggleModal} />}
      </div>
    </div>
  );
}
