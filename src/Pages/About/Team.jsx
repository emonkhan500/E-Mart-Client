import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
const Team = () => {
  return (
    <div className="mt-16 quick">
      <div>
        <h1 className="text-4xl text-center font-bold mt-3 text-[#3BB77E]">
          Meet Our Team
        </h1>

        <div className="flex justify-center mt-3 pr-7">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      {/* team */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-16">
          {/* 1 */}
          <div className="lg:mt-10">
            <p className="text-[#3BB77E]">Our Team</p>
            <h1 className="text-[#253D4E] text-2xl lg:text-5xl font-bold pb-7 pt-3">Meet Our Expert Team</h1>
            <p className="text-[#7E7E7E] lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              provident, quisquam ea molestiae dolorem id nisi veritatis
              molestias quo, dignissimos sequi voluptatibus? Nihil, commodi.
              Dolorem accusantium cupiditate voluptatum quod corporis illo,
              reiciendis voluptates laudantium consequuntur rerum obcaecati vel
              eum sequi.
            </p>
          </div>
          {/* 2 */}
          <div>
            <div className="rounded">
              <img
                src="https://i.ibb.co.com/N6bsPvR2/image-1.png"
                alt=""
                className="lg:w-[400px] lg:h-[380px] bg-[#FEEFEA]"
              />
            </div>
            {/* relative div */}
            <div className="text-center relative w-11/12 md:w-10/12 lg:w-[280px] xl:w-[375px] bg-[#FFF] rounded shadow-lg px-3 py-1 -top-16 left-3">
              <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                Md. Emon Khan
              </h1>
              <p className="text-[#7E7E7E]">
              CEO & FOUNDER
              </p>

              
              <div class="flex justify-center   pt-2 space-x-4 ">
   {/* Icon 1  */}
  <a href="https://github.com/emonkhan500"  class=" rounded-lg p-2 ">
   
       <FaGithub className="w-6 h-6 text-[#3BB77E]"></FaGithub>
    
  </a>
  
 {/* Icon 2  */}
  <a href="https://www.linkedin.com/in/md-emon-khan"  class=" rounded-lg p-2 ">
   
     <FaLinkedin className="w-6 h-6 text-[#3BB77E]"></FaLinkedin>
    
  </a>
  
  {/* Icon 3  */}
  <a href="https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL"  class=" rounded-lg p-2 ">
    
    <FaFacebookF className="w-6 h-6 text-[#3BB77E]"/>
   
  </a>
  
   {/* Icon 4 */}
  <a href="https://www.instagram.com/em0_n/"  class=" rounded-lg p-2 ">
    
  <FaInstagram  className="w-6 h-6 text-[#3BB77E]"/>
   
  </a>
</div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="rounded">
              <img
                src="https://i.ibb.co.com/N6bsPvR2/image-1.png"
                alt=""
                className="lg:w-[400px] lg:h-[380px] bg-[#F2FCE4]"
              />
            </div>
            {/* relative div */}
            <div className="text-center relative w-11/12 md:w-10/12 lg:w-[280px] xl:w-[375px] bg-[#FFF] rounded shadow-lg px-3 py-1 -top-16 left-3">
              <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                Md. Emon Khan
              </h1>
              <p className="text-[#7E7E7E]">
              WEB DEVELOPER
              </p>

              <div class="flex justify-center   pt-2 space-x-4 ">
   {/* Icon 1  */}
  <a href="https://github.com/emonkhan500"  class=" rounded-lg p-2 ">
   
       <FaGithub className="w-6 h-6 text-[#3BB77E]"></FaGithub>
    
  </a>
  
 {/* Icon 2  */}
  <a href="https://www.linkedin.com/in/md-emon-khan"  class=" rounded-lg p-2 ">
   
     <FaLinkedin className="w-6 h-6 text-[#3BB77E]"></FaLinkedin>
    
  </a>
  
  {/* Icon 3  */}
  <a href="https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL"  class=" rounded-lg p-2 ">
    
    <FaFacebookF className="w-6 h-6 text-[#3BB77E]"/>
   
  </a>
  
   {/* Icon 4 */}
  <a href="https://www.instagram.com/em0_n/"  class=" rounded-lg p-2 ">
    
  <FaInstagram  className="w-6 h-6 text-[#3BB77E]"/>
   
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
