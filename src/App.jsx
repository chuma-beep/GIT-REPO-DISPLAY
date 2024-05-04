import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryList from "./components/RepositoryList";
import RepositoryDetails from "./components/RepositoryDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryUI from "./components/ErrorBoundaryUI";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/repositories/" element={<RepositoryList />} />
          <Route path="/repositories/" element={<RepositoryDetails />} />
          <Route path="/repositories/" element={<NotFound />} />
          <Route path="/repositories" element={<Footer />} />     
          <Route 
            path="/repositories/:repoName"
            element={
              <ErrorBoundary FallbackComponent={ErrorBoundaryUI}>
                <RepositoryList />
               <RepositoryDetails />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
  
    </Router>
  );
};

export default App;