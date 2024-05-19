/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div>
       {results.map((result, id) => {
          return (
            <div key={id} className="flex flex-col items-center text-center max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20 mt-4 w-96">
              <Link to={`/repositories/${result.name}?page=${id}`} className="flex-initial p-4 text-center" >
                <div className="text-1xl font-semibold text-gray-800 RepoName">{result.name}</div>
                <p className="text-sm text-gray-600 Language">language: {result.language === null ? "none" : result.language}</p>
                <p className="text-sm text-gray-600 Description">{result.description}</p>
              </Link>
            </div>
          );
        }
       )}
    </div>
  );
}

export default SearchResultsList
