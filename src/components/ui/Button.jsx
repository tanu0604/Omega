// src/components/ui/button.js
export function Button({ children, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}
