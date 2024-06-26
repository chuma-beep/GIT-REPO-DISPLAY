import { Link } from 'react-router-dom';
//import { useErrorBoundary } from "react-error-boundary";


export default function Navbar(){
 //const [showErrorBoundary] = useErrorBoundary();
 
 //test if the error boundary is working
 //const ErrorBoundary = () => {
//   const error = new Error("Testing error Boundary");
//   showErrorBoundary(error);
// }


    return(
        <>
<nav className="bg-white border-gray-200 justify-end">
  <div className="">
    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
    </a>
   
    <div className="flex flex-row justify-end" id="navbar-default">
      <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        {/* <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li> */}
        <li>
          <Link to="/NotFound" className="block py-2 px-3 text-black rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">404 Page</Link>
        </li>
        <li>
          <Link to="/ErrorBoundary" className="block py-2 px-3 text-black rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Error Boundary</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
        </>
    )
}