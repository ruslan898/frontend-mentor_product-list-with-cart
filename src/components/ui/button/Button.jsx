import clsx from 'clsx';

import './button.scss';

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}) {
  const classes = clsx(`btn-${variant}`, className);

  if (variant === 'add_alternative') {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
