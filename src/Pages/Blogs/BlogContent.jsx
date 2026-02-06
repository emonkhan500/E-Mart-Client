import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const blogPosts = [
  {
    img: "https://i.ibb.co.com/wF3gMBGG/banner-8-png.png",
    category: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/fzsPYRrY/banner-5-png.png",
    category: "Side Dish",
    title: "Summer Quinoa Salad Jars with Lemon Dill",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/M5fK9jF1/Link-blog-5-png.png",
    category: "Breakfast",
    title: "Caprese Chicken with Smashed Potatoes",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/B5fR598G/banner-6-png.png",
    category: "Side Dish",
    title: "Harissa Chickpeas with Whipped Feta",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/bgxFVsYR/Link-blog-6-png.png",
    category: "Vegan",
    title: "Almond Butter Chocolate Chip Zucchini Bars",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/PGk8Z1bs/Link-blog-8-png.png",
    category: "Side Dish",
    title: "Smoky Beans & Greens Tacos with Aji Verde",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/MkYyJsH5/Link-blog-9-png.png",
    category: "Dairy Free",
    title: "Sticky Ginger Rice Bowls with Pickled Veg",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/hR2zPjqD/Link-blog-10-png.png",
    category: "Salad",
    title: "The Absolute Easiest Spinach and Pizza Pizza",
    date: "25 April 2022",
    views: "126k Views",
    readTime: "4 mins read",
  },
  {
    img: "https://i.ibb.co.com/hR2zPjqD/Link-blog-11-png.png",
    category: "Dessert",
    title: "Delicious Chocolate Lava Cake",
    date: "26 April 2022",
    views: "150k Views",
    readTime: "5 mins read",
  },
];

const BlogContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Calculate the indexes of posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="quick mt-5 md:mt-10">
     
        {/* Header */}
        <div className="border-t-2 mt-1 md:mt-8 border-primary-green flex flex-col tab:flex-row items-center justify-between tab:px-6 md:px-12 lg:px-12 xl:px-32">
          <div className="flex items-center gap-6 mt-3 md:mt-10">
            <img
              src="https://i.ibb.co.com/fV6RhZjz/category-1-svg.png"
              alt="category"
            />
            <h1 className="text-xl md:text-3xl lg:text-5xl text-primary-text font-bold">
              Recipes Articles
            </h1>
          </div>
          <div className="flex items-center justify-center mt-5 md:mt-7 lg:mt-10 ">
            <input
              className=" py-2 md:py-3 lg:py-5 pl-12 border-2 outline-none w-full lg:w-96"
              placeholder="Search For Items..."
            />
            <IoIosSearch className="relative top-[1px] -left-[55px] md:-left-[65px] lg:-left-[90px] text-secondary-text text-[1.3rem]" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mt-8 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 lg:gap-x-2 xl:gap-x-0 md:gap-y-16" >
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center text-center md:px-3"
            >
              <div className="h-full w-full xl:max-h-[286.69px]">
                <img src={post.img} alt="blog post"  className="h-full w-full" />
              </div>
              <p className="text-secondary-gray">{post.category}</p>
              <h1 className="text-primary-text text-xl font-extrabold hover:text-primary-green">
                {post.title}
              </h1>
              <div className="flex justify-between px-2 small:px-6 md:px-3 text-primary-gray text-sm small:text-base md:text-lg lg:text-base space-y-1">
                <h1 className="mt-1">{post.date}</h1>
                <h1>{post.views}</h1>
                <h1>{post.readTime}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <button
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary-green text-white"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-3 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-primary-green text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary-green text-white"
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
     
    </div>
  );
};

export default BlogContent;
