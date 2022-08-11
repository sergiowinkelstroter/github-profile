import { useState } from "react";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="">
      <img
        src="../../public/githublogo.png"
        alt=""
        className="m-auto mt-24  w-12"
      />
      <Profile />
    </div>
  );
}

export default App;
