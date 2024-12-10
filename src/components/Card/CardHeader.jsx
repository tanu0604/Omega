export function CardHeader({ children, className = "" }) {
  return (
    <div className={`bg-gray-100 p-4 border-b ${className}`}>
      {children}
    </div>
  );
}