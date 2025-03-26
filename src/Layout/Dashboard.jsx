import React from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";

const Dashboard = () => {
  return (
    <div className=" w-full max-w-[1600px] px-3 md:px-8 lg:px-12 xl:px-16 mx-auto mb-9">
      <Nav></Nav>
      <ShareHead pageTitle={"DASHBOARD"}></ShareHead>
      {/* layout */}
      <div>
        <h1> started design dashboard</h1>
      </div>
      <Newsletter></Newsletter>
      <UpFooter></UpFooter>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
