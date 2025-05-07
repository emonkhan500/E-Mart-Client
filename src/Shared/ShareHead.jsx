import { IoIosArrowForward, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const ShareHead = ({pageTitle}) => {
    return (
        <div>
            <div
      className="quick relative bg-cover bg-center h-[150px] md:h-[200px]  items-center p-2 rounded-lg shadow-md"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/rfsYk1jf/header-bg.png')",
      }}
    >
      <h1 className="text-4xl text-center font-bold text-[#253D4E] mt-6">
      {pageTitle}
      </h1>

      <div className="flex items-center gap-4 justify-center mt-6  font-medium"> 
        <Link to='/'   className="flex justify-center items-center gap-2 text-xl"><IoMdHome className="text-[#3BB77E] "/> Home</Link>
        <h1 className="text-[#7E7E7E]  flex justify-center items-center gap-2 text-xl"><IoIosArrowForward />  {pageTitle}</h1>
      </div>
    </div>
        </div>
    );
};

export default ShareHead;