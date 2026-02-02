import React from "react";
import SharedNewsletter from "../../Shared/SharedNewsletter";
import Help from "./Help";
import Message from "./Message";
import Team from "../About/Team";
import ShareHead from "../../Shared/ShareHead";

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
