import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header style={{ padding: '1rem', background: '#f0f0f0' }}>Header</header>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', background: '#f0f0f0' }}>Footer</footer>
    </div>
  );
};

export default Layout;
