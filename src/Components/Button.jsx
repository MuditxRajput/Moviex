import React, { useState } from 'react';

const Button = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSwitch = (val, index) => {
    setSelectedTab(index);
    onTabChange(val, index);
  };

  const coloredDivStyle = {
    left: `${selectedTab * 50}%`, // Assuming you have four tabs, adjust accordingly
    transition: 'left 0.3s ease', // Add transition for the left property
  };

  return (
    <div className='relative  w-24 lg:w-40 bg-white rounded-full  lg:py-1'>
      <div className='flex relative justify-center items-center '>
        {data?.map((val, index) => (
          <div
            key={index}
            className={`text-black px-4 text-xs lg:text-lg mt-1 lg:mt-0 lg:px-6 flex justify-center items-center cursor-pointer z-50`}
            onClick={() => handleSwitch(val, index)}
          >
            {val}
          </div>
        ))}
        <div
          className='absolute h-7 lg:h-9  mt-2 lg:mt-0 w-12 lg:w-20 rounded-full bg-gradient-to-r from-orange-600 to-pink-600'
          style={coloredDivStyle}
        />
      </div>
    </div>
  );
};

export default Button;
