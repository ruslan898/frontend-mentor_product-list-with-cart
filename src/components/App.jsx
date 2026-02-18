import Title from './ui/title/Title';
import MenuItem from './ui/menuItem/MenuItem';

import './App.scss';

export default function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="menu">
          <Title variant='main'>Desserts</Title>
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
        </div>
        <div className="cart">
          <h2>Hello world</h2>
        </div>
      </div>
    </div>
  );
}
