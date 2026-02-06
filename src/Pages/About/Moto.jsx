const motoData = [
  {
    title: "Who we are ..",
    desc:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our history ..",
    desc:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our mission ..",
    desc:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
];

const Moto = () => {
  return (
    <div className="border-t-4 mt-6 md:mt-16 text-center px-3 md:px-5 lg:px-10 border-primary-green">
      <div className="quick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10 lg:mt-14 mb-14">
        {motoData.map((item, index) => (
          <div key={index}>
            <h1 className="text-primary-green font-bold text-2xl lg:text-3xl">
              {item.title}
            </h1>
            <p className="mt-2 md:mt-3 lg:mt-5 text-sm md:text-base lg:text-lg text-primary-gray">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moto;
