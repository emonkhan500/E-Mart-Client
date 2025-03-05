import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const VendorList = () => {
    return (
        <div>
            <div className='text-center mt-8 '>
                <h1 className='text-7xl text-[#253D4E] font-bold'>Vendors List</h1>
                <div className="flex items-center justify-center mt-8 ">
            <input
              className="w-3/6 py-5 pl-12 border-2 outline-none rounded-full shadow-lg"
              placeholder="Search For Vendors..."
            />
            <IoIosSearch className="relative top-[1px] -left-[55px] md:-left-[65px] lg:-left-[90px] text-[#424242] text-2xl" />
          </div>
            </div>
        </div>
    );
};

export default VendorList;



// w-[250px] md:w-[250px] lg:w-[380px]