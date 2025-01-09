import React from 'react';
import { selectLayout } from 'utils/selectLayout';
import LoginLayout from './LoginLayout';
import BaseLayout from './BaseLayout';

const Layout = ({ children, history, location }: LayoutProps) => {
  const layoutMap = {
    LoginLayout,
    BaseLayout,
  };
  const Container = layoutMap[selectLayout(location.pathname)];

  return <Container>{children}</Container>;
};

export default Layout;
