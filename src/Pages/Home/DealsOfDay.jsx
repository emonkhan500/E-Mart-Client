import { FaShoppingCart } from "react-icons/fa";

const DealsOfDay = () => {
  return (
    <div className="mt-16">
      <div className="md:my-7 my-4 pt-8 lg:pt-24 text-center">
        <h1 className="text-primary-text text-2xl md:text-4xl font-bold">
          Deals Of The Day
        </h1>
        <div className="flex justify-center mt-3 pr-7 mb-10">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      {/* deals div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {/* 1 */}
        <div>
          <div>
            <img src="https://i.ibb.co.com/fzsPYRrY/banner-5-png.png" alt="" />
          </div>
          {/* relative div */}
          <div className="relative w-11/12 md:w-10/12 lg:w-[280px] xl:w-[320px] bg-white rounded shadow px-3 py-1 -top-24 left-3">
            <h1 className="quick text-xl font-bold text-primary-text mt-1 mb-2">
              Seeds of Change Organic Quinoa, Brown & Rice
            </h1>
            <p>
              By <span className="text-primary-green">NestFood</span>
            </p>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>
            <div className="flex justify-between items-center px-6 mt-2 mb-2">
              <h1 className="text-primary-green text-lg font-semibold">
                $28.85
              </h1>
              <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green">
                <FaShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <img src="https://i.ibb.co.com/B5fR598G/banner-6-png.png" alt="" />
          </div>
          {/* relative div */}
          <div className="relative w-11/12 lg:w-[280px] xl:w-[320px] bg-white rounded shadow px-3 py-1 -top-24 left-3">
            <h1 className="quick text-xl font-bold text-primary-text mt-1 mb-2">
              Seeds of Change Organic Quinoa, Brown & Rice
            </h1>
            <p>
              By <span className="text-primary-green">NestFood</span>
            </p>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>
            <div className="flex justify-between items-center px-6 mt-2 mb-2">
              <h1 className="text-primary-green text-lg font-semibold">
                $28.85
              </h1>
              <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green">
                <FaShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <img src="https://i.ibb.co.com/fzsPYRrY/banner-5-png.png" alt="" />
          </div>
          {/* relative div */}
          <div className="relative w-11/12 lg:w-[280px] xl:w-[320px] bg-white rounded shadow px-3 py-1 -top-24 left-3">
            <h1 className="quick text-xl font-bold text-primary-text mt-1 mb-2">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </h1>
            <p>
              By <span className="text-primary-green">NestFood</span>
            </p>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>
            <div className="flex justify-between items-center px-6 mt-2 mb-2">
              <h1 className="text-primary-green text-lg font-semibold">
                $28.85
              </h1>
              <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green">
                <FaShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <img src="https://i.ibb.co.com/wF3gMBGG/banner-8-png.png" alt="" />
          </div>
          {/* relative div */}
          <div className="relative w-11/12 lg:w-[280px] xl:w-[320px] bg-white rounded shadow px-3 py-1 -top-24 left-3">
            <h1 className="quick text-xl font-bold text-primary-text mt-1 mb-2">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </h1>
            <p>
              By <span className="text-primary-green">NestFood</span>
            </p>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>
            <div className="flex justify-between items-center px-6 mt-2 mb-2">
              <h1 className="text-primary-green text-lg font-semibold">
                $28.85
              </h1>
              <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green">
                <FaShoppingCart /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfDay;
