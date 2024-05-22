/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from "react-router-dom";
 

//hide search results list



export const SearchResultsList = ({ results }) => {
  return (
    <>
   
    <div className="max-h-80 w-96 justify-self-center flex flex-col justify-center items-center overflow-x-hidden overflow-y-scroll shadow-2xl shadow-blue-500/20">
       {results.map((result, id) => {
          return (
            <div key={id} className="flex flex-col items-center h-18 text-center max-w-sm bg-white rounded-lg w-96 border-b-2 border-gray-100 cursor-pointer hover:bg-blue-50 hover:text-gray-900">
              <Link to={`/repositories/${result.name}?page=${id}`} className="flex-initial p-4 text-center" >
                <div className="text-1xl font-semibold text-gray-800 RepoName">{result.name}</div>
                <p className="text-sm text-gray-600 Language">language: {result.language === null ? "none" : result.language}</p>
              </Link>
            </div>
          );
        }
       )}
    </div>
    </>
  );
}

export default SearchResultsList

