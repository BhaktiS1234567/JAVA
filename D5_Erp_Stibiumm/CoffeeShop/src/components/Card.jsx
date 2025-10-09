import clsx from "clsx";


export default function Card({ title, children, className }) {
  return (
    <div className={clsx('bg-[#FAF9EE] dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-sm p-4', className)}>
      {title && <h3 className="text-sm font-semibold mb-2">{title}</h3>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
