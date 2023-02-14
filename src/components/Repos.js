import React, { useEffect, useState } from "react";
import axios from "axios";
import format from "date-fns/format";
import { BiGitRepoForked } from 'react-icons/bi';

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };
  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repos_url]);

  return (
    <div className="mb-8">
      <h3 className="text-center font-bold text-xl text-teal-800">
        Public Repos 
      </h3>
      <ol className="mx-4">
        {repos.map((repo) => (
          <li key={repo.id} className="my-1">
            <a
              href={repo.html_url}
              className="text-lg font-semibold text-blue-900">
              {repo.name} {repo.fork ? <BiGitRepoForked className="text-amber-700 inline" /> : ""}
            </a>
            <p className="text-gray-900 text-sm">
              {" "}
              {repo.description == null
                ? "Descriptioon not available."
                : repo.description}{" "}
            </p>
            <div className="text-gray-900 text-sm">
              Languages: {repo.language}; &nbsp; &nbsp; Created at:{" "}
              {format(new Date(repo.created_at), "dd/MM/yyyy")}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Repos;
