import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ApiProviderProps {
  children: ReactNode;
}
type ProfileProps = {
  avatar_url: string;
  followers: number;
  bio: string;
  name: string;
  public_repos: number;
  following: number;
  html_url: string;
};

interface ReposProps {
  id: string;
  name: string;
}

interface ApiContextData {
  setUserData: Dispatch<SetStateAction<ProfileProps | null>>;
  setUserRepos: Dispatch<SetStateAction<any[]>>;
  userData: ProfileProps | null;
  userRepos: any[];
}

export const ApiContext = createContext({} as ApiContextData);

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [userData, setUserData] = useState<ProfileProps | null>(null);
  const [userRepos, setUserRepos] = useState<any>([]);

  return (
    <ApiContext.Provider
      value={{ setUserData, setUserRepos, userData, userRepos }}
    >
      {children}
    </ApiContext.Provider>
  );
};
