import './menu.scss'

export default function Menu({children}) {
  return (
    <section className="menu" aria-label='Dessert menu'>
      {children}
    </section>
  )
}