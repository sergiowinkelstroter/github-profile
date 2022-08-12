import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export const Repos = () => {
  const { userRepos, userData } = useContext(ApiContext);

  return (
    <div className="bg-neutral-50 w-3/4 md:w-[700px] p-6  m-auto mt-8 md:mt-12 mb-4 rounded-xl">
      <div className="block md:flex items-center justify-center  ">
        <h1 className="text-xl text-center relative">
          Repositories {userData?.name}
        </h1>
        <Link
          to="/"
          className="absolute  hover:opacity-50 left-36 md:left-[900px]"
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
