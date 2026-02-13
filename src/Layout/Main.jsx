
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div className="dark:bg-white w-full  ">
      <Nav></Nav>
      <div className="px-3  lg:px-4 xl:px-12 mx-auto mb-9">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
