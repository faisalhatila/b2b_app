import React from 'react';
import { FaUser } from 'react-icons/fa';

const Chatroom = ({ name, unRead, lastMessage, sender }) => {
  return (
    <div className="flex items-center border-b-[1px] border-b-[#888] mb-2 p-2 relative cursor-pointer">
      <div className="flex-shrink-0">
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full shadow bg-slate-600">
          <FaUser size={20} color="#eee" />
        </div>
      </div>
      <div className="ml-2 flex items-center justify-between flex-1">
        <div className="flex-1">
          <p className="text-sm sm:text-base">{name}</p>
          <p className="text-[11px] sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] sm:max-w-[180px]">{`${
            sender === 'you' ? 'You: ' : ''
          }${lastMessage}`}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[10px] sm:text-xs min-w-5 h-5 rounded-full flex justify-center items-center right-0 top-5 px-1">
            Yesterday
          </span>
          <span className="bg-gray-800 font-bold text-[10px] sm:text-xs min-w-5 h-5 rounded-full flex justify-center items-center right-0 top-5 text-cyan px-1 text-[cyan]">
            {unRead}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
