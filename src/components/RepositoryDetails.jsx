import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RepositoryDetails = () => {
  const { repoName } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/chuma-beep/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepository(data))
      .catch((error) =>
        console.error("Error fetching repository details:", error)
      );
  }, [repoName]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
      <p>Language: {repository.language}</p>
      <p>Stars: {repository.stargazers_count}</p>
    </div>
  );
};

export default RepositoryDetails;
