import SharedNewsletter from "../../Shared/SharedNewsletter";
import ShareHead from "../../Shared/ShareHead";
import Team from "../About/Team";
import Help from "./Help";
import Message from "./Message";

const Contact = () => {
  return (
    <div className="lato ">
      <div>
        <ShareHead pageTitle={"Contact"}></ShareHead>
        <Help></Help>
        <Message></Message>
        <Team></Team>
        <SharedNewsletter></SharedNewsletter>
      </div>
    </div>
  );
};

export default Contact;
