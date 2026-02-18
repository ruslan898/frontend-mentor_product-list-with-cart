import './title.scss'

export default function Title({ children, variant = 'main' }) {
  const classes = `title-${variant}`

  if (variant === 'main') {
    return <h1 className={classes}>{children}</h1>
  }
  if (variant === 'menu' || variant === 'cart') {
    return <h2 className={classes}>{children}</h2>
  }
}