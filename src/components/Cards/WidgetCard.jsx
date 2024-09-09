import React from 'react';

const WidgetCard = ({ icon, title, value, subTitle }) => {
  return (
    // <div className="shadow p-4 rounded bg-white opacity-[0.8]">
    <div className="shadow p-4 rounded backdrop-blur-[20px] ">
      <div className="flex items-center relative">
        <div className="mr-4">{icon}</div>
        <div className="flex flex-col">
          <p className="font-[500] text-[16px] mb-0">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {subTitle && (
          <span className="absolute text-[12px] font-[600] right-[-10px] bottom-[-10px]">
            {subTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default WidgetCard;
