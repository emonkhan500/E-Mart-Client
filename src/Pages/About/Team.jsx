import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SharedTitle from "../../Shared/ui/SharedTitle";

const teamMembers = [
  {
    id: 1,
    name: "Md. Emon Khan",
    role: "CEO & Founder",
    image: "https://i.ibb.co/j9gTXjdy/img.png",
    github: "https://github.com/emonkhan500",
    linkedin: "https://www.linkedin.com/in/md-emon-khan",
    facebook:
      "https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/em0_n/",
  },
  {
    id: 2,
    name: "Md. Emon Khan",
    role: "Web Developer",
    image: "https://i.ibb.co/VYPkKG1g/removebg-emon-1.png",
    github: "https://github.com/emonkhan500",
    linkedin: "https://www.linkedin.com/in/md-emon-khan",
    facebook:
      "https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/em0_n/",
  },
];

const Team = () => {
  return (
    <div className="lg:mt-16 quick">
      <SharedTitle title="Meet Our Team" />

      <div className="grid grid-cols-1 tab:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 mt-4 lg:mt-16">
        {/* Left Content */}
        <div className=" md:mt-10 block tab:hidden md:block">
          <p className="text-primary-green">Our Team</p>
          <h1 className="text-primary-text text-2xl md:text-3xl lg:text-5xl font-bold pb-2 md:pb-5 lg:pb-7 pt-3">
            Meet Our Expert Team
          </h1>
          <p className="text-primary-gray md:text-lg">
            Our team is made up of passionate professionals dedicated to
            delivering high-quality solutions. With strong expertise and a
            commitment to excellence, we work together to turn ideas into
            impactful results.
          </p>
        </div>

        {/* Team Members */}
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded border border-border shadow-lg"
          >
            <div className="rounded max-h-[330px] max-w-[400px] overflow-hidden mx-auto">
              <img
                src={member.image}
                alt={member.name}
                className=" w-full  h-[500px] object-cover"
              />
            </div>

            {/* Info Card */}
            <div className="text-center relative w-11/12 md:w-10/12 lg:w-[250px] xl:w-[300px] bg-white mx-auto pb-3">
              <h1 className="quick text-xl font-bold text-primary-text mt-1 mb-2">
                {member.name}
              </h1>
              <p className="text-primary-gray">{member.role}</p>

              <div className="flex justify-center pt-2 space-x-4">
                <a href={member.github} className="">
                  <FaGithub className="w-6 h-4 lg:h-6 text-primary-green" />
                </a>

                <a href={member.linkedin} className="">
                  <FaLinkedin className="w-6 h-4 lg:h-6 text-primary-green" />
                </a>

                <a href={member.facebook} className="">
                  <FaFacebookF className="w-6 h-4 lg:h-6 text-primary-green" />
                </a>

                <a href={member.instagram} className="">
                  <FaInstagram className="w-6 h-4 lg:h-6 text-primary-green" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
