import clsx from 'clsx';

function Container({ className, ...props }) {
  return (
    <div className={clsx('mx-auto max-w-3xl px-4', className)} {...props} />
  );
}

export default Container;
