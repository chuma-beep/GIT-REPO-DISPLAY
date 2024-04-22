import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/chuma-beep/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  return (
    <div>
      <h2>My Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repositories/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
