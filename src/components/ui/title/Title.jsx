import clsx from 'clsx';

import './title.scss';

export default function Title({ children, className, variant = 'main' }) {
  const classes = clsx(`title-${variant}`, className);

  if (variant === 'main') {
    return <h1 className={classes}>{children}</h1>;
  }
  if (variant === 'menu' || variant === 'cart') {
    return <h2 className={classes}>{children}</h2>;
  }
}
