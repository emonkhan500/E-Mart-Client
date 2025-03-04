import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const BlogContent = () => {
    return (
        <div className='quick mt-10'>
            <div>
                <div className='border-t-4 mt-8  border-[#3BB77E] flex items-center justify-between px-3 md:px-20 lg:px-32'>
                   <div className='flex items-center gap-6 mt-10'>
                   <img src="https://i.ibb.co.com/fV6RhZjz/category-1-svg.png" alt="" />
                    <h1 className='text-5xl text-[#253D4E] font-bold'> Recipes Articles</h1>
                   </div>
                    <div className="flex items-center justify-center mt-10">
          <input
            className="md:w-[250px] lg:w-[380px] py-5 pl-12 border-2   outline-none"
            placeholder="Search For Items..."
          />
          <IoIosSearch className="relative top-[1px] -left-[90px] text-[#424242] text-[1.3rem]" />
        </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;