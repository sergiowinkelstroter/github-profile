import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export const Repos = () => {
  const { userRepos, userData } = useContext(ApiContext);

  return (
    <div className="bg-neutral-50 w-3/4 md:w-[700px] p-6  m-auto mt-8 md:mt-12 mb-4 rounded-xl">
      <div className="block md:flex items-center justify-center relative">
        <h1 className="text-xl text-center ">Repositories {userData?.name}</h1>
        <Link
          to="/"
          className="absolute  hover:opacity-50 left-44 md:left-[600px] "
        >
          Voltar
        </Link>
      </div>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-10">
        {userRepos?.map((repos) => {
          return (
            <div key={repos.id}>
              <a
                target="_blank"
                href={repos.html_url}
                className="hover:opacity-50"
              >
                {repos.name}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
