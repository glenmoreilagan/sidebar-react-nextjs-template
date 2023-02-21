import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarNav from '@/components/pages/SideNavigation/index';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  return <ProSidebarProvider>
    <SidebarNav>
      <Component {...pageProps} />
    </SidebarNav>
  </ProSidebarProvider>
}

export default App