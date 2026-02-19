import CountUp from "react-countup";

const gloryData = [
  {
    end: 5,
    label: "Glorious years",
  },
  {
    end: 10000,
    label: "Happy clients",
  },
  {
    end: 2000,
    label: "Projects complete",
  },
  {
    end: 50000,
    label: "Products Sale",
  },
  {
    end: 100,
    label: "Team advisor",
  },
];

const Glory = () => {
  return (
    <div className="quick relative w-full mx-auto my-10 px-3 md:px-5 lg:px-10">
      {/* Background Image with Overlay */}
      <div
        className="p-5 md:p-0 relative bg-cover bg-center md:h-56 flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/NcvGKjw/glory-bg.jpg)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-glory bg-opacity-85"></div>

        {/* Stats Container */}
        <div className="relative z-10 flex justify-around w-full text-white text-center px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-36">
            {gloryData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="flex justify-center text-3xl lg:text-4xl font-bold">
                  <CountUp start={0} end={item.end} delay={1} enableScrollSpy>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  +
                </span>
                <span className="text-lg lg:text-xl font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glory;
