import { IoIosArrowForward, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const ShareHead = ({ pageTitle }) => {
  return (
    
      <div
        className="quick relative bg-cover bg-center h-[150px] md:h-[200px]  items-center p-2 rounded-lg shadow-md mb-4"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/rfsYk1jf/header-bg.png')",
        }}
      >
        <h1 className="text-4xl text-center font-bold text-primary-text mt-6">
          {pageTitle}
        </h1>

        <div className="flex items-center gap-4 justify-center mt-6  font-medium">
          <Link
            to="/"
            className="flex justify-center items-center gap-2 text-xl"
          >
            <IoMdHome className="text-primary-green " /> Home
          </Link>
          <h1 className="text-primary-gray  flex justify-center items-center gap-2 text-xl">
            <IoIosArrowForward /> {pageTitle}
          </h1>
        </div>
      </div>
 
  );
};

export default ShareHead;
