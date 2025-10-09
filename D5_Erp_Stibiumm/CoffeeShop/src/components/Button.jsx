import clsx from "clsx";

export default function Button({ variant = 'primary', size = 'md', children, className, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md transition-colors';
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg'
  };
  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-primary-700 focus:ring-primary-400 dark:bg-primary-500 dark:hover:bg-primary-600',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-white/5',
    outline: 'border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
