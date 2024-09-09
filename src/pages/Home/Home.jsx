import React, { useRef, useState } from 'react';
import WidgetCard from '../../components/Cards/WidgetCard';
import StackedBarChart from '../../components/Charts/BarChart';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { FaStore } from 'react-icons/fa';
import { AiOutlineOrderedList } from 'react-icons/ai';
import HorizontalBarChart from '../../components/Charts/HorizontalBarChart';
import Datatable from '../../components/Datatable/Datatable';
import { Calendar } from 'primereact/calendar';
import Button from '../../components/ui-elements/Button';

const Home = () => {
  const cards = [
    {
      id: 1,
      icon: <AiOutlineOrderedList size={50} />,
      title: 'Completed Orders',
      value: 5,
      subTitle: 'Last 30 days',
    },
    {
      id: 2,
      icon: <AiOutlineDollarCircle size={50} />,
      title: 'Sales',
      value: '$ 45980',
      subTitle: 'Last 30 days',
    },
    {
      id: 3,
      icon: <AiOutlineOrderedList size={50} />,
      title: 'Pending Orders',
      value: 10,
    },
    {
      id: 4,
      icon: <FaUsers size={50} />,
      title: 'Clients',
      value: 10,
    },
  ];
  const [dates, setDates] = useState(null);
  const [open, setOpen] = useState(false);
  const calRef = useRef(null);
  const footerTemplate = (props) => {
    return (
      <div class="flex flex-col">
        <Button
          title={'Last 7 Days'}
          onClick={() => {
            console.log({ func: 'Last 7 days', props, ref: calRef.current });
            setOpen(false);
            calRef.current.hide();
          }}
          type={'button'}
        />
        <Button
          title={'Last Month'}
          onClick={() => {
            console.log({ func: 'Last Month' });
            setOpen(false);
          }}
          type={'button'}
          otherClasses={'mt-5'}
        />
      </div>
    );
  };
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 mb-4 gap-4">
        {cards.map(({ id, icon, title, value, subTitle }) => (
          <WidgetCard
            icon={icon}
            title={title}
            value={value}
            subTitle={subTitle}
            key={id}
          />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-2 rounded shadow backdrop-blur-[10px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[24px] font-bold">Sales</h1>
            <div className="card flex justify-content-center">
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                readOnlyInput
                hideOnRangeSelection
                showButtonBar
                showIcon
                className="min-w-[300px] border border-[#ccc] rounded-[10px] px-3 py-2"
                inputClassName="bg-transparent text-center"
                footerTemplate={footerTemplate}
                template
                clearButtonClassName="hidden"
                todayButtonClassName="hidden"
                showWeek
                ref={calRef}
                placeholder="Select Custom range"
              />
            </div>
          </div>
          <StackedBarChart />
        </div>
        <div className="p-2 rounded shadow backdrop-blur-[10px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[24px] font-bold mb-4">Orders</h1>
            <div className="card flex justify-content-center">
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                readOnlyInput
                hideOnRangeSelection
                showButtonBar
                showIcon
                className="min-w-[300px] border border-[#ccc] rounded-[10px] px-3 py-2"
                inputClassName="bg-transparent text-center"
                footerTemplate={footerTemplate}
                template
                clearButtonClassName="hidden"
                todayButtonClassName="hidden"
                showWeek
                ref={calRef}
                placeholder="Select Custom range"
              />
            </div>
          </div>
          <HorizontalBarChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
        <div className="p-2 rounded shadow backdrop-blur-[10px]">
          <h1 className="text-[24px] font-bold mb-4">Sales</h1>
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Home;
