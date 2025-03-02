import React from "react";

const Help = () => {
  return (
    <div className="flex border py-4 px-2 flex-col md:flex-row lg:flex-row  gap-0 md:gap-3 lg:gap-6 mb-10">
      <div className="space-y-4 md:w-5/6 lg:w-1/3">
        <h1 className="text-[#3BB77E] text-lg font-bold quick">How can help you ?</h1>
        <h1 className="text-3xl text-[#253D4E] font-bold">Let us know how
we can help you</h1>
        <p className="text-[#7E7E7E]">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 lg:w-2/3">
        <div>
          <h1 className="text-[#3BB77E] text-2xl pb-3">01. Visit Feedback</h1>
          <p className="text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        <div>
          <h1 className="text-[#3BB77E] text-2xl pb-3">03. Billing Inquiries</h1>
          <p className="text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        <div>
          <h1 className="text-[#3BB77E] text-2xl pb-3">02. Employer Services</h1>
          <p className="text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        <div>
          <h1 className="text-[#3BB77E] text-2xl pb-3">04. General Inquiries</h1>
          <p className="text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Help;
