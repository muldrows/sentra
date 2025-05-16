export function Button({ children, variant = 'default', ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    destructive: "bg-red-600 hover:bg-red-700"
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
