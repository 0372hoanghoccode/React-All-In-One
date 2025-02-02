import React, { useState } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { User } from "../types/reusableTypes";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const contextValue: AppContextType = { user, setUser };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
