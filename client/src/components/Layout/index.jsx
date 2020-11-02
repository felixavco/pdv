import React, { Fragment } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Fragment>
      <div>
        <Sidebar />
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
