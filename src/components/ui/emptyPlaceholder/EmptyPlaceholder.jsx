import './emptyPlaceholder.scss'

import emptyCartIcon from '/src/assets/images/illustration-empty-cart.svg'

export default function EmptyPlaceholder() {
  return (
    <div className="empty-placeholder">
      <img src={emptyCartIcon} alt="Empty cart icon" />
      <p className="empty-placeholder-text">
        Your added items will appear here
      </p>
    </div>
  );
}