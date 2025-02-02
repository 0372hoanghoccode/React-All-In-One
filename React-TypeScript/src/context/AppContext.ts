import React from "react";
import { User } from "../types/reusableTypes";

//đn kiểu cho context state
export interface AppContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

//gtri mặc định của context
export const AppContext = React.createContext<AppContextType | undefined>(
  undefined
);
