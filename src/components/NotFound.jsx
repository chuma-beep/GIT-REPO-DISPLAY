const NotFound = () => {
  return <div className="ErrorPage "> 
   <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Page Not Found</p>
        <p className="md:text-lg lg:text-xl text-blue-600 mt-8">Sorry, the page you are looking for could not be found.</p>
        <a href="#" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150" title="Return Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            {/* <span>Return Home</span> */}
        </a>
    </div>
  </div>;
};

export default NotFound;
