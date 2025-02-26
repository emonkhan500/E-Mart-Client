import React from 'react';

const Glory = () => {
    return (
        <div className="quick relative w-full mx-auto my-10 px-5 md:px-10">
      {/* Background Image with Overlay */}
      <div className="p-5 md:p-0 relative bg-cover bg-center md:h-56 flex items-center justify-center rounded-lg overflow-hidden" 
        style={{ backgroundImage: 'url(https://i.ibb.co.com/NcvGKjw/glory-bg.jpg)' }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#4B675A] bg-opacity-85"></div>
        
        {/* Stats Container */}
        <div className="relative z-10 flex justify-around w-full text-white text-center px-5">
          <div className='grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-36'>
            <div className='flex flex-col'>
            <span className=" text-3xl lg:text-4xl font-bold">2 +</span>
              <span className="text-lg lg:text-xl font-semibold">Glorious years</span>
            </div>
            <div className='flex flex-col'>
            <span className=" text-3xl lg:text-4xl font-bold">10k +</span>
              <span className="text-lg lg:text-xl font-semibold">Happy clients</span>
            </div>
            <div className='flex flex-col'>
            <span className=" text-3xl lg:text-4xl font-bold">100 +</span>
              <span className="text-lg lg:text-xl font-semibold">Projects complete</span>
            </div>
            <div className='flex flex-col'>
            <span className=" text-3xl lg:text-4xl font-bold">50k +</span>
              <span className="text-lg lg:text-xl font-semibold">Products Sale</span>
            </div>
            <div className='flex flex-col'>
            <span className=" text-3xl lg:text-4xl font-bold">100 +</span>
              <span className="text-lg lg:text-xl font-semibold">Team advisor</span>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Glory;