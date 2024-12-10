// src/components/ui/input.js
export function Input({ type = "text", value, onChange, id, placeholder, className = "" }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
}
