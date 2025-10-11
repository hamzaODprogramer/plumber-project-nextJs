import React from 'react';

export default function Input({
  placeholder,
  type,
  icon,
  className,
  classNameContainer,
}: InputProps): React.ReactNode {
  return (
    <div
      className={`flex flex-row-reverse justify-start bg-white p-3.5 gap-2 items-center focus-within:ring-2 focus-within:ring-blue-500 ${classNameContainer}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={` outline-none flex-1 bg-white ${className}`}
      />
      {icon}
    </div>
  );
}
