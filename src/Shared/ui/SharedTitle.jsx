const SharedTitle = ({ title }) => {
  return (
    <div className="w-full lato pt-4 small:pt-6 lg:pt-10">
      <h1 className="text-center  font-bold text-2xl md:text-4xl">
        {title}
      </h1>

      <div className="flex justify-center mt-3 pr-7 mb-0 md:mb-8 ">
        <img
          src="https://i.ibb.co.com/1JBhBjNq/underheading.png"
          alt="heading underline"
        />
      </div>
    </div>
  )
}

export default SharedTitle
