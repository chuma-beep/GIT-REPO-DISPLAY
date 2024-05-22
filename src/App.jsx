import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryList from "./components/RepositoryList";
import RepositoryDetails from "./components/RepositoryDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryUI from "./components/ErrorBoundaryUI";
import NotFound from "./components/NotFound";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        
        <ErrorBoundary
        FallbackComponent={ErrorBoundaryUI}
      >
         <ErrorBoundary FallbackComponent={ErrorBoundary}>
      <Navbar />
      </ErrorBoundary>
        {/* <Navbar/> */}
        <Header/>
        <RepositoryList />
        <Footer/>
      </ErrorBoundary>
        } />
        <Route path="/repositories" element={
        <RepositoryList />} />
        <Route 
          path="/repositories/:repoName" 
          element={
            <ErrorBoundary FallbackComponent={ErrorBoundaryUI}>
              <RepositoryDetails />
              <Footer/>
            </ErrorBoundary>
          } 
        />

        <Route path="/ErrorBoundary" element={<ErrorBoundaryUI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

