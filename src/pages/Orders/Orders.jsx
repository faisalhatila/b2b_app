import React from 'react';
import Datatable from '../../components/Datatable/Datatable';

const Orders = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 mt-5">
        <div className="p-2 rounded shadow backdrop-blur-[10px]">
          <h1 className="text-[24px] font-bold mb-4">Orders</h1>
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
