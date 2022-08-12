import { Header } from "./Header";
import { Profile } from "./Profile";
import logo from "../assets/githublogo.png";

export const Container = () => {
  return (
    <>
      <img src={logo} alt="" className="m-auto mt-12  w-12" />

      <div className="bg-neutral-50 w-3/4 md:w-[700px] p-6  m-auto mt-8 md:mt-12 mb-4 rounded-xl">
        <Header />
        <Profile />
      </div>
    </>
  );
};
