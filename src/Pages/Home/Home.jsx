import Banner from "./Banner";
import Featured from "./Featured";
import UnderFeature from "./UnderFeature";
import UpFooter from "./UpFooter";
import Newsletter from "./Newsletter";
import Popular from "./Popular";
import DealsOfDay from "./DealsOfDay";
import DailyBestDeal from "./DailyBestDeal";
import LatestProduct from "./LatestProduct";

const Home = () => {
  return (
    <div className=" lg:mt-10   ">
      <Banner/>
      <Featured/>
      <UnderFeature/>
      <Popular/>
      <DailyBestDeal/>
      <LatestProduct/>
      <DealsOfDay/>
      <Newsletter/>
      <UpFooter/>
    </div>
  );
};

export default Home;
