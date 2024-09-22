import React from 'react';
import { CgLogOut } from "react-icons/cg";

export const LogOut = () => {
  return (
    <div className='mt-auto '>
      <button className='bg-blue-500 text-white p-2 rounded-full transform transition-transform duration-300 hover:bg-gray-500 hover:scale-110'>
        <CgLogOut size={18  } />
      </button>
    </div>
  );
};
