
//import { Button } from "./ui/button";
import { useState } from "react";

import {Search} from "./Search";
import {SearchResultsList} from "./SearchResultsList";




function Header() {
  const [results, setResults] = useState([]);


  return (
  
    <div className="mt-4 items-center">
      <div className="lg:2/6 xl:w-4/4 mt-20 lg:mt-40 lg:ml-16 text-center items-center">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          HELLO, YOU CAN VEIW ALL MY REPOS HERE
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          You can also directly search for a project that might have puiqed your
          interest
        </div>
         <div className="flex flex-col justify-center items-center">
       <Search setResults={setResults}/>   

       <SearchResultsList results={results} />     
        </div>
      </div>
      <div className="mt-12 lg:mt-32 lg:ml-20 text-left"></div>
    </div>
    
  );
}

export default Header;
