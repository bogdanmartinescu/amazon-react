import React from "react";
import Header from "../components/header";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
