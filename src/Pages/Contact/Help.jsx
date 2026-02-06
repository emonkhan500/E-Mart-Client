const helpItems = [
  {
    id: "01",
    title: "Visit Feedback",
    desc:
      "Share your experience with us. Your feedback helps us improve our services, website usability, and overall customer satisfaction.",
  },
  {
    id: "02",
    title: "Employer Services",
    desc:
      "Get assistance with employer-related services, partnerships, and business solutions tailored to your business needs.",
  },
  {
    id: "03",
    title: "Billing Inquiries",
    desc:
      "Have questions about payments, invoices, or subscriptions? Our support team is ready to provide clear and quick solutions.",
  },
  {
    id: "04",
    title: "General Inquiries",
    desc:
      "For any other questions or concerns, feel free to contact us. We’re always happy to help and guide you properly.",
  },
];

const Help = () => {
  return (
    <div className="flex border py-4 px-2 flex-col md:flex-row gap-0 md:gap-8 lg:gap-6  lg:mb-10 mt-8 lg:mt-16">
      {/* Left Section */}
      <div className="space-y-2 md:w-5/6 lg:w-1/3">
        <h1 className="text-primary-green text-lg font-bold quick">
          How can we help you?
        </h1>
        <h1 className="text-2xl small:text-3xl md:text-2xl lg:text-3xl text-primary-text font-bold">
          Let us know how we can assist you
        </h1>
        <p className="text-primary-gray">
          We’re here to make your experience smooth and stress-free. Whether you
          need support, have a question, or want to share feedback, our team is
          always ready to help.
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-7 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 lg:w-2/3">
        {helpItems.map((item) => (
          <div key={item.id}>
            <h1 className="text-primary-green text-xl small:text-2xl pb-1 md:pb-3">
              {item.id}. {item.title}
            </h1>
            <p className="text-primary-gray">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
