import React from 'react';

const Input = ({ label, name, value, onChange, error, placeholder, Icon }) => {
  const handleChangeField = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div className="relative mt-5">
      <label className="font-[600]">{label}</label>
      <div className="border rounded overflow-hidden p-2 flex items-center mt-2">
        {Icon && <Icon />}
        <input
          className="w-[100%] ml-2 outline-none"
          placeholder={placeholder}
          name={name}
          onChange={handleChangeField}
          value={value}
        />
      </div>
      <span className="text-[14px] text-red-500 font-[600] absolute mt-[0px]">
        {error}
      </span>
    </div>
  );
};

export default Input;
