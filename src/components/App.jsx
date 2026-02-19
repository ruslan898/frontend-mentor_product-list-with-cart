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
  return (
    <div className="container">
      <div className="app">
        <Menu>
          <Title variant="main">Desserts</Title>
          <div className="menu-grid">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </Menu>
        <Cart>
          <Title variant="cart">Your Cart (0)</Title>
          <EmptyPlaceholder />
          {/* <Order>
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </Order> */}
        </Cart>

        {/* <Modal /> */}
      </div>
    </div>
  );
}
