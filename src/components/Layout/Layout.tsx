import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileNav from '../MobileNav/MobileNav';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content mobile-padding-bottom">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
