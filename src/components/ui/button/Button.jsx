import './button.scss'

export default function Button({ children, variant = 'primary' }) {
  const classes = `btn-${variant}`

  return (
    <button className={classes}>{ children }</button>
  )
}