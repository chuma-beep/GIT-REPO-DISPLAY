import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

function RepositoryDetails() { 
  
  const [user, setUser] = useState([])

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/chuma-beep/repos`)
    .then((response) => (response.json()))
    .then((data) => {
        setUser(data)  
    })
  }

  useEffect(() => {
    fetchRepos()
  }, []) 

  const userElements = user.map((userElement) => {
        return (
            <div className="repo-card" key={userElement.id}>
               <button><Link to={`/repositories/${userElement.name}`}>Info</Link></button>
                <h2 className="repo-name">{userElement.name}</h2>
                <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
             </div>
        )
  })

  return (
      <>
        <section className="repo-container">
            {userElements}
        </section>
      </>
  )
}

export default RepositoryDetails