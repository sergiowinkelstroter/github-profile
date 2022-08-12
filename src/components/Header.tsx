import { useContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import { MagnifyingGlass } from "phosphor-react";

import { Repos } from "./Repos";
import { ApiContext } from "../context/ApiContext";
import { Profile } from "./Profile";

export function Header() {
  const { setUserRepos, setUserData } = useContext(ApiContext);

  const [name, setName] = useState("");

  async function handleApi() {
    await Api.get(`${name}`).then(({ data }) => setUserData(data));
    await Api.get(`${name}/repos`).then(({ data }) => setUserRepos(data));
  }

  return (
    <>
      <div>
        <div className="flex justify-center">
          <input
            type="text"
            value={name}
            className="border-2 md:w-64 rounded-md mr-2 outline-none p-2 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleApi}
            className="hover:opacity-20  transition-opacity"
          >
            <MagnifyingGlass size={28} />
          </button>
        </div>
      </div>
    </>
  );
}
