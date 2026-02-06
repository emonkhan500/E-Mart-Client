const addressData = [
  {
    title: "Office",
    address: "Tangail-Sadar 1900, Tangail, Dhaka",
    phone: "+880-1884932158",
    email: "emon562002@gmail.com",
  },
  {
    title: "Studio",
    address: "Tangail-Sadar 1900, Tangail, Dhaka",
    phone: "+880-1884932158",
    email: "emon562002@gmail.com",
  },
  {
    title: "Shop",
    address: "Tangail-Sadar 1900, Tangail, Dhaka",
    phone: "+880-1884932158",
    email: "emon562002@gmail.com",
  },
];

const Address = () => {
  return (
    <div className="border-b-4 border-primary-green">
      <div className="quick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 md:my-14">
        {addressData.map((item, index) => (
          <div key={index} className="text-center">
            <h1 className="text-primary-green font-bold text-2xl md:text-3xl">
              {item.title}
            </h1>
            <p className="mt-1 lg:mt-4 text-sm md:text-base lg:text-lg text-primary-gray">
              {item.address}
            </p>
            <p className="mt-1 lg:mt-4 text-sm md:text-base lg:text-lg text-primary-gray">
              Phone: {item.phone}
            </p>
            <p className="mt-1 lg:mt-4 text-sm md:text-base lg:text-lg text-primary-gray">
              Email: {item.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
