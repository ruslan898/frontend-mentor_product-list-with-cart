import './cart.scss'

export default function Cart({children}) {
  return (
    <aside className="cart" aria-label='Shopping cart'>
      {children}
    </aside>
  )
}