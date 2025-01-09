import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  history: any;
}
const Layout = ({ children, history }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
