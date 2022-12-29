/**
 * Title: App layout
 * Description: app layout
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:49:05.000-05:00
 */

import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
