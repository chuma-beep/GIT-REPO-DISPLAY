//import React from 'react';
//import { Button } from './ui/button';
import { Helmet } from 'react-helmet-async';
import HomeButton  from './HomeButton';

// const handleRefresh = () => {
//   // Reload the current page
//   window.location.reload();
// };


const ErrorBoundaryUI = () => {

  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="ErrorBoundaryUI"> 
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">OOPS! There was an error</h1>
        </div>
        <div>
          {/* <Button onClick={handleRefresh}>Refresh</Button> */}
          <HomeButton/>
        </div>
      </div>
    </>
  );
};

export default ErrorBoundaryUI;
