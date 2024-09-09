import React from 'react';

const Button = ({ type, title, onClick, otherClasses }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${otherClasses} bg-slate-800 p-2 rounded w-[100%] text-white font-[600]`}
    >
      {title}
    </button>
  );
};

export default Button;
