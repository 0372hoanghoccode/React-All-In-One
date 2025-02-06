import React, { useEffect } from 'react';
import { useTabs } from './Tabs';

interface TabProps {
  name: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ name, children }) => {
  const { activeTab, setActiveTab } = useTabs();

  // Nếu chưa có activeTab thì đặt tab đầu tiên là active
  useEffect(() => {
    if (!activeTab) {
      setActiveTab(name);
    }
  }, [activeTab, name, setActiveTab]);

  return (
    <div style={{ display: activeTab === name ? 'block' : 'none', padding: '1rem', border: '1px solid #ddd' }}>
      {children}
    </div>
  );
};

export default Tab;
