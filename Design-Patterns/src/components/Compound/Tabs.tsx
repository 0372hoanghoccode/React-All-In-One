import React, { createContext, useContext, useState } from 'react';
import Tab from './Tab';

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> & { Tab: typeof Tab } = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs provider");
  }
  return context;
};

Tabs.Tab = Tab;
export default Tabs;
