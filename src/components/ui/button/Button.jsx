import clsx from 'clsx';

import './button.scss';

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}) {
  const classes = clsx(`btn-${variant}`, className);

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
