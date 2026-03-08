import ShareHead from "../../Shared/ShareHead";
import DealsOfDay from "../Home/DealsOfDay";
import SharedNewsletter from "../../Shared/SharedNewsletter";
import Products from "./Products";

const Shop = () => {
  return (
    <div>
      <ShareHead pageTitle={"Shop"} />
      <Products />
      <DealsOfDay />
      <SharedNewsletter />
    </div>
  );
};

export default Shop;
