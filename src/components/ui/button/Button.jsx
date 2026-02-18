import clsx from 'clsx';

import './button.scss';

export default function Button({ children, className, variant = 'primary' }) {
  const classes = clsx(`btn-${variant}`, className);

  return <button className={classes}>{children}</button>;
}
