import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';


function RepositoryList() {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");

    const fetchRepos = () => {
        fetch(`https://api.github.com/users/chuma-beep/repos?per_page=6&page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) {
                    setNextPage("End");
                } else {
                    setRepos(data);
                    setNextPage("Next");
                }
            });
    };

    useEffect(() => {
        fetchRepos();
    }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

    const viewNextPage = (event) => {
        event.preventDefault();
        setCurrentPage((prev) => prev + 1);
    };

    const viewPreviousPage = (event) => {
        event.preventDefault();
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const repoElements = repos.map((repoInfo) => {
        return (
            <section className="col-auto" key={repoInfo.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20 mt-10">
                    <div className="h-60 p-36">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow justify-self-center" >
                            <Link to={`/RepoDetails/${repoInfo.name}`}>veiw</Link>
                        </button>
                    </div>
                    <div className="flex-initial p-4 items-center border-t-2">
                        <h2 className="text-1xl font-semibold text-gray-800 RepoName">{repoInfo.name}</h2>
                        <p className="text-sm text-gray-600 Language">language: {repoInfo.language === null ? "none" : repoInfo.language}</p>
                        <p className="text-sm text-gray-600 Date">Start date & time: {repoInfo.created_at}</p>
                        <p className="text-sm text-gray-600 Visibility">Visibility: {repoInfo.visibility}</p>
                    </div>
                </div>
            </section>
        );
    });

    return (
        <>
            <div className="m-10 flex flex-row items-center justify-center">
                <nav aria-label="Page navigation">
                    <ul className="flex flex-row space-x-px text-sm">
                        <li className="flex flex-row gap-5">
                            <button
                                href="#"
                                className={`prev flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
                                    currentPage === 1 ? "invisible" : ""
                                    } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                onClick={viewPreviousPage}
                            >
                                prev
                            </button>
                            <button
                                href="#"
                                className={`next flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
                                    nextPage === "End" ? "invisible" : ""
                                    } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                onClick={viewNextPage}
                            >
                                next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">{repoElements}</div>
        </>
    );
}

export default RepositoryList;
