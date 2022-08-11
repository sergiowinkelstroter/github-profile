import { useState } from "react";
import { Api } from "../services/api";
import { MagnifyingGlass } from "phosphor-react";

type ProfileProps = {
  avatar_url: string;
  followers: number;
  bio: string;
  name: string;
  public_repos: number;
  following: number;
  html_url: string;
};

export function Profile() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  async function handleApi() {
    await Api.get(`${name}`).then(({ data }) => setProfile(data));
    setName("");
  }

  return (
    <div className="bg-neutral-50 w-[700px] p-6  m-auto mt-12 rounded-xl">
      <div className="flex justify-center">
        <input
          type="text"
          value={name}
          className="border-2 rounded-md mr-2 outline-none p-2"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleApi}>
          <MagnifyingGlass size={28} />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2 mt-8">
        <img src={profile?.avatar_url} alt="" className="w-28 rounded-full" />
        <a href={profile?.html_url} className="text-2xl" target="_black">
          {profile?.name}
        </a>
        <span className="text-zinc-500">{profile?.bio}</span>
        {profile?.name ? (
          <div className="flex gap-10 mt-12">
            <span className="text-xl">
              {profile?.public_repos} Repositories
            </span>
            <span className="border-r-2 border-black"></span>
            <span className="text-xl">{profile?.followers} Followers</span>
            <span className="border-r-2 border-black"></span>
            <span className="text-xl">{profile?.following} Following</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}