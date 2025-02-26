import React from 'react';

const Glory = () => {
    return (
        <div className="relative w-full mx-auto my-10 px-10">
      {/* Background Image with Overlay */}
      <div className="relative bg-cover bg-center h-48 flex items-center justify-center rounded-lg overflow-hidden" 
        style={{ backgroundImage: 'url(https://i.ibb.co.com/NcvGKjw/glory-bg.jpg)' }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#4B675A] bg-opacity-85"></div>
        
        {/* Stats Container */}
        <div className="relative z-10 flex justify-around w-full text-white text-center px-5">
          {['Glorious years', 'Happy clients', 'Projects complete', 'Team advisor', 'Products Sale'].map((text, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold">0+</span>
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Glory;