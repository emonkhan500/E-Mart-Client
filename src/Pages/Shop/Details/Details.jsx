import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const products = [
        {
          id: 1,
          name: "Chen Cardigan",
          price: 99.5,
          image: "https://i.ibb.co/mCFXymfH/thumbnail-4-jpg.png",
        },
        {
          id: 2,
          name: "Chen Sweater",
          price: 89.5,
          image: "https://i.ibb.co/4RJ5nQ0v/thumbnail-5-jpg.png",
        },
        {
          id: 3,
          name: "Colorful Jacket",
          price: 25,
          image: "https://i.ibb.co/ZR9JHp3b/thumbnail-6-jpg.png",
        },
      ];
    const { id } = useParams();
    console.log(id);
    return (
        <div className='flex gap-4'>
           <div className='md:w-3/4'>
           <h1>This is Details page</h1>
           </div>
            {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-10">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-2 w-full max-w-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Category</h2>
        <div className="w-16 h-1 bg-teal-500 mt-2 rounded-full"></div>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {/* Milks & Dairies */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-2.svg.png" alt="Milks & Dairies" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">
              Milks & Dairies
            </span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            3
          </div>
        </div>

        {/* Clothing */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/icon-1.svg.png" alt="Clothing" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Clothing</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            4
          </div>
        </div>

        {/* Pet Foods */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-4.svg.png" alt="Pet Foods" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Pet Foods</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            5
          </div>
        </div>

        {/* Baking material */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-5.svg.png" alt="Baking material" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">
              Baking material
            </span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            8
          </div>
        </div>

        {/* Fresh Fruit */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-1.svg.png" alt="Fresh Fruit" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Fresh Fruit</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            10
          </div>
        </div>
      </div>
    </div>
          

          {/* New Products */}
          <div className="max-w-sm bg-white shadow-lg rounded-xl p-6 ">
            <h2 className="text-xl font-semibold text-[#253D4E]">
              New Products
            </h2>
            <div className="mt-4 space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 border-b pb-3 last:border-b-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-md"
                  />
                  <div>
                    <h3 className="text-green-600 font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
};

export default Details;