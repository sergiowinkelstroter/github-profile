import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export const Profile = () => {
  const { userData } = useContext(ApiContext);
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <img src={userData?.avatar_url} alt="" className="w-28 rounded-full" />
      <a href={userData?.html_url} className="text-2xl" target="_black">
        {userData?.name}
      </a>
      <span className="text-zinc-500">{userData?.bio}</span>
      {userData?.name ? (
        <div className="flex md:flex-row flex-col gap-10 mt-12">
          <Link
            to="/repos"
            className="text-xl hover:opacity-20  transition-opacity"
          >
            {userData?.public_repos} Repositories
          </Link>
          <span className="border-b-2 md:border-r-2 border-black"></span>
          <span className="text-xl">{userData?.followers} Followers</span>
          <span className="border-b-2 md:border-r-2 border-black"></span>
          <span className="text-xl">{userData?.following} Following</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
